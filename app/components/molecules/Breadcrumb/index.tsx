import { ReactNode } from "react";
import Flex from "../../layout/Flex";
import styled from "styled-components";

const StyledBreadcrumb = styled(Flex)``;
type BreadcrumbProps = {
  children?: ReactNode;
};
const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <StyledBreadcrumb forwardedAs="ol">{children}</StyledBreadcrumb>;
};
export default Breadcrumb;
