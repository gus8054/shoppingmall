type LetterSpacingTypeArray = [0.5, 0.6, 0.7, 0.8, 0.9, 0.1];
type LetterSpacingTypeObject = {
  extraSmall: LetterSpacingTypeArray[0];
  small: LetterSpacingTypeArray[1];
  medium: LetterSpacingTypeArray[2];
  mediumLarge: LetterSpacingTypeArray[3];
  large: LetterSpacingTypeArray[4];
  extraLarge: LetterSpacingTypeArray[5];
};
type LetterSpacing = LetterSpacingTypeArray & LetterSpacingTypeObject;
const letterSpacings = [0.5, 0.6, 0.7, 0.8, 0.9, 0.1] as LetterSpacing;

letterSpacings.extraSmall = letterSpacings[0];
letterSpacings.small = letterSpacings[1];
letterSpacings.medium = letterSpacings[2];
letterSpacings.mediumLarge = letterSpacings[3];
letterSpacings.large = letterSpacings[4];
letterSpacings.extraLarge = letterSpacings[5];
export default letterSpacings;
