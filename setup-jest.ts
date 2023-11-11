jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
    onAuthStateChanged: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
}));
