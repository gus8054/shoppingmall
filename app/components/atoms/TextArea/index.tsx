import theme from "@/app/theme";
import {
  TextareaHTMLAttributes,
  useCallback,
  useRef,
  useEffect,
  ChangeEventHandler,
} from "react";
import styled from "styled-components";

// // 상수 정의 (높이 계산을 위해 필요)
const LINE_HEIGHT = 24;
const PADDING_TOP = 10;
const PADDING_BOTTOM = 10;
const BORDER_WIDTH = 1;

const StyledTextArea = styled.textarea`
  color: ${theme.colors.inputText};
  border: ${BORDER_WIDTH}px solid ${theme.colors.border};
  border-radius: 5px;
  outline: none;
  width: 100%;

  &[data-has-error="true"] {
    border-color: ${theme.colors.danger};
  }

  line-height: 24px;
  padding-top: ${PADDING_TOP}px;
  padding-bottom: ${PADDING_BOTTOM}px;
  padding-inline: 12px;
  resize: none;
  &::placeholder {
    color: ${theme.colors.placeholder};
  }
`;

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  minRows?: number;
  maxRows?: number;
  hasError?: boolean;
};

const TextArea = ({
  minRows = 5,
  maxRows = 10,
  hasError = false,
  value,
  onChange,
  ...rest
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const minHeight =
    minRows * LINE_HEIGHT + PADDING_TOP + PADDING_BOTTOM + BORDER_WIDTH * 2;
  const maxHeight =
    maxRows * LINE_HEIGHT + PADDING_TOP + PADDING_BOTTOM + BORDER_WIDTH * 2;

  const autoResize = useCallback(() => {
    const textArea = textAreaRef.current;
    if (!textArea) return;
    // 현재 입력된 텍스트에 맞춰 자동 높이 설정
    textArea.style.height = "auto";
    // 자동 설정된 높이 계산 (scrollHeight: 스크롤을 펼쳤을 때의 높이 픽셀, 보더 너비는 비포함)
    const newHeight = textArea.scrollHeight + BORDER_WIDTH;
    textArea.style.height = `${Math.min(maxHeight, newHeight)}px`;
  }, [maxHeight]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    autoResize();
    onChange?.(e);
  };
  useEffect(() => {
    autoResize();
  }, [autoResize]);

  return (
    <StyledTextArea
      ref={textAreaRef}
      rows={minRows}
      onChange={handleChange}
      value={value}
      data-has-error={hasError}
      aria-label={rest["aria-label"] || rest.placeholder}
      style={{
        minHeight,
        maxHeight,
      }}
      data-testid="textarea"
      {...rest}
    />
  );
};
export default TextArea;
