import React, { useState } from "react";
import styles from "./menu-button-3.module.css";
import Image from "next/image";
import {
  seven,
  down_arrow,
  slots,
  scratch,
  casual,
  craps,
  live_casino,
  lottery_casino,
  cards,
  mines,
  poker,
  crash,
  roulette,
  virtual_sports,
  fishing,
} from "@/assets";

type MenuButton3Props = {
  text: string;
};

const menuData = [
  {
    id: 1,
    icon: live_casino,
    text: "Live Casino",
  },
  {
    id: 2,
    icon: slots,
    text: "Slots",
  },
  {
    id: 3,
    icon: crash,
    text: "Crash",
  },
  {
    id: 4,
    icon: casual,
    text: "Casual",
  },
  {
    id: 5,
    icon: craps,
    text: "Craps",
  },
  {
    id: 6,
    icon: cards,
    text: "Cards",
  },
  {
    id: 7,
    icon: lottery_casino,
    text: "Lottery",
  },
  {
    id: 8,
    icon: roulette,
    text: "Roulette",
  },
  {
    id: 9,
    icon: mines,
    text: "Mines",
  },
  {
    id: 10,
    icon: poker,
    text: "Poker",
  },
  {
    id: 11,
    icon: fishing,
    text: "Fishing",
  },
  {
    id: 12,
    icon: virtual_sports,
    text: "Virtual Sports",
  },
  {
    id: 13,
    icon: scratch,
    text: "Scratch",
  },
];

export const MenuButton3 = ({ text }: MenuButton3Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Calculamos la altura del dropdown basado en el número de items
  const dropdownHeight = menuData.length * 44 + 15; // 44px por item + 15px de padding-top

  return (
    <div
      className={styles.menu_button_wrapper}
      style={
        {
          "--dropdown-space": isOpen ? `${dropdownHeight}px` : "0",
        } as React.CSSProperties
      }
    >
      {isOpen && (
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
      )}

      <div className={styles.menu_button_container}>
        <div className={styles.section_container}>
          <div className={styles.section_1}>
            <Image src={seven} alt="" />
            <span className={styles.text}>{text}</span>
          </div>
          <div
            className={styles.section_2}
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={down_arrow}
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
  );
};
