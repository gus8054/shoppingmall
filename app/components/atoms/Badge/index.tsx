import styled from "styled-components";

const StyledBadgeWrapper = styled.div`
  height: 20px;
  width: fit-content;
  padding-inline: 4px;
  min-width: 20px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--badge-background-color, tomato);
`;
const StyledBadgeText = styled.p`
  color: white;
  font-size: 12px;
  user-select: none;
`;
type BadgeProps = {
  content?: number;
  backgroundColor?: string;
};
const Badge = ({ content = 1, backgroundColor = "tomato" }: BadgeProps) => {
  const style = {
    "--badge-background-color": backgroundColor,
  };
  return (
    <StyledBadgeWrapper style={style}>
      <StyledBadgeText>{content}</StyledBadgeText>
    </StyledBadgeWrapper>
  );
};
export default Badge;
