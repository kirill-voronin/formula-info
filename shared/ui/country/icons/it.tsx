import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

const Italy = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_5_1414)">
        <Path d="M32 0H0V32H32V0Z" fill="#009246" />
        <Path d="M32 0H10.6667V32H32V0Z" fill="white" />
        <Path d="M32 0H21.3333V32H32V0Z" fill="#CE2B37" />
      </G>
      <Defs>
        <ClipPath id="clip0_5_1414">
          <Rect width="32" height="32" rx="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Italy;
