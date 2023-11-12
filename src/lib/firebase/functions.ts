export enum Collections {
  Users = "Users",
  Tickets = "Tickets",
}

export const handleFirebaseErrorMessage = (errorCode: string) => {
  const errorMessageMap: { [key: string]: string } = {
    "not-found": "No encontrado",
  };
  const defaultMessage = "Algo salió mal";

  const mappedMessage = Object.keys(errorMessageMap).find((key) => errorCode.includes(key));

  return mappedMessage ? errorMessageMap[mappedMessage] : defaultMessage;
};
