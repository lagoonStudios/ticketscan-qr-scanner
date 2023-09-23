import React from "react";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuthentication } from "@/hooks/auth/auth";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <AppStack /> : <AuthStack />;
}
