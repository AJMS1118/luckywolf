import React, { useState } from "react";
import styles from "./menu-button-5.module.css";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { plain_down_arrow } from "@/assets";

const languages = [
  { id: 1, name: "English", countryCode: "US" },
  { id: 2, name: "Frances", countryCode: "FR" },
  { id: 3, name: "Portugues", countryCode: "PT" },
  { id: 4, name: "Español", countryCode: "ES" },
  { id: 5, name: "Turco", countryCode: "TR" },
  { id: 6, name: "Italiano", countryCode: "IT" },
];

const defaultLanguage = languages[0];

export const MenuButton5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const dropdownHeight = languages.length * 44 + 15;

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
          {languages.map((lang) => (
            <div
              key={lang.id}
              className={styles.menu_item}
              onClick={() => handleLanguageSelect(lang)}
            >
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              />

              <span className={styles.menu_item_text}>{lang.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.menu_button_container}>
        <div className={styles.section_container}>
          <div className={styles.section_1}>
            <div className={styles.flag_container}>
              <ReactCountryFlag
                countryCode={selectedLanguage.countryCode}
                svg
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <span className={styles.text}>{selectedLanguage.name}</span>
          </div>
          <div
            className={styles.section_2}
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.arrow_container}>
              <Image
                src={plain_down_arrow}
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
    </div>
  );
};
