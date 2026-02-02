import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from "../../atoms/IconButton";
import Text from "../../atoms/Text";

export interface CheckBoxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "defaultValue"
> {
  label?: string; // 표시 라벨
}

const CheckBoxElement = styled.input`
  display: none;
`;

const Label = styled.label`
  display: block;
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`;

/**
 * 체크 박스
 */
const CheckBox = ({ label, onChange, checked, ...rest }: CheckBoxProps) => {
  return (
    <Label data-testid="checkbox-label">
      <Flex style={{ alignItems: "center" }}>
        <CheckBoxElement
          type="checkbox"
          {...rest}
          checked={checked}
          onChange={onChange}
        />
        {checked ? (
          <CheckBoxIcon width={20} height={20} />
        ) : (
          <CheckBoxOutlineBlankIcon width={20} height={20} />
        )}
        <Text>{label}</Text>
      </Flex>
    </Label>
  );
};
export default CheckBox;
