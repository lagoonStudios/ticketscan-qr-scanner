import { PressableProps as RNPressableProps, TextStyle, ViewStyle } from "react-native";

export interface LogOutButtonProps extends RNPressableProps {
  containerStyles?: ViewStyle;
  textStyles?: TextStyle
}
