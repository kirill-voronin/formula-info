import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface JapanProps {
  width?: number;
  height?: number;
}

const JP = ({ width = 100, height = 100 }: JapanProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_978)">
      <Path d="M100 0H0V100H100V0Z" fill="white" />
      <Path
        d="M49.5 73C61.9264 73 72 62.9264 72 50.5C72 38.0736 61.9264 28 49.5 28C37.0736 28 27 38.0736 27 50.5C27 62.9264 37.0736 73 49.5 73Z"
        fill="#BC002D"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5_978">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default JP;

