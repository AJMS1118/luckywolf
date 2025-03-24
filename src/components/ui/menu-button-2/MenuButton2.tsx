import React from "react";
import Image from "next/image";
import styles from "./menu-button-2.module.css";
import { recent_1 } from "@/assets";
type MenuButton2Props = {
  text: string;
};

export const MenuButton2 = ({ text }: MenuButton2Props) => {
  return (
    <div className={styles.menu_button_container}>
      <div className={styles.section_1}>
        <Image src={recent_1} alt={text} />
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};
