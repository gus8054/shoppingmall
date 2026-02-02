import { ResponsiveStyleType } from "@/app/types/styles";
import { generateMediaQueryStyle } from "@/app/utils/styles";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type StyledFlexProps = {
  $style?: ResponsiveStyleType;
};

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  ${(props) => props.$style && generateMediaQueryStyle("flex", props.$style)}
`;

type FlexProps = Omit<HTMLAttributes<HTMLDivElement>, "style"> & {
  style?: ResponsiveStyleType;
};

const Flex = ({ style, children, ...rest }: FlexProps) => {
  return (
    <StyledFlex $style={style} {...rest}>
      {children}
    </StyledFlex>
  );
};
export default Flex;
