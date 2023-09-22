import { QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./src/pages/Home/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { queryClient } from "@/lib/react-query/react-query";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/lib/firebase/firebaseConfig";

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { firestore };
