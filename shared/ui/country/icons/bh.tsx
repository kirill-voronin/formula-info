import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface BahrainProps {
  width?: number;
  height?: number;
}

const BH = ({ width = 100, height = 100 }: BahrainProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_285)">
      <Path d="M150 0H0V100H150V0Z" fill="#509E2F" />
      <Path d="M150 0H0V66.6667H150V0Z" fill="#EF3340" />
      <Path d="M150 0H0V33.3333H150V0Z" fill="#00B5E2" />
      <Path
        d="M45 65C53.2843 65 60 58.2843 60 50C60 41.7157 53.2843 35 45 35C36.7157 35 30 41.7157 30 50C30 58.2843 36.7157 65 45 65Z"
        fill="white"
      />
      <Path
        d="M48.3333 62.5C55.2368 62.5 60.8333 56.9036 60.8333 50C60.8333 43.0964 55.2368 37.5 48.3333 37.5C41.4297 37.5 35.8333 43.0964 35.8333 50C35.8333 56.9036 41.4297 62.5 48.3333 62.5Z"
        fill="#EF3340"
      />
      <Path
        d="M61.6666 41.6666L63.2611 46.1505L67.5591 44.1075L65.5161 48.4055L69.9999 50L65.5161 51.5945L67.5591 55.8925L63.2611 53.8495L61.6666 58.3333L60.0721 53.8495L55.7741 55.8925L57.8171 51.5945L53.3333 50L57.8171 48.4055L55.7741 44.1075L60.0721 46.1505L61.6666 41.6666Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5_285">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BH;

