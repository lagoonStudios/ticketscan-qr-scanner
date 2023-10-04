import React from "react";
import {
  getAuth,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user,
  };
}

export function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function handleAuthErrorMessage(message: string): string {
  console.log("error msg: ", message);
  //firebase errors docs https://firebase.google.com/docs/auth/admin/errors?hl=es-419

  if (message.includes("invalid-email")) return "Email inválido";

  else if (message.includes("invalid-login-credentials")) return "Usuario o contraseña inválidos";

  else if(message.includes("insufficient-permission")) return "No tienes permisos";
  
  else if(message.includes("user-disabled")) return "El usuario está deshabilitado";

  else if(message.includes("user-not-found")) return "El usuario no existe";

  else if(message.includes("email-already-in-use")) return "El email ya está en uso";

  else if(message.includes("app-deleted")) return "La aplicación ha sido eliminada";

  else if(message.includes("network-request-failed")) return "Problemas de conexión, revisa tu conexión a internet";
  

  return "Error de autenticación";
}
