import theme from "@/app/theme";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: ${theme.colors.inputText};
  padding: 11px 12px 12px 9px;
  outline: none;
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 19px;
  appearance: none;
  border: var(--input-border, none);
  border-radius: 5px;

  /* 호버나 포커스 시에도 나타나지 않도록 명시 */
  &[type="number"]:hover::-webkit-inner-spin-button,
  &[type="number"]:focus::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }

  &[data-has-border="true"] {
    --input-border: 1px solid ${theme.colors.border};
  }
  &[data-has-error="true"] {
    --input-border: 1px solid ${theme.colors.danger};
  }
`;
type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  hasError?: boolean;
  hasBorder?: boolean;
  type?: "text" | "number" | "password";
};
const Input = ({
  hasError = false,
  hasBorder = true,
  placeholder = "Placeholder",
  type = "text",
  value,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      data-has-border={!!hasBorder}
      data-has-error={!!hasError}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      data-testid="input"
      {...rest}
    />
  );
};
export default Input;
