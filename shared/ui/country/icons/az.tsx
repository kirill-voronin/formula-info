import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface AzerbaijanProps {
  width?: number;
  height?: number;
}

const AZ = ({ width = 100, height = 100 }: AzerbaijanProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_281)">
      <Path d="M100 0H0V100H100V0Z" fill="#C8102E" />
      <Path d="M100 33.3333H0V66.6666H100V33.3333Z" fill="white" />
    </G>
    <Defs>
      <ClipPath id="clip0_5_281">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AZ;

