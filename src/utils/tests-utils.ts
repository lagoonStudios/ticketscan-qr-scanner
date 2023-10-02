import { render, userEvent } from "@testing-library/react-native";
import wrapper from "__mocks__/wrapper.mock";


/**
 * Returns the userEvent.setup() object for the component to be tested (see docs: https://callstack.github.io/react-native-testing-library/docs/user-event).
 * the render api that deeply renders given React element and returns helpers to query the output components structure (see docs: https://callstack.github.io/react-native-testing-library/docs/api#render-api).
 * @param jsx The component to be tested
 * @returns user: userEvent.setup()
 */
export default function setupComponent(jsx: React.JSX.Element) {
  return {
    user: userEvent.setup({ delay: undefined }),
    ...render(jsx, { wrapper }),
  };
}
