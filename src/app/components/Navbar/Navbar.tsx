"use client";

import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Navbar.module.css";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { DropdownProvider } from "@/app/context/DropdownContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles["navbar-wrapper"]}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <h1>Hardwarekomponenten</h1>
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <ThemeSwitcher />
            <div style={{ cursor: "pointer" }} onClick={toggleBurgerMenu}>
              <AiOutlineMenu size={"2em"} />
            </div>
          </div>
        </nav>

        <DropdownProvider>
          <BurgerMenu show={showMenu} />
        </DropdownProvider>
      </div>
    </>
  );
}
