import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface UKProps {
  width?: number;
  height?: number;
}

const GB = ({ width = 100, height = 100 }: UKProps) => (
  <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
    <G clipPath="url(#clip0_5_964)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-24.8 0.132812H124.451V99.5321H-24.8V0.132812Z"
        fill="#012169"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.0004 69.7852L109.251 99.8654H124.551V89.9733L87.3512 66.1106L64.0004 65.976V69.7852ZM35.6503 69.9198L-9.59993 100H-24.9V90.107L12.3002 66.2424L35.6503 66.1097V69.9198ZM64.1504 30.3467L109.451 0.266479H124.75V10.1595L87.4991 34.0232L64.1504 34.1578V30.3467ZM35.601 30.3467L-9.69993 0.267408H-25V10.1605L12.2502 34.0241L35.601 34.1578V30.3467Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-24.75 33.4893H124.451V66.0427H-24.75V33.4893Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.7003 0.334229H63.9511V99.5999H35.7003V0.334229Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.9003 0H58.7511V99.5998H40.9003V0ZM-24.9 99.5998L24.8002 66.377H35.7003L-14.3 99.8663C-14.3 99.8663 -24.9 99.8663 -24.9 99.5998ZM64.3497 33.5552L114.151 0.199606H125L75.2004 33.5552C75.2004 33.5552 64.3497 33.8235 64.3497 33.5552ZM-24.65 7.68716L15.7002 33.623H26.0502L-24.6 2.07126C-24.6 2.07126 -24.65 8.35561 -24.65 7.68716ZM124.351 92.9813L83.6512 66.1105L72.7011 66.0437L124.351 99.7326V92.9813Z"
        fill="#C8102E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.8511 30.6819L64.6511 30.4813L63.9511 34.4911C63.9511 34.4911 63.9511 30.8146 63.8511 30.6819Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-24.75 41.1755H124.451V58.5561H-24.75V41.1755Z"
        fill="#C8102E"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5_964">
        <Rect width="100" height="100" rx="50" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GB;

