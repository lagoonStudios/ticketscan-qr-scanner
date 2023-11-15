import React from "react";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

import { useAuthentication } from "@/hooks/auth";

export default function RootNavigation() {
  // --- Hooks ----------------------------------------------------------------------------
  const { user } = useAuthentication();
  // --- END: Hooks -----------------------------------------------------------------------

  return user ? <AppStack /> : <AuthStack />;
}
