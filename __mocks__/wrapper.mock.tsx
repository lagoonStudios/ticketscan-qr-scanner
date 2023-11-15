// this file is meant to wrap the whole app in a QueryClientProvider. to use in the tests files.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: { children: any }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;
