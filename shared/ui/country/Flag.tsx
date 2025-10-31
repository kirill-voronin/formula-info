import { StyleSheet, View } from "react-native";
import BR from "./icons/br";
import IT from "./icons/it";

export const FLAGS: Record<string, React.ComponentType<any>> = {
  Brazil: BR,
  Italy: IT,
};

interface CountryFlagProps {
  code: string;
  width?: number;
  height?: number;
}

const Flag = ({ code, width = 32, height = 32 }: CountryFlagProps) => {
  const FlagComponent = FLAGS[code];
  if (!FlagComponent) {
    console.warn(`Flag not found: ${code}`);
    return <View style={[styles.placeholder, { width, height }]} />;
  }
  return <FlagComponent width={width} height={height} />;
};

export default Flag;

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
  },
});
