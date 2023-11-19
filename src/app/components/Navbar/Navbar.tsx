"use client";

import styles from "./Navbar.module.css";

import Link from "next/link";
import {usePageNameContext} from "../../context/PageNameContext";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import Dropdown from "./Dropdown/Dropdown";
import {useInhaltsverzeichnisContext} from "../../context/InhaltsverzeichnisContext";
import {usePathname} from "next/navigation";

export default function Navbar() {
	const {pageName} = usePageNameContext();
	const {sections} = useInhaltsverzeichnisContext();

	const pathname = usePathname();
	console.log(pathname);

	console.log("INHALTSVERZEICHNIS_SECTIONS");
	console.log(sections);

	/*
	* TODO
	*  Inhaltsverzeichnis and Übersicht might need to be swapped.
	* 	The inhaltsverzeichnis can get very wide...*/
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<div className={styles["navbar-middle"]}>
					<span>Hardware-</span>
					<span>komponenten</span>
				</div>

				{(pathname !== "/") && (
					<>
						{/*TODO maybe wrap this inside div, so that its always there, even before rendered*/}
						<div className={styles["navbar-left"]}>
							{pageName && <div className={styles["page-name"]}>{pageName}</div>}
						</div>

						<div className={styles["navbar-right"]}>
							<div className={styles["dropdown-container"]}>
								<Dropdown name="Übersicht">
									<Link href="/CPU">
										CPU
									</Link>
									<Link href="/RAM">
										RAM
									</Link>
								</Dropdown>

								<Dropdown name="Inhaltsverzeichnis">
									{sections.map((section, index) => (
										<Link key={index} style={{paddingLeft: `${section.level - 1}em`}}
											  href={`#${section.id}`}>
											{section.title}
										</Link>
									))}
								</Dropdown>

							</div>
						</div>
					</>
				)}

				<div>
					<ThemeSwitcher/>
				</div>
			</nav>
		</header>
	);
};


/*
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
 */
