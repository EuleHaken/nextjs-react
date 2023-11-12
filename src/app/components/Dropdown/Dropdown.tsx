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
