import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import Svg, { Circle, G, Line, Path } from "react-native-svg";
import { colors } from "../theme/colors";

const Loading = ({ color = colors.primary }: { color?: string }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [rotation, setRotation] = useState(0);

  const line1Value = useRef(new Animated.Value(0)).current;
  const line2Value = useRef(new Animated.Value(0)).current;
  const line3Value = useRef(new Animated.Value(0)).current;

  const [line1X, setLine1X] = useState(0);
  const [line2X, setLine2X] = useState(0);
  const [line3X, setLine3X] = useState(0);

  // Анимация вращения колес
  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => spin());
    };
    spin();

    const listener = spinValue.addListener(({ value }) => {
      setRotation(value * 360);
    });

    return () => {
      spinValue.removeListener(listener);
    };
  }, [spinValue]);

  // Анимация для первой линии (влево-вправо)
  useEffect(() => {
    const animateLine1 = () => {
      Animated.sequence([
        Animated.timing(line1Value, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(line1Value, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ]).start(() => animateLine1());
    };
    animateLine1();

    const listener = line1Value.addListener(({ value }) => {
      // Движение от -20 до +20 пикселей
      setLine1X((value - 0.5) * 40);
    });

    return () => line1Value.removeListener(listener);
  }, [line1Value]);

  // Анимация для второй линии (вправо-влево)
  useEffect(() => {
    const animateLine2 = () => {
      Animated.sequence([
        Animated.timing(line2Value, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(line2Value, {
          toValue: 0,
          duration: 1800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ]).start(() => animateLine2());
    };
    animateLine2();

    const listener = line2Value.addListener(({ value }) => {
      // Движение от +20 до -20 пикселей (обратное направление)
      setLine2X((0.5 - value) * 40);
    });
    return () => line2Value.removeListener(listener);
  }, [line2Value]);

  // Анимация для третьей линии (влево-вправо)
  useEffect(() => {
    const animateLine3 = () => {
      Animated.sequence([
        Animated.timing(line3Value, {
          toValue: 1,
          duration: 1200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(line3Value, {
          toValue: 0,
          duration: 1200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ]).start(() => animateLine3());
    };
    animateLine3();

    const listener = line3Value.addListener(({ value }) => {
      // Движение от -20 до +20 пикселей
      setLine3X((value - 0.5) * 40);
    });

    return () => line3Value.removeListener(listener);
  }, [line3Value]);

  return (
    <Svg width={31 * 7} height={7 * 7} fill="none" viewBox="0 0 775 175">
      <Path
        fill={color}
        d="M337.518 0h83.75c5.584 0 9.305 3.721 9.305 9.305v45.597c2.792.93 4.653 1.86 7.445 2.792 20.473-14.89 55.833-31.639 112.597-38.154 2.792 0 5.584.931 7.444 1.86 1.861 1.862 2.792 4.653 2.792 6.514v32.57c14.889 0 43.736.931 76.306 5.584 10.236-9.305 24.194-13.958 39.083-13.958 26.986 0 50.251 17.68 57.695 42.806 16.75 8.376 29.778 19.542 39.083 30.708 1.861 2.792 2.792 6.513.932 10.236-1.861 2.792-4.653 5.584-8.376 5.584h-36.291c-10.237 19.541-30.708 32.57-53.043 32.57-23.265 0-43.736-13.029-53.043-32.57H466.863c-10.236 19.541-30.709 32.57-53.041 32.57s-43.736-13.029-53.041-32.57h-22.334c-5.583 0-9.305-3.722-9.305-9.305V9.305C328.213 3.723 331.934 0 337.518 0m398.278 122.833h7.444c-1.86-1.86-4.652-2.791-6.513-4.652v2.792c-.931 0-.931.931-.931 1.86m-59.554 31.639c18.61 0 34.43-12.097 40.014-29.778 0-1.861.931-2.792.931-4.652.931-2.792.931-5.584.931-8.376s0-4.653-.931-7.445v-1.86c-4.653-18.61-20.473-32.57-40.944-32.57-11.167 0-22.333 4.652-29.778 12.097-1.861 1.86-3.721 3.721-4.652 5.584-.932.93-1.861 2.791-2.792 4.652-.931.931-.931 1.861-1.861 3.722-.931 1.86-.931 3.721-1.861 5.584 0 .931-.931 1.86-.931 1.86-.931 2.792-.931 5.584-.931 8.376s0 5.584.931 8.376c0 1.86.931 2.791.931 3.721 6.512 18.612 22.331 30.709 40.943 30.709m-203.794-31.639h144.238v-.931c0-2.792-.932-5.583-.932-8.375v-9.306c0-1.86.932-2.791.932-4.652 0-.931 0-1.861.931-2.792 0-1.86.931-2.792.931-3.722s.931-1.86.931-2.792l2.792-5.583v-.931c-39.083-4.653-70.722-3.722-71.653-3.722-2.792 0-4.653-.931-6.514-2.792-1.86-1.86-2.791-3.721-2.791-6.513V40.014c-41.875 5.584-69.793 18.61-87.472 29.778l3.721 3.722.932.931c.931 1.86 2.791 2.792 3.721 4.653 6.513 10.236 11.166 21.402 11.166 34.43-.002 1.861-.002 5.584-.933 9.305q0-1.394 0 0m-59.554 31.639c18.61 0 34.431-12.097 40.014-28.847.931-1.86.931-3.721 1.861-4.652 0-1.861.931-3.722.931-6.514v-1.86c0-2.792 0-4.653-.931-7.445v-1.861c-.931-1.86-.931-3.721-1.861-6.513 0-.931-.931-.931-.931-1.86-.931-1.862-1.861-2.793-2.792-4.653-.931-.931-.931-1.861-1.86-1.861-.932-1.86-2.792-2.792-3.722-4.653l-1.861-1.86c-.931-.932-2.792-2.792-4.652-3.722l-1.861-1.86c-6.513-3.722-13.958-6.514-22.334-6.514-23.264 0-41.875 18.61-41.875 41.875 0 2.792 0 5.584.932 8.376 0 1.86.931 2.792.931 3.721 5.579 18.606 21.399 30.703 40.011 30.703m-66.071-31.639h6.513v-.931c0-2.792-.931-5.583-.931-8.375v-9.307c0-.931 0-1.861.931-3.722 0-.93 0-1.86.932-2.791 0-.932.931-1.861.931-2.792s.931-1.861.931-2.792.931-1.861.931-2.792.931-1.86.931-2.792.931-1.86.931-2.792.931-1.86 1.861-2.792c.931-.93.931-1.86 1.861-2.792.931-.93.931-1.86 1.86-1.86.932-.931.932-1.861 1.861-2.792l1.861-1.861c.931-.931.931-1.86 1.861-1.86l1.86-1.862c.932-.93 1.861-.93 1.861-1.86.931-.931 1.861-.931 1.861-1.861.931-.931 1.861-.931 2.792-1.86.931-.932 1.861-.932 2.792-1.861.931-.932 1.86-.932 2.792-1.861.931-.931 1.86-.931 2.791-.931.932 0 1.861-.931 2.792-.931s1.861-.932 2.792-.932 1.861-.93 2.792-.93 1.861-.932 2.792-.932 1.861-.931 2.792-.931 1.861 0 2.792-.931h7.444V17.68h-65.14v105.154z"
      />
      <Line
        x1={307 + line1X}
        y1="22"
        x2={89 + line1X}
        y2="22"
        stroke={color}
        strokeWidth="6"
      />
      <Line
        x1={288 + line2X}
        y1="88"
        x2={70 + line2X}
        y2="88"
        stroke={color}
        strokeWidth="6"
      />
      <Line
        x1={218 + line3X}
        y1="53"
        x2={0 + line3X}
        y2="53"
        stroke={color}
        strokeWidth="6"
      />
      <G transform={`rotate(${rotation} 675.414 113.414)`}>
        <Circle cx={675.414} cy={113.414} r={27.414} stroke={color} strokeWidth={4} />
        <Circle cx={675.834} cy={112.994} r={13.707} stroke={color} strokeWidth={2} />
        <Path
          stroke={color}
          strokeWidth={2}
          d="M676.095 99.968V87.362m13.606 25.212h12.606m-8.27 20.877l-10.085-10.085m-17.979-20.5l-8.914-8.914m28.573 10.351l9.245-9.244m-39.499 36.978l10.085-10.085m-16.101-9.538h12.606m12.446 27.053v-12.606"
        />
      </G>
      <G transform={`rotate(${rotation} 412.414 113.414)`}>
        <Circle cx={412.414} cy={113.414} r={27.414} stroke={color} strokeWidth={4} />
        <Circle cx={412.834} cy={112.994} r={13.707} stroke={color} strokeWidth={2} />
        <Path
          stroke={color}
          strokeWidth={2}
          d="M413.095 99.968V87.362m13.606 25.212h12.606m-8.27 20.877l-10.085-10.085m-17.979-20.5l-8.914-8.914m28.573 10.351l9.245-9.244m-39.499 36.978l10.085-10.085m-16.101-9.538h12.606m12.446 27.053v-12.606"
        />
      </G>
    </Svg>
  );
};

export default Loading;
