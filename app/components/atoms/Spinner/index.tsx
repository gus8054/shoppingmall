import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 70, 100;
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: -100;
  }
`;
const StyledSpinner = styled.svg`
  width: calc(var(--spinner-size, 100) * 1px);
  height: calc(var(--spinner-size, 100) * 1px);
  color: var(--spinner-color, black);
  animation: ${rotate} 4s linear infinite;
  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    stroke-width: calc(var(--spinner-stroke-width, 8) * 1px);
    animation: ${dash} 2s ease-in-out infinite;
  }
`;
type SpinnerProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};
const Spinner = ({ size = 100, color, strokeWidth = 8 }: SpinnerProps) => {
  const style: Record<string, string | number> = {};
  if (size) style["--spinner-size"] = size;
  if (color) style["--spinner-color"] = color;
  if (strokeWidth) style["--spinner-stroke-width"] = strokeWidth;

  return (
    <StyledSpinner
      style={style}
      viewBox={`0 0 ${size} ${size}`}
      role="status"
      aria-label="Loading">
      <circle
        className="path"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth / 2}
        fill="none"
        pathLength="100"
      />
    </StyledSpinner>
  );
};
export default Spinner;
