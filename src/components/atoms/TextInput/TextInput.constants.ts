import { UseControllerProps } from "react-hook-form";
import { TextInputProps as RNTextInputProps } from "react-native";

export interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label?: string;
  defaultValue?: string;
}
