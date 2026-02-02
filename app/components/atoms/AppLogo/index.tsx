import Image from "next/image";
import styled from "styled-components";

const StyledAppLogo = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
type AppLogoProps = {
  width?: number;
  height?: number;
};
const AppLogo = ({ width = 48, height = 48, ...rest }: AppLogoProps) => {
  const src = `/images/logo.png`;
  return (
    <StyledAppLogo
      src={src}
      width={width}
      height={height}
      alt="app logo"
      {...rest}
    />
  );
};
export default AppLogo;
