"use client";
import React from "react";
import Image from "next/image";
import { AreaComponent } from "../ui/area-component/AreaComponent";
import styles from "./small-navbar.module.css";
import {
  loterry_1,
  lottery,
  sport,
  casino_1,
  recent,
  favorites,
  button_group,
  flat,
  support,
  connection,
} from "@/assets";

export const SmallNavbar = () => {
  return (
    <>
      <div className={styles.small_navbar_container} id="small-menu-container">
        <div className={styles.area_component_container}>
          <AreaComponent icon={lottery} label="Lottery" width={38} height={38} />
          <AreaComponent icon={favorites} label="Favorites" width={34} height={38} />
          <AreaComponent icon={recent} label="Recent" width={38} height={38} />
          <AreaComponent icon={casino_1} label="Casino" width={32} height={38} />
          <AreaComponent icon={sport} label="Sport" width={38} height={38} />
          <AreaComponent icon={loterry_1} label="Lottery" width={38} height={38} />
        </div>
        <div className={styles.button_group_container}>
          <Image src={button_group} alt="" />
        </div>
        <div className={styles.section_3}>
          <div className={styles.flat}>
            <Image src={flat} alt="" />
          </div>
          <div>
            <Image src={support} alt="" />
          </div>
          <div>
            <Image src={connection} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
