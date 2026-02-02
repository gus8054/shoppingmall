import { ResponsiveStyleType } from "@/app/types/styles";
import { generateMediaQueryStyle } from "@/app/utils/styles";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type StyledBoxProps = {
  $style?: ResponsiveStyleType;
};

const StyledBox = styled.div<StyledBoxProps>`
  display: block;
  ${(props) => props.$style && generateMediaQueryStyle("box", props.$style)}
`;

type BoxProps = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
  style?: ResponsiveStyleType;
  as?: "aside";
};

const Box = ({ style, children, ...rest }: BoxProps) => {
  return (
    <StyledBox $style={style} {...rest}>
      {children}
    </StyledBox>
  );
};
export default Box;
