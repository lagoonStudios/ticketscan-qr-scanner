import { TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";

export interface ButtonProps extends RNTouchableOpacityProps {
  onPress?: () => void;
}
