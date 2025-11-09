import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface UAEProps {
  width?: number;
  height?: number;
}

const AE = ({ width = 100, height = 100 }: UAEProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_958)">
      <Path d="M100 0H0V100H100V0Z" fill="#00732F" />
      <Path d="M100 33.3334H0V100H100V33.3334Z" fill="white" />
      <Path d="M100 66.6666H0V100H100V66.6666Z" fill="black" />
      <Path d="M25 0H0V100H25V0Z" fill="#FF0000" />
    </G>
    <Defs>
      <ClipPath id="clip0_5_958">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default AE;

