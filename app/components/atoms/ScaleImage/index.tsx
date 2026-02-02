import Image, { ImageProps } from "next/image";
import styled from "styled-components";

const StyledScaleImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: var(--scale-image-width, inherit);
  height: var(--scale-image-height, inherit);
`;
const StyledScaleImage = styled(Image)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
type ScaleImageProps = Omit<ImageProps, "width" | "height"> & {
  width?: string;
  height?: string;
};

const ScaleImage = ({
  width = "100%",
  height = "100%",
  alt = "scale image",
  src = "/images/sample/1.jpg",
  ...rest
}: ScaleImageProps) => {
  return (
    <StyledScaleImageWrapper
      style={{
        "--scale-image-width": width,
        "--scale-image-height": height,
      }}>
      <StyledScaleImage
        data-testid="scale-image"
        fill={true}
        alt={alt}
        src={src}
        {...rest}
      />
    </StyledScaleImageWrapper>
  );
};
export default ScaleImage;
