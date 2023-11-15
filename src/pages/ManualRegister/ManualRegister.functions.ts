export function manualRegister(document: string): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log("manual register: ", document);
    resolve("");
  });
}
