import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface MonacoProps {
  width?: number;
  height?: number;
}

const MC = ({ width = 100, height = 100 }: MonacoProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_322)">
      <Path d="M0 0H150V100H0V0Z" fill="white" />
      <Path d="M0 0H100V50H0V0Z" fill="#CE1126" />
    </G>
    <Defs>
      <ClipPath id="clip0_5_322">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MC;

