import { Image, View } from "react-native";
import { AppLogoProps } from "./AppLogo.constants";

export function AppLogo(props: AppLogoProps): React.JSX.Element {
  const { containerStyle, height, width } = props;
  return (
    <View style={containerStyle}>
      <Image
        source={require("@/assets/logo.png")}
        style={{ width: width, height: height }}
        resizeMode="contain"
        alt="Ticket scan logo"
      />
    </View>
  );
}
