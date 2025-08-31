import { LoginPage } from "@/pages/auth/login";
import { RegisterPage } from "@/pages/auth/register";
<<<<<<< HEAD
// import { ErrorPage } from "@/pages/error/error";
import { MainPage } from "@/pages/main";
import { createBrowserRouter } from "react-router";
import { AuthLayout } from "../layouts/auth";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  // { path: "*", element: <ErrorPage /> },
]);
=======
import { ErrorPage } from "@/pages/error/error";
import { MainPage } from "@/pages/main";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
>>>>>>> master
