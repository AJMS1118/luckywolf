"use client";
import React from "react";
import styles from "./navbar.module.css";
import {
  BlueCrownIcon,
  MainLogo,
  CasinoIcon,
  SearchIcon,
  ArrowMenuToggleIcon,
} from "@/components/icons";

type NavBarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const NavBar = ({ toggleMenu, isOpen }: NavBarProps) => {
  return (
    <header className={styles.nav_container}>
      <div className={styles.nav_flex_container}>
        <div className={styles.header_section_1}>
          <div className={styles.logo_container}>
            <MainLogo />
            <span className={styles.logo_text}>Lucky wolf</span>
          </div>
          <div className={styles.menu_button} onClick={toggleMenu}>
            <ArrowMenuToggleIcon
              isOpen={isOpen}
              className={styles.menu_button_icon}
            />
          </div>
          <div className={styles.section_container}>
            <div className={styles.section_container_1}>
              <BlueCrownIcon />

              <span className={styles.sports_text}>Sport</span>
            </div>
            <div className={styles.section_container_2}>
              <CasinoIcon />

              <span className={styles.casino_text}>Casino</span>
            </div>
          </div>
        </div>
        <div className={styles.header_section_2}>
          <div className={styles.search_container}>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className={styles.menu_search}
            />
            <SearchIcon className={styles.search_icon} />
          </div>
          <div className={styles.login_section}>
            <a href="" className={styles.login_button}>
              Log In
            </a>
            <a href="" className={styles.signup_button}>
              <span className={styles.signup_text}>Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
