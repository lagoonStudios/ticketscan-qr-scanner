import { Image, View } from "react-native";
import { AppLogoProps } from "./AppLogo.constants";

export function AppLogo(props: AppLogoProps): React.JSX.Element {
  const { height, width } = props;
  return (
    <View>
      <Image
        source={require("@/assets/logo.png")}
        style={{ width: width, height: height, alignSelf: "center" }}
        resizeMode="contain"
        alt="Ticket scan logo"
      />
    </View>
  );
}
