import React from "react";
import styles from "./menu-button.module.css";
import Image from "next/image";
import { heart } from "@/assets";

type MenuButtonProps = {
  text: string;
  number: string;
};

export const MenuButton = ({ text, number }: MenuButtonProps) => {
  return (
    <div className={styles.menu_button_container}>
      <div className={styles.section_container}>
        <div className={styles.section_1}>
          <Image src={heart} alt={text} />
          <span className={styles.text}>{text}</span>
        </div>
        <div className={styles.section_2}>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
    </div>
  );
};
