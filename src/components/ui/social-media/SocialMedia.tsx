import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./social-media.module.css";
import { facebook, instagram, x, telegram } from "@/assets";
export const SocialMedia = () => {
  return (
    <>
      <div className={styles.social_media_container}>
        <div className={styles.social_media_section}>
          <Link href="https://t.me/luckywolf_io" target="_blank">
            <Image src={telegram} alt="telegram" />
          </Link>
          <Link href="">
            <Image src={x} alt="twitter" />
          </Link>
          <Link href="">
            <Image src={facebook} alt="facebook" />
          </Link>
          <Link href="">
            <Image src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
    </>
  );
};
