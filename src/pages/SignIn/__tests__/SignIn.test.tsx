import { SignIn } from "../SignIn";
import { screen } from "@testing-library/react-native";
import setupComponent from "@/utils/tests-utils";

describe("<SignIn />", () => {
  test("Renders propperly / has 2 childs", () => {
    const tree = setupComponent(<SignIn />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  test("Should mark all fields as required", async () => {
    const { user } = setupComponent(<SignIn />);

    await user.press(screen.getByText("Submit"));
    const requiredTexts = screen.getAllByText("Requerido");
    
    expect(requiredTexts.length).toBe(2);
  });

  test("Should mark email field as invalid when typed an invalid email", async () => {
    const { user } = setupComponent(<SignIn />);

    await user.type(screen.getByTestId("email-input"), "invalidEmail");
    await user.press(screen.getByText("Submit"));

    expect(screen.getByText("Email Inválido")).toBeTruthy();
  });

  test("Should render the invalid email email and required password", async () => {
    const { user } = setupComponent(<SignIn />);

    await user.type(screen.getByTestId("email-input"), "invalidEmail.com");
    await user.type(screen.getByTestId("password-input"), "");
    await user.press(screen.getByText("Submit"));

    expect(screen.getByText("Email Inválido")).toBeTruthy();
    expect(screen.getByText("Requerido")).toBeTruthy();
  });
});
