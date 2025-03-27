"use client";
import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { logo1, casino, menu_button, bluecrown, search_icon } from "@/assets";

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
            <Image src={logo1} alt="logo" className={styles.logo} />
            <span className={styles.logo_text}>Lucky wolf</span>
          </div>
          <div className={styles.menu_button} onClick={toggleMenu}>
            <Image
              style={{
                transform: !isOpen ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s ease",
              }}
              src={menu_button}
              alt=""
              className={styles.menu_button_icon}
            />
          </div>
          <div className={styles.section_container}>
            <div className={styles.section_container_1}>
              <Image src={bluecrown} alt="" className={styles.crownd} />
              <span className={styles.sports_text}>Sport</span>
            </div>
            <div className={styles.section_container_2}>
              <Image src={casino} alt="" className={styles.sport_icon} />
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
            <Image src={search_icon} alt="" className={styles.search_icon} />
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
