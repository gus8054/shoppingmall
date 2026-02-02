type SpaceTypeArray = [0, 8, 16, 24, 32, 64];
type SpaceTypeObject = {
  extraSmall: SpaceTypeArray[0];
  small: SpaceTypeArray[1];
  medium: SpaceTypeArray[2];
  mediumLarge: SpaceTypeArray[3];
  large: SpaceTypeArray[4];
  extraLarge: SpaceTypeArray[5];
};
type SpaceType = SpaceTypeArray & SpaceTypeObject;

const space = [0, 8, 16, 24, 32, 64] as SpaceType;
space.extraSmall = space[0];
space.small = space[1];
space.medium = space[2];
space.mediumLarge = space[3];
space.large = space[4];
space.extraLarge = space[5];
export default space;
