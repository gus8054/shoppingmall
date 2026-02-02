import { ResponsiveStyleType } from "@/app/types/styles";
import { generateMediaQueryStyle } from "@/app/utils/styles";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type StyledGridProps = {
  $style?: ResponsiveStyleType;
};

const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  ${(props) => props.$style && generateMediaQueryStyle("grid", props.$style)}
`;

type GridProps = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
  style?: ResponsiveStyleType;
};

const Grid = ({ style, children, ...rest }: GridProps) => {
  return (
    <StyledGrid $style={style} {...rest}>
      {children}
    </StyledGrid>
  );
};
export default Grid;
