"use client";
import { useState } from "react";
import { NavBar, SmallNavbar, RightNavbar, LargeNavbar } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  const [isLargeNavbarOpen, setIsLargeNavbarOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsLargeNavbarOpen(!isLargeNavbarOpen);
  };
  return (
    <div className={styles.page}>
      <NavBar toggleMenu={toggleMenu} isOpen={isLargeNavbarOpen} />
      <SmallNavbar isOpen={isLargeNavbarOpen} />
      <RightNavbar />
      <LargeNavbar isOpen={isLargeNavbarOpen} />
    </div>
  );
}
