import styled from "styled-components";
import { CloseIcon } from "@/app/components/atoms/IconButton";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import { MouseEventHandler } from "react";

const ImagePreviewContainer = styled(Box)`
  position: relative;
  background-color: #d2d2d2;
`;
const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: contain;
`;
const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

type ImagePreviewProps = {
  src?: string;
  alt?: string;
  height?: string;
  width?: string;
  onRemove?: (src: string) => void;
};
/**
 * 이미지 미리보기
 */
const ImagePreview = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  const handleCloseClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (src) onRemove?.(src);
  };
  return (
    <ImagePreviewContainer style={{ height, width }}>
      <StyledImage src={src} alt={alt ?? "image"} />
      <CloseBox onClick={handleCloseClick} data-testid="remove-button">
        <CloseIcon width={24} height={24} color="white" />
      </CloseBox>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
