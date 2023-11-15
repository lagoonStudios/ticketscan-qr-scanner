import Toast from "react-native-toast-message";
import { AppLogo } from "@/components/atoms/AppLogo";
import { TextInput } from "@/components/atoms/TextInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import { Button } from "@/components/atoms/Button";
import { useMutation } from "@tanstack/react-query";
import { styles } from "./ManualRegister.styles";
import { manualRegister } from "./ManualRegister.functions";

export function ManualRegister(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const { ...methods } = useForm({ defaultValues: { document: "" } });

  const registerMutation = useMutation((data: { document: string }) => manualRegister(data.document), {
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Ocurrió un error",
      });
    },
  });
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Local state ----------------------------------------------------------------------
  const errors = methods.formState.errors;
  // --- END: Local state ----------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const onSubmit: SubmitHandler<any> = (data) => {
    registerMutation.mutate(data);
  };
  // --- END: Data and handlers ----------------------------------------------------------
  return (
    <View style={styles.container}>
      <AppLogo width={300} height={300} />
      <FormProvider {...methods}>
        <View style={styles.formContainer}>
          <View>
            <TextInput
              name="document"
              label="Documento de identidad"
              inputMode="numeric"
              rules={{
                required: "Requerido",
                min: 0,
                max: 99999999,
              }}
              testID="document-input"
            />
            {!errors.document && <View style={styles.errorSpace}></View>}
            {errors.document && errors.document.type === "required" && (
              <Text style={styles.errorText}>Requerido</Text>
            )}
            {errors.document &&
              (errors.document.type === "min" || errors.document.type === "max") && (
                <Text style={styles.errorText}>Documento inválido</Text>
              )}
          </View>
          <Button
            disabled={registerMutation.isLoading}
            onPress={methods.handleSubmit(onSubmit)}
            testID="submit-login">
            Registrar
          </Button>
        </View>
      </FormProvider>
    </View>
  );
}
