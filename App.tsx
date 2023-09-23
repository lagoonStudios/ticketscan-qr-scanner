import '@/lib/firebase/firebaseConfig';
import { StatusBar } from "expo-status-bar";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query/react-query";

import RootNavigation from "@/navigation";



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <RootNavigation />
    </QueryClientProvider>
  );
}


