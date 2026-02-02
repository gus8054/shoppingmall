import theme from "@/app/theme";
import { BREAKPOINTS } from "@/app/theme/breakpoint";
import { CSSProperties, ElementType, HTMLAttributes } from "react";
import styled from "styled-components";

const StyledText = styled.span`
  color: ${theme.colors.text};
  font-size: var(--text-font-size, inherit);
  letter-spacing: var(--text-letter-spacing, inherit);
  line-height: var(--text-line-height, inherit);
  display: var(--text-display, inline);
  &[data-variant="extraSmall"] {
    --text-font-size: ${theme.fontSizes.extraSmall}px;
    --text-letter-spacing: ${theme.letterSpacings.extraSmall}px;
    --text-line-height: ${theme.lineHeights.extraSmall}px;
  }
  &[data-variant="small"] {
    --text-font-size: ${theme.fontSizes.small}px;
    --text-letter-spacing: ${theme.letterSpacings.small}px;
    --text-line-height: ${theme.lineHeights.small}px;
  }
  &[data-variant="medium"] {
    --text-font-size: ${theme.fontSizes.medium}px;
    --text-letter-spacing: ${theme.letterSpacings.medium}px;
    --text-line-height: ${theme.lineHeights.medium}px;
  }
  &[data-variant="mediumLarge"] {
    --text-font-size: ${theme.fontSizes.mediumLarge}px;
    --text-letter-spacing: ${theme.letterSpacings.mediumLarge}px;
    --text-line-height: ${theme.lineHeights.mediumLarge}px;
  }
  &[data-variant="large"] {
    --text-font-size: ${theme.fontSizes.large}px;
    --text-letter-spacing: ${theme.letterSpacings.large}px;
    --text-line-height: ${theme.lineHeights.large}px;
  }
  &[data-variant="extraLarge"] {
    --text-font-size: ${theme.fontSizes.extraLarge}px;
    --text-letter-spacing: ${theme.letterSpacings.extraLarge}px;
    --text-line-height: ${theme.lineHeights.extraLarge}px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: var(--text-font-size-md, var(--text-font-size, inherit));
    letter-spacing: var(
      --text-letter-spacing-md,
      var(--text-letter-spacing, inherit)
    );
    line-height: var(--text-line-height-md, var(--text-line-height, inherit));
    display: var(--text-display-md, var(--text-display, inherit));
  }
`;

export type TextVariant =
  | "extraSmall"
  | "small"
  | "medium"
  | "mediumLarge"
  | "large"
  | "extraLarge";

type TextProps = HTMLAttributes<HTMLSpanElement> &
  CSSProperties & {
    variant?: TextVariant;
    as?: ElementType;
  };

const Text = ({
  variant = "medium",
  color,
  children,
  style,
  ...rest
}: TextProps) => {
  return (
    <StyledText style={{ ...style, color }} data-variant={variant} {...rest}>
      {children}
    </StyledText>
  );
};
export default Text;
