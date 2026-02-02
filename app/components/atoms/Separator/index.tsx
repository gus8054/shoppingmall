import { Children, ReactNode } from "react";
import styled from "styled-components";

const StyledSeparator = styled.div`
  height: 24px;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e5e7eb;
  }

  &::before {
    margin-right: calc(var(--separator-margin-right-before, 0) * 1px);
  }
  &::after {
    margin-left: calc(var(--separator-margin-left-after, 0) * 1px);
  }
`;

type SeparatorProps = {
  children?: ReactNode;
};

const Separator = ({ children }: SeparatorProps) => {
  const hasContent = Children.count(children) > 0;

  const style: Record<string, number> = {};
  if (hasContent) {
    style["--separator-margin-right-before"] = 8;
    style["--separator-margin-left-after"] = 8;
  }

  return <StyledSeparator style={style}>{children}</StyledSeparator>;
};
export default Separator;
