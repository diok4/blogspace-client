import type { FC } from "react";
import styles from "./navbar.module.css";
import { NavLink, useNavigate } from "react-router";
import { SearchInput } from "@/shared/ui/search-input";
import { DropdownMenu } from "@/shared/ui/dropdown-menu";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useMeQuery, useLogoutMutation } from "@/features/auth/api/authApi";
import { LuPenTool } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { authApi } from "@/features/auth/api/authApi";

export const NavBar: FC = () => {
  const { data: me } = useMeQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout().unwrap();
    navigate("/");
    dispatch(authApi.util.resetApiState());
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LuPenTool />
        <p>BlogSpace</p>
      </div>
      <div className={styles.navlinks}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? styles.isActive : undefined;
          }}
        >
          Home
        </NavLink>
        {me ? (
          <NavLink
            to="generation"
            className={({ isActive }) => {
              return isActive ? styles.isActive : undefined;
            }}
          >
            Post with AI
          </NavLink>
        ) : undefined}
        <NavLink
          to="reels"
          className={({ isActive }) => {
            return isActive ? styles.isActive : undefined;
          }}
        >
          Reels
        </NavLink>
      </div>
      <div className={styles.search}>
        <SearchInput />
      </div>
      <div className={styles.buttons}>
        {me ? (
          <>
            <div className={styles.notifications}>
              <DropdownMenu
                triggerLabel={<IoNotifications />}
                items={[
                  { value: "news1", label: "New version released", to: "/" },
                  { value: "news2", label: "new user ip: 1.1.1.1'", to: "/" },
                ]}
              />
            </div>
            <div className={styles.profile}>
              <DropdownMenu
                triggerLabel={<FaUserCircle />}
                items={[
                  { value: "profile", label: "Profile", to: "profile" },
                  { value: "settings", label: "Settings", to: "" },
                  {
                    value: "logout",
                    label: "Logout",
                    onClick: () => handleLogout(),
                  },
                ]}
              />
            </div>
          </>
        ) : (
          <div className={styles.auth}>
            <NavLink to="auth/login">Sign In</NavLink>
            <NavLink to="auth/register">Sign Up</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
