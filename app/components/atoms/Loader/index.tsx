import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface RectLoaderProps extends IContentLoaderProps {
  variant?: "circle" | "square";
  width: number;
  height: number;
}

/**
 * 참고 : https://skeletonreact.com/
 */
const RectLoader = ({
  variant = "square",
  width,
  height,
  ...rest
}: RectLoaderProps) => {
  const style = {
    borderRadius: variant === "square" ? "0" : "50%",
  };
  return (
    <ContentLoader
      style={style}
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...rest}>
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
    </ContentLoader>
  );
};
export default RectLoader;
