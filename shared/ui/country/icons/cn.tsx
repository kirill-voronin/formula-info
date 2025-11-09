import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface ChinaProps {
  width?: number;
  height?: number;
}

const CN = ({ width = 100, height = 100 }: ChinaProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_950)">
      <Path d="M100 0H0V100H100V0Z" fill="#EE1C25" />
      <Path
        d="M25.2659 17.462L34.0826 44.5973L11 27.8268H39.5317L16.4491 44.5973L25.2659 17.462Z"
        fill="#FFFF00"
      />
      <Path
        d="M52.2224 12.8608L51.3875 22.3347L46.4944 14.1794L55.2465 17.901L45.9784 20.0346L52.2224 12.8608Z"
        fill="#FFFF00"
      />
      <Path
        d="M63.8546 23.9805L59.4088 32.388L58.0638 22.973L64.6859 29.7993L55.3161 28.1691L63.8546 23.9805Z"
        fill="#FFFF00"
      />
      <Path
        d="M64.9627 40.7475L57.4738 46.6099L60.0866 37.4653L63.3479 46.3992L55.4582 41.0884L64.9627 40.7475Z"
        fill="#FFFF00"
      />
      <Path
        d="M52.0299 47.7836L51.5886 57.2839L46.3615 49.3386L55.2604 52.6941L46.0887 55.2101L52.0299 47.7836Z"
        fill="#FFFF00"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5_950">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CN;

