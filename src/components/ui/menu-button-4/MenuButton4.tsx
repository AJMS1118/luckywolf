import React, { useState } from "react";
import Image from "next/image";
import styles from "./menu-button-4.module.css";
import { casino, down_arrow_1 } from "@/assets";

type MenuButton4Props = {
  text: string;
};

export const MenuButton4 = ({ text }: MenuButton4Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.menu_button_wrapper}>
        {/* {isOpen && (
          <div className={styles.dropdown_menu}>
            {menuData.map((item) => (
              <div key={item.id} className={styles.menu_item}>
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
                <span className={styles.menu_item_text}>{item.text}</span>
              </div>
            ))}
          </div>
        )} */}

        <div className={styles.menu_button_container}>
          <div className={styles.section_container}>
            <div className={styles.section_1}>
              <Image src={casino} alt="" />
              <span className={styles.text}>{text}</span>
            </div>
            <div
              className={styles.section_2}
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={down_arrow_1}
                alt=""
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
