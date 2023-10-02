// jest.mock('@/hooks/auth/auth', () => {
//     return () => ({
//       handleAuthErrorMessage: jest.fn(),
//       logIn: jest.fn(),
//      });
//   });

jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
    onAuthStateChanged: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
}));
