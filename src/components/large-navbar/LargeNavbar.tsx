import React from "react";
import { MenuButton } from "../ui/menu-button/MenuButton";
import { MenuButton2 } from "../ui/menu-button-2/MenuButton2";
import { MenuButton3 } from "../ui/menu-button-3/MenuButton3";
import styles from "./large-navbar.module.css";

type LargeNavbarProps = {
  isOpen: boolean;
};

export const LargeNavbar = ({ isOpen }: LargeNavbarProps) => {
  return (
    <>
      <div
        className={styles.large_navbar_container}
        style={{
          opacity: isOpen ? "1" : "0",
          transform: isOpen ? "translateX(0)" : "translateX(-232px)",
          transition: "opacity 0.2s ease-in-out, transform 0.3s ease-in-out",
          zIndex: isOpen ? "" : "-1",
        }}
      >
        <div className={styles.area_component_container}>
          <MenuButton text="Favorites" number="5" />
          <MenuButton2 text="Recently Played" />
          <MenuButton3 text="Casino" />
        </div>
      </div>
    </>
  );
};
