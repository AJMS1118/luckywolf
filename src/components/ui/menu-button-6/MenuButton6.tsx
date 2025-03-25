import React from "react";
import Image from "next/image";
import styles from "./menu-button-6.module.css";
import { support_customer } from "@/assets";
type MenuButton6Props = {
  text: string;
};

export const MenuButton6 = ({ text }: MenuButton6Props) => {
  return (
    <div className={styles.menu_button_container}>
      <div className={styles.section_1}>
        <Image src={support_customer} alt={text} />
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};
