import "@/lib/firebase/firebaseConfig";
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query/react-query";

import RootNavigation from "@/navigation";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar  />
      <RootNavigation />

      {/* This must be tha last import */}
      <Toast />
    </QueryClientProvider>
  );
}
