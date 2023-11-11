import { StyleSheet } from "react-native";
import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    margin: 40,
  },
  title: { fontSize: 32, fontWeight: "bold", margin: 20 },
  sectionsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 26,
  },
  subHeader: { fontSize: 16, margin: 10, fontWeight: "500", textAlign: "center" },
  listItem: { margin: 5 },
});
