import { StyleSheet, View } from "react-native";
import AE from "./icons/ae";
import AT from "./icons/at";
import AU from "./icons/au";
import AZ from "./icons/az";
import BE from "./icons/be";
import BH from "./icons/bh";
import BR from "./icons/br";
import CA from "./icons/ca";
import CN from "./icons/cn";
import ES from "./icons/es";
import GB from "./icons/gb";
import HU from "./icons/hu";
import IT from "./icons/it";
import JP from "./icons/jp";
import MC from "./icons/mc";
import MX from "./icons/mx";
import NL from "./icons/nl";
import QA from "./icons/qa";
import SA from "./icons/sa";
import SG from "./icons/sg";
import US from "./icons/us";

export const FLAGS: Record<string, React.ComponentType<any>> = {
  Australia: AU,
  Austria: AT,
  Azerbaijan: AZ,
  Belgium: BE,
  Bahrain: BH,
  Brazil: BR,
  Canada: CA,
  China: CN,
  Spain: ES,
  "Great Britain": GB,
  Hungary: HU,
  Italy: IT,
  Japan: JP,
  Monaco: MC,
  Mexico: MX,
  Netherlands: NL,
  Qatar: QA,
  "Saudi Arabia": SA,
  Singapore: SG,
  "United Arab Emirates": AE,
  "United States": US,
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
