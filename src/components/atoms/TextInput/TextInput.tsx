import { useFormContext } from "react-hook-form";
import { ControlledInput } from "./ControlledInput";
import { TextInputProps } from "./TextInput.constants";

export const TextInput = (props: TextInputProps) => {
  // --- Hooks ----------------------------------------------------------------------------
  const formContext = useFormContext();
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const { name } = props;
  // --- END: Data and handlers -----------------------------------------------------------

  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  return <ControlledInput {...props} />;
};
