import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface QatarProps {
  width?: number;
  height?: number;
}

const QA = ({ width = 100, height = 100 }: QatarProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_1395)">
      <Path d="M0 0H100V100H0" fill="#8A1538" />
      <Path
        d="M29.3333 100H0V0H29.3333L37.3333 5.55556L29.3333 11.1111L37.3333 16.6667L29.3333 22.2222L37.3333 27.7778L29.3333 33.3333L37.3333 38.8889L29.3333 44.4444L37.3333 50L29.3333 55.5556L37.3333 61.1111L29.3333 66.6667L37.3333 72.2222L29.3333 77.7778L37.3333 83.3333L29.3333 88.8889L37.3333 94.4444L29.3333 100Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5_1395">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default QA;

