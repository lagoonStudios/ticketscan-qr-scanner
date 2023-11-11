import * as firebaseAuth from "firebase/auth";
import Toast from "react-native-toast-message";
import { screen } from "@testing-library/react-native";

import * as localAuth from "@/hooks/auth";
import setupComponent from "@/utils/tests-utils";

import { SignIn } from "..";

describe("<SignIn />", () => {
  test("Should render propperly / has 2 childs", () => {
    const tree = setupComponent(<SignIn />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  test("Should match snapshot", () => {
    const tree = setupComponent(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Should mark all fields as required", async () => {
    const { user } = setupComponent(<SignIn />);

    await user.press(screen.getByTestId("submit-login"));
    const requiredTexts = screen.getAllByText("Requerido");

    expect(requiredTexts.length).toBe(2);
  });

  test("Should mark email field as invalid when typed an invalid email", async () => {
    const { user } = setupComponent(<SignIn />);

    await user.type(screen.getByTestId("email-input"), "invalidEmail");
    await user.press(screen.getByTestId("submit-login"));

    expect(screen.getByText("Email Inválido")).toBeTruthy();
  });

  test("Should render the invalid email error and required password error", async () => {
    const { user } = setupComponent(<SignIn />);

    await user.type(screen.getByTestId("email-input"), "invalidEmail.com");
    await user.type(screen.getByTestId("password-input"), "");
    await user.press(screen.getByTestId("submit-login"));

    expect(screen.getByText("Email Inválido")).toBeTruthy();
    expect(screen.getByText("Requerido")).toBeTruthy();
  });

  test("Should call the login function when the form is submitted with valid data", async () => {
    const { user } = setupComponent(<SignIn />);
    const login = jest.spyOn(firebaseAuth, "signInWithEmailAndPassword");

    await user.type(screen.getByTestId("email-input"), "validemail@asd.com");
    await user.type(screen.getByTestId("password-input"), "123456");
    await user.press(screen.getByTestId("submit-login"));

    expect(login).toHaveBeenCalledTimes(1);
  });

  test("Should not call the login function when the form is submitted with invalid data", async () => {
    const { user } = setupComponent(<SignIn />);
    const login = jest.spyOn(firebaseAuth, "signInWithEmailAndPassword");

    await user.type(screen.getByTestId("email-input"), "lorem");
    await user.type(screen.getByTestId("password-input"), "123");
    await user.press(screen.getByTestId("submit-login"));

    expect(login).toHaveBeenCalledTimes(0);
  });

  test("Should show an error message when the login function fails", async () => {
    const { user } = setupComponent(<SignIn />);
    (firebaseAuth.signInWithEmailAndPassword as jest.Mock).mockRejectedValue(
      new Error("invalid-email")
    );

    const toast = jest.spyOn(Toast, "show");
    const handleErrorMessagee = jest.spyOn(localAuth, "useAuthErrorMessage");

    await user.type(screen.getByTestId("email-input"), "validemail@asd.com");
    await user.type(screen.getByTestId("password-input"), "123456");
    await user.press(screen.getByTestId("submit-login"));

    expect(toast).toHaveBeenCalledTimes(1);
    expect(handleErrorMessagee).toHaveBeenCalledTimes(1);
  });
});
