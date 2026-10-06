import { useEffect, useState } from "react";

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function readDark() {
  const theme = document.documentElement.dataset.theme;
  return theme ? theme === "dark" : prefersDark();
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(readDark);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!document.documentElement.dataset.theme) setDark(media.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore private-mode storage failures */
    }
    setDark(next === "dark");
  };

  return (
    <button className="toggle" type="button" onClick={toggle} aria-label="Toggle theme">
      {dark ? "☀ light" : "☾ dark"}
    </button>
  );
}
