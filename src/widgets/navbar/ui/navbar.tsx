import type { FC } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router";
import { SearchInput } from "@/shared/ui/search-input";
import { DropdownMenu } from "@/shared/ui/dropdown-menu";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export const NavBar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://i.postimg.cc/zHrHY0mG/image-2025-09-13-15-29-56.png"
          width={40}
          height={40}
          alt="404"
        />
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
        <NavLink
          to="generation"
          className={({ isActive }) => {
            return isActive ? styles.isActive : undefined;
          }}
        >
          Post with AI
        </NavLink>
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
                onClick: () => console.log("logout"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
