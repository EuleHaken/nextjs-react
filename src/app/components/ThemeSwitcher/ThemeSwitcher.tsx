"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from "./ThemeSwitcher.module.css";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={styles.icon}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <BsFillSunFill size="1.5em" />
      ) : (
        <BsFillMoonFill style={{ color: "black" }} size="1.5em" />
      )}
    </div>
  );
}
