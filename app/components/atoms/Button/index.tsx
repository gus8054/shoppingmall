import theme from "@/app/theme";
import { BREAKPOINTS } from "@/app/theme/breakpoint";
import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  user-select: none;
  text-align: center;
  cursor: pointer;
  padding-block: 4px;
  padding-inline: 8px;

  /* color & bg color */
  color: var(--button-color, white);
  background-color: var(--button-background-color, black);

  &:hover {
    background-color: var(--button-background-color-hover, gray);
  }

  &:disabled {
    background-color: var(--button-background-color-disabled, black);
    opacity: 0.5;
    cursor: unset;
  }

  /* 속성 선택자 */
  &[data-variant="primary"] {
    --button-background-color: ${theme.colors.primary};
    --button-background-color-hover: ${theme.colors.primaryDark};
    --button-background-color-disabled: ${theme.colors.primary};
  }
  &[data-variant="secondary"] {
    --button-background-color: ${theme.colors.secondary};
    --button-background-color-hover: ${theme.colors.secondaryDark};
    --button-background-color-disabled: ${theme.colors.secondary};
  }
  &[data-variant="danger"] {
    --button-background-color: ${theme.colors.danger};
    --button-background-color-hover: ${theme.colors.dangerDark};
    --button-background-color-disabled: ${theme.colors.danger};
  }

  /* 반응형 */
  width: var(--button-width, unset);
  display: var(--button-display, inline-block);
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: var(--button-width-md, var(--button-width, unset));
    display: var(--button-display-md, var(--button-display, inline-block));
  }
`;
type ButtonVariant = "none" | "primary" | "secondary" | "danger";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};
const Button = ({
  variant = "none",
  disabled = false,
  children = "BUTTON",
  style,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      data-variant={variant}
      style={style}
      onClick={onClick}
      {...rest}>
      {children}
    </StyledButton>
  );
};
export default Button;
