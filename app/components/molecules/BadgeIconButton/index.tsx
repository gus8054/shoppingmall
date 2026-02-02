import styled from "styled-components";
import Badge from "../../atoms/Badge";
import { IconButtonProp } from "../../atoms/IconButton";
import { ComponentType } from "react";

const BadgeIconButtonWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -7px;
  right: -10px;
`;

type BadgeIconButtonProps = {
  IconButton: ComponentType<IconButtonProp>;
  badgeContent?: number;
  badgeBackgroundColor?: string;
  iconBackgroundColor?: string;
  size?: number;
  onClick?: () => void;
};

/**
 * 배지가 달린 아이콘 버튼
 */
const BadgeIconButton = ({
  IconButton,
  size = 24,
  badgeContent,
  badgeBackgroundColor,
  iconBackgroundColor,
  onClick,
}: BadgeIconButtonProps) => {
  return (
    <BadgeIconButtonWrapper>
      <IconButton
        width={size}
        height={size}
        backgroundColor={iconBackgroundColor}
        onClick={onClick}
      />
      {badgeContent && (
        <BadgeWrapper data-testid="badge-wrapper">
          <Badge
            content={badgeContent}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconButtonWrapper>
  );
};

export default BadgeIconButton;
