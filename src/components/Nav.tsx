import { useEffect, useState } from "react";
import { SECTIONS } from "../content/data";
import { activeIndex } from "../lib/scroll";

type Theme = "light" | "dark";
const root = document.documentElement;

function currentTheme(): Theme {
  const saved = root.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function Nav() {
  const [theme, setTheme] = useState(currentTheme);
  const [active, setActive] = useState(-1);

  // Marca en el menú la sección que estás leyendo.
  useEffect(() => {
    const sections = SECTIONS.map((s) => document.getElementById(s.id)!);
    const onScroll = () =>
      setActive(
        activeIndex(
          sections.map((s) => s.getBoundingClientRect().top),
          innerHeight,
        ),
      );
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("timo-theme", next);
    } catch {
      // En modo incógnito puede fallar: el tema cambia igual, solo no se recuerda.
    }
    setTheme(next);
  };

  return (
    <nav>
      <div className="wrap">
        <a className="brand" href="#top">
          <b>timo</b>@<i>ort</i>:~$
        </a>
        <div className="links">
          {SECTIONS.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className={i === active ? "on" : undefined}>
              {s.label}
            </a>
          ))}
        </div>
        <button className="theme" type="button" onClick={toggleTheme}>
          {theme === "light" ? "Oscuro" : "Cartón"}
        </button>
      </div>
    </nav>
  );
}
