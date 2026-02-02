import { Activity, useCallback } from "react";
import styled from "styled-components";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import Dropzone from "@/app/components/molecules/Dropzone";
import ImagePreview from "@/app/components/molecules/ImagePreview";

const InputImagesContainer = styled(Flex)`
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`;

export type FileData = {
  id?: string;
  src?: string;
  file?: File;
  selected?: boolean;
  chosen?: boolean;
};
type InputImagesProps = {
  name?: string;
  images: FileData[];
  maximumNumber?: number;
  hasError?: boolean;
  width?: string;
  height?: string;
  onChange: (images: FileData[]) => void;
};
/**
 * 입력 이미지
 */
const InputImages = ({
  name,
  images = [],
  maximumNumber,
  hasError,
  width,
  height,
  onChange,
}: InputImagesProps) => {
  const isDropzoneDisplay =
    maximumNumber && images.length < maximumNumber ? "block" : "none";
  const onRemove = useCallback(
    (src: string) => {
      const image = images.find((img: FileData) => img.src === src);
      const newImages = images.filter((img: FileData) => img.src !== src);

      if (image) {
        if (image.file && image.src) {
          URL.revokeObjectURL(image.src);
          delete image.src;
        }

        onChange?.(newImages);
      }
    },
    [images, onChange],
  );

  const onDrop = useCallback(
    (files: File[]) => {
      const newImages: FileData[] = [];

      for (const file of files) {
        const img = images.find((img: FileData) => img.file === file);

        if (
          !img &&
          (!maximumNumber || images.length + newImages.length < maximumNumber)
        ) {
          newImages.push({ file, src: URL.createObjectURL(file) });
        }
      }

      onChange?.([...images, ...newImages]);
    },
    [images, maximumNumber, onChange],
  );
  return (
    <InputImagesContainer style={{ flexDirection: "column" }}>
      <Activity mode={images ? "visible" : "hidden"}>
        {images.map((img, index) => {
          return (
            <ImagePreview
              alt={img.id}
              key={index}
              src={img.src}
              height={height}
              onRemove={onRemove}
            />
          );
        })}
      </Activity>
      <Box style={{ display: isDropzoneDisplay }}>
        <Dropzone
          acceptedFileTypes={[
            "image/gif",
            "image/jpeg",
            "image/jpg",
            "image/png",
          ]}
          name={name}
          height={height}
          width={width}
          hasError={hasError}
          onDrop={onDrop}
        />
      </Box>
    </InputImagesContainer>
  );
};

export default InputImages;
