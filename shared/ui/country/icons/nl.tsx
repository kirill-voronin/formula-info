import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface NetherlandsProps {
  width?: number;
  height?: number;
}

const NL = ({ width = 100, height = 100 }: NetherlandsProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_1372)">
      <Path d="M100 0H0V100H100V0Z" fill="#21468B" />
      <Path d="M100 0H0V66.6667H100V0Z" fill="white" />
      <Path d="M100 0H0V33.3333H100V0Z" fill="#AE1C28" />
    </G>
    <Defs>
      <ClipPath id="clip0_5_1372">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NL;

