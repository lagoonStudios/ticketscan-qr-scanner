import { TextInputProps as RNTextInputProps } from "react-native";
import { UseControllerProps } from "react-hook-form";

export interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label?: string;
  defaultValue?: string;
}
