import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Provider as ChakraProvider } from "./layouts/chakra/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
