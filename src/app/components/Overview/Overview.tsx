"use client";

import Link from "next/link";
import styles, { overview } from "./Overview.module.css";
import { useEffect, useRef, useState } from "react";

const Overview = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("#NavBar") as HTMLElement;
    setTop(navbar.offsetHeight);

    console.log("Overview rendered");
  }, []);

  return (
    <div
      id="Overview"
      className={styles.overview}
      style={{ top: top ? `${top - 1.5}px` : top }}
    >
      <Link href="/" className={styles.heading}>
        Übersicht
      </Link>
      <ul className={styles["overview-list"]}>
        <li>
          <Link href="/wiki">Begriffe (Wiki)</Link>
        </li>
        <li>
          <Link href="/CPU">CPU</Link>
        </li>
        <li>
          <Link href="/RAM">RAM</Link>
        </li>
        <li>
          <Link href="/Mainboard">Mainboard / Motherboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Overview;
