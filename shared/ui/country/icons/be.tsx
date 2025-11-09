import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface BelgiumProps {
  width?: number;
  height?: number;
}

const BE = ({ width = 100, height = 100 }: BelgiumProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_164)">
      <Path d="M0 0H100V100H0V0Z" fill="#EF3340" />
      <Path d="M0 0H66.6667V100H0V0Z" fill="#FDDA25" />
      <Path d="M0 0H33.3333V100H0V0Z" fill="black" />
    </G>
    <Defs>
      <ClipPath id="clip0_5_164">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BE;

