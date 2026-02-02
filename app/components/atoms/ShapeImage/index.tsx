import Image, { ImageProps } from "next/image";
import styled from "styled-components";

const StyledShapeImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border-radius: var(--shape-image-border-radius, 0%);
  &[data-shape="circle"] {
    --shape-image-border-radius: 50%;
  }
  &[data-shape="square"] {
    --shape-image-border-radius: 0%;
  }
`;
type ShapeImageProps = ImageProps & {
  shape?: "circle" | "square";
  width?: number;
  height?: number;
  alt: string;
  src: string;
};
const ShapeImage = ({
  shape = "square",
  width,
  height,
  alt = "shape image",
  src = "/images/sample/1.jpg",
  ...rest
}: ShapeImageProps) => {
  return (
    <StyledShapeImageWrapper style={{ width, height }} data-shape={shape}>
      <Image alt={alt} src={src} fill={true} {...rest} />
    </StyledShapeImageWrapper>
  );
};

export default ShapeImage;

// type ShapeImageProps = ImageProps & {
//   shape?: "circle" | "square";
// };

// const ImageWithShape = styled(Image)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   &[data-shape="circle"] {
//     border-radius: 50%;
//   }

//   &[data-shape="square"] {
//     border-radius: 0%;
//   }
// `;
// const ShapeImage = ({ shape, ...rest }: ShapeImageProps) => {
//   return <ImageWithShape data-shape={shape} {...rest} />;
// };

// export default ShapeImage;
