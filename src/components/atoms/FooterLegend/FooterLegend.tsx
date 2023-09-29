import { View, Text } from "react-native";
import { styles } from "./FooterLegend.styles";

export function FooterLegent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© Ticketscan todos los derechos reservados 2023</Text>
      <Text style={styles.text}>Powered by Lagoon Studio</Text>
    </View>
  );
}
