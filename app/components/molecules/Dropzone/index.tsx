import {
  useState,
  useRef,
  DragEventHandler,
  DragEvent,
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
} from "react";
import styled from "styled-components";
import { CloudUploadIcon } from "@/app/components/atoms/IconButton";
import theme from "@/app/theme";
import Text from "../../atoms/Text";

const isDragEvt = (value: DragEvent | ChangeEvent): value is DragEvent => {
  return "dataTransfer" in value;
};

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value instanceof HTMLInputElement;
};

/**
 * 이벤트로부터 입력된 파일을 얻는다
 * @param e DragEvent 또는 ChangeEvent
 * @returns File의 배열
 */
const getFilesFromEvent = (e: DragEvent | ChangeEvent): File[] => {
  if (isDragEvt(e)) {
    return Array.from(e.dataTransfer.files);
  } else if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files);
  }
  return [];
};

const DropzoneRoot = styled.div`
  border: 1px dashed ${theme.colors.border};
  &[data-is-focused="true"] {
    border-color: ${theme.colors.black};
  }
  &[data-has-error="true"] {
    border-color: ${theme.colors.danger};
  }

  border-radius: 8px;
  cursor: pointer;
`;

// 드롭존 내용
const DropzoneContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* 마우스 이벤트를 무시하게 만듦 */
  pointer-events: none;
`;

const DropzoneInputFile = styled.input`
  display: none;
`;

type FileType =
  | "image/png"
  | "image/jpeg"
  | "image/jpg"
  | "image/gif"
  | "video/mp4"
  | "video/quicktime"
  | "application/pdf";
type DropzoneProps = {
  name?: string;
  acceptedFileTypes?: FileType[];
  width?: string;
  height?: string;
  hasError?: boolean;
  onDrop?: (files: File[]) => void;
  onChange?: (files: File[]) => void;
};
/**
 * 드롭존
 * 파일의 입력을 받는다
 */
const Dropzone = ({
  name,
  acceptedFileTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"],
  width = "100%",
  height = "200px",
  hasError = false,
  onDrop,
  onChange,
}: DropzoneProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFiles = useCallback(
    (newFiles: File[]) => {
      // 기존 파일, 새로운 파일 합쳐서 파일 형식 체크
      const filteredFiles = newFiles.filter((f) =>
        acceptedFileTypes.includes(f.type as FileType),
      );

      if (newFiles.length > 0 && filteredFiles.length === 0) {
        //newFiles의 요소는 있는데 파일형식 필터링후 파일이 없을 때 즉, 모든 파일이 지원하지 않은 형식인 경우
        console.warn("지원하지 않은 형식입니다");
      }
      onDrop?.(filteredFiles);
      onChange?.(filteredFiles);
    },
    [acceptedFileTypes, onChange, onDrop],
  );
  const handleDragEnter: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();
    setIsFocused(true);
  }, []);
  const handleDragLeave: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();
    setIsFocused(false);
  }, []);
  const handleDragOver: DragEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();
  }, []);
  const handleDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      e.preventDefault();
      setIsFocused(false);
      const newFiles = getFilesFromEvent(e);
      handleFiles(newFiles);
    },
    [handleFiles],
  );

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();
      setIsFocused(false);
      const newFiles = getFilesFromEvent(e);
      handleFiles(newFiles);
      e.target.value = "";
    },
    [handleFiles],
  );
  return (
    <DropzoneRoot
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
      data-is-focused={isFocused}
      data-has-error={hasError}
      style={{ width, height }}>
      <DropzoneInputFile
        type="file"
        ref={inputRef}
        name={name}
        accept={acceptedFileTypes.join(",")}
        onChange={handleChange}
        multiple={true}
        data-testid="dropzone-input"
      />
      <DropzoneContent>
        <CloudUploadIcon width={24} height={24} />
        <Text variant="small">기기에서 업로드</Text>
      </DropzoneContent>
    </DropzoneRoot>
  );
};

export default Dropzone;
