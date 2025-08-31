import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
=======
import { MainPage } from "../pages/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
>>>>>>> master
  </StrictMode>
);
