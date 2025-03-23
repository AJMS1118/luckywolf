"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./area-component.module.css";

type iconData = string | StaticImageData;
type AreaComponentProps = {
  label: string;
  icon: iconData;
  width: number;
  height: number;
};

export const AreaComponent = ({ label, icon, width, height }: AreaComponentProps) => {
  return (
    <>
      <div className={styles.area_component_container}>
        <Image src={icon} alt="" width={width} height={height} style={{ padding: 0 }} />
        <span className={styles.area_component_label}>{label}</span>
        <hr className={styles.area_divider} />
      </div>
    </>
  );
};
