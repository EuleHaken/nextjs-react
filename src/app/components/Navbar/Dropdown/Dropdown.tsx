"use client";

import {ReactNode, useEffect, useRef} from "react";
import {useDropdownContext} from "../../../context/DropdownContext";

import styles from "./Dropdown.module.css";
import cx from "../../../classnames";

type Props = {
	children: ReactNode;
	name: string;
}

export default function Dropdown({children, name}: Props) {
	const {activeName, setActiveName} = useDropdownContext();
	const isActive = (name === activeName);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = event => {
			// If the active element exists and the clicked target is not within the active element
			if (isActive && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setActiveName(""); // Close the dropdown
			}
		};

		// Add the event listener
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup - remove the listener when the component unmounts or when isActive changes
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isActive, setActiveName]);

	return (
		<div className={styles.dropdown} ref={dropdownRef}>
			<div className={isActive ? cx(styles["dropdown-heading"], styles.active) : styles["dropdown-heading"]}
				 onClick={() => setActiveName(isActive ? "" : name)}>{name}</div>
			<div className={styles["dropdown-menu"]}>
				{children}
			</div>
		</div>
	);
}


/*
"use client";

import { useState, ReactNode, MouseEvent, createContext } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Dropdown.module.css";
import { useDropdownContext } from "../../context/DropdownContext";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  name: string;
  href?: string;
};

export default function Dropdown({ children, name, href }: Props) {
  const { dropdownStates, toggleDropdown } = useDropdownContext();
  const isOpen = dropdownStates[name];

  const openDropdown = (e: MouseEvent) => {
    e.stopPropagation();

    toggleDropdown(name);
  };

  return (
    <>
      <div className={styles["dropdown-item"]}>
        <h3>{href ? <Link href={href}>{name}</Link> : name}</h3>
        <div className={styles["dropdown-arrow"]} onClick={openDropdown}>
          {isOpen ? <IoIosArrowUp size="2em" /> : <IoIosArrowDown size="2em" />}
        </div>
      </div>
      {isOpen && <div className={styles["dropdown-content"]}>{children}</div>}
    </>
  );
}
*/
