import { useFormContext } from "react-hook-form";
import { ControlledInput } from "./ControlledInput";
import { TextInputProps } from "./TextInput.constants";
import { useEffect, useState } from "react";

export const TextInput = (props: TextInputProps): React.JSX.Element | undefined => {
  // --- Hooks ----------------------------------------------------------------------------
  const formContext = useFormContext();
  const [hasError, setHasError] = useState(false);
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const { name } = props;
  // --- END: Data and handlers -----------------------------------------------------------

  // --- Side Effects ----------------------------------------------------------------
  useEffect(() => {
    if (!formContext || !name) {
      const msg = !formContext
        ? "TextInput must be wrapped by the FormProvider"
        : "TextInput Name must be defined";
      console.error(msg);
      setHasError(true);
    }
  }, [])
  // --- END: Side Effects -----------------------------------------------------------

  return hasError ? undefined : <ControlledInput {...props} />;
};
