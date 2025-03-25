import React from "react";
import styles from "./large-navbar.module.css";
import {
  MenuButton,
  MenuButton2,
  MenuButton3,
  MenuButton4,
  MenuButton5,
  SocialMedia,
  MenuButton6,
} from "../ui";

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
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "opacity 0.2s ease-in-out, transform 0.3s ease-in-out",
          zIndex: "9",
        }}
      >
        <div className={styles.navbar_content}>
          <div className={styles.section_top}>
            <MenuButton text="Favorites" number="5" />
            <MenuButton2 text="Recently Played" />
            <MenuButton3 text="Casino" />
            <MenuButton4 text="Sports" />
          </div>

          <div className={styles.section_bottom}>
            <MenuButton5 />
            <MenuButton6 text="Live Support" />
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};
