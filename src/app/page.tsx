import styles from "./page.module.css";
import { NavBar, SmallNavbar, RightNavbar } from "@/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <SmallNavbar />
      <RightNavbar />
    </div>
  );
}
