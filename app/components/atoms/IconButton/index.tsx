import {
  Cancel,
  CheckBox,
  CheckBoxOutlineBlank,
  Close,
  CloudUpload,
  GitHub,
  Person,
  PersonOutline,
  Search,
  ShoppingCart,
  SvgIconComponent,
} from "@mui/icons-material";
import styled from "styled-components";

const IconButtonWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    opacity: 0.5;
  }
  svg {
    width: inherit;
    height: inherit;
  }
`;
export type IconButtonProp = {
  width: number;
  height: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  onClick?: () => void;
};
const withIconStyle = (Icon: SvgIconComponent) => {
  const IconButton = ({
    width,
    height,
    color,
    backgroundColor,
    borderRadius,
    onClick,
  }: IconButtonProp) => {
    return (
      <IconButtonWrapper style={{ width, height }} onClick={onClick}>
        <Icon style={{ color, backgroundColor, borderRadius }} />
      </IconButtonWrapper>
    );
  };
  return IconButton;
};

export const CloseIcon = withIconStyle(Close);
export const SearchIcon = withIconStyle(Search);
export const CloudUploadIcon = withIconStyle(CloudUpload);
export const CancelIcon = withIconStyle(Cancel);
export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank);
export const CheckBoxIcon = withIconStyle(CheckBox);
export const PersonIcon = withIconStyle(Person);
export const GitHubIcon = withIconStyle(GitHub);
export const PersonOutlineIcon = withIconStyle(PersonOutline);
export const ShoppingCartIcon = withIconStyle(ShoppingCart);
