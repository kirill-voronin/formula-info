import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface MexicoProps {
  width?: number;
  height?: number;
}

const MX = ({ width = 100, height = 100 }: MexicoProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_982)">
      <Path d="M0 0H100V100H0V0Z" fill="#CE1126" />
      <Path d="M0 0H66.6666V100H0V0Z" fill="white" />
      <Path d="M0 0H33.3334V100H0V0Z" fill="#006847" />
    </G>
    <Defs>
      <ClipPath id="clip0_5_982">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MX;

