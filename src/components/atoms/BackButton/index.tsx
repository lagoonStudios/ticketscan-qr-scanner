import { Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackButtonProps } from "./BackButton.constants";

export function BackButton(props: BackButtonProps): React.JSX.Element {
  const { containerStyles } = props;

  // --- Hooks ----------------------------------------------------------------------------
  const navigation = useNavigation();
  // --- END: Hooks -----------------------------------------------------------------------

  return (
    <View style={containerStyles}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require("@/assets/icons/arrow-left.png")} />
      </Pressable>
    </View>
  );
}
