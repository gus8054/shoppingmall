import theme from "@/app/theme";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.text};
  &:not(:first-of-type) {
    &::before {
      content: "/";
      color: ${theme.colors.gray};
      padding: 0 8px;
      font-size: 0.9em;
    }
  }
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
  &:last-of-type {
    a {
      font-weight: bold;
      cursor: default;
      pointer-events: none;
    }
  }
`;
type BreadcrumbItemProps = LinkProps & {
  children: ReactNode;
};

const BreadcrumbItem = ({ href, children }: BreadcrumbItemProps) => {
  return (
    <StyledBreadcrumbItem>
      <Link href={href}>{children}</Link>
    </StyledBreadcrumbItem>
  );
};
export default BreadcrumbItem;
