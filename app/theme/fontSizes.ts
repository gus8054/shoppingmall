type FontSizeArray = [12, 14, 16, 20, 24, 26];
type FontSizeObject = {
  extraSmall: FontSizeArray[0];
  small: FontSizeArray[1];
  medium: FontSizeArray[2];
  mediumLarge: FontSizeArray[3];
  large: FontSizeArray[4];
  extraLarge: FontSizeArray[5];
};
type FontSizesType = FontSizeArray & FontSizeObject;

const fontSizes = [12, 14, 16, 20, 24, 26] as FontSizesType;

fontSizes.extraSmall = fontSizes[0];
fontSizes.small = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.mediumLarge = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.extraLarge = fontSizes[5];

export default fontSizes;
