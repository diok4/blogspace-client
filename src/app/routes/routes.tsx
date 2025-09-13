import { LoginPage } from "@/pages/auth/login";
import { RegisterPage } from "@/pages/auth/register";
// import { ErrorPage } from "@/pages/error/error";
import { HomePage } from "@/pages/home";
import { createBrowserRouter } from "react-router";
import { AuthLayout } from "../layouts/auth";
import { GenerationPage } from "@/pages/generation";
import { ProfilePage } from "@/pages/profile";
import { SettingsPage } from "@/pages/settings";
import { ReelsPage } from "@/pages/reels/ui/reels";
import { MainLayout } from "../layouts/main";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "generation", element: <GenerationPage /> },
      { path: "reels", element: <ReelsPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
