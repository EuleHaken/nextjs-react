"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import cx from "../classnames";
import { useState, ReactNode } from "react";
import { DropdownProvider } from "../context/DropdownContext";

export default function NavBar({ children }: { children: ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div id="NavBar" className={styles["navbar"]}>
        <div className={cx(styles["navbar-item"], styles.left)}>
          <Link href="/">
            <h1>Hardwarekomponenten</h1>
          </Link>
        </div>
        <div id="right" className={cx(styles["navbar-item"], styles.right)}>
          <div id="burgerMenu">
            <div
              id="burger-bars"
              className={styles["burger-menu"]}
              onClick={toggleBurgerMenu}
            >
              <div className={styles["burger-bar"]}></div>
              <div className={styles["burger-bar"]}></div>
              <div className={styles["burger-bar"]}></div>
            </div>

            <DropdownProvider>
              <BurgerMenu show={showMenu} />
            </DropdownProvider>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );

  /*
	return (
		<>
			<div className={styles["navbar"]}>
				<div className={styles["left"]}>
					<Link href="/">
						<h1>Hardwarekomponenten</h1>
					</Link>
				</div>
				<div className={styles["right"]}>
					<input
						type="text"
						placeholder="Search..."
						className={styles["search"]}
					/>
				</div>
				{/* TODO Button for DarkMode/ }
			</div>
		</>
	);
	*/
}
