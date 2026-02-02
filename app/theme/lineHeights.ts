type LineHeightTypeArray = [17, 19, 22, 26, 28, 37];
type LineHeightTypeObject = {
  extraSmall: LineHeightTypeArray[0];
  small: LineHeightTypeArray[1];
  medium: LineHeightTypeArray[2];
  mediumLarge: LineHeightTypeArray[3];
  large: LineHeightTypeArray[4];
  extraLarge: LineHeightTypeArray[5];
};
type LineHeightType = LineHeightTypeArray & LineHeightTypeObject;
const lineHeights = [17, 19, 22, 26, 28, 37] as LineHeightType;
lineHeights.extraSmall = lineHeights[0];
lineHeights.small = lineHeights[1];
lineHeights.medium = lineHeights[2];
lineHeights.mediumLarge = lineHeights[3];
lineHeights.large = lineHeights[4];
lineHeights.extraLarge = lineHeights[5];
export default lineHeights;
