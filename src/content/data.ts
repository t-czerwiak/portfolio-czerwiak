import type { CSSProperties } from "react";

export const LINKS = {
  github: "https://github.com/t-czerwiak",
  linkedin: "https://www.linkedin.com/in/timoteo-nicolas-czerwiak-915151317/",
  mail: "timoczerwiak@gmail.com",
};

export const SECTIONS = [
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
] as const;

/** Lo que se ve al lado de cada proyecto: capturas impresas, un celular o stickers. */
export type MediaItem =
  | {
      kind: "print" | "phone";
      side?: "a" | "b";
      src: string;
      alt: string;
      width: number;
      height: number;
      style: CSSProperties;
    }
  | { kind: "sticker"; src: string; style: CSSProperties };

export type Project = {
  meta: string;
  title: string;
  role: string;
  text: string;
  tools: { label: string; icon?: string }[];
  font: { name: string; family: string };
  link?: { href: string; label: string };
  media: MediaItem[];
};

export const PROJECTS: Project[] = [
  {
    meta: "Con 15 años · Juguera inteligente",
    title: "Jugomix",
    role: "Fullstack",
    text: "Programé la página web de la juguera: yo me encargué del front y el back, como fullstack. Junto con mis compañeros del grupo hicimos un proyecto de hardware principalmente: una juguera que prepara el jugo sola. Desde la página elegís el sabor (manzana, naranja, limón o frutilla) y si lo querés en vaso o en jarra, y el backend le pasa el pedido a la máquina para que lo prepare.",
    tools: [
      { label: "HTML", icon: "/assets/assets6/st_html.png" },
      { label: "JavaScript", icon: "/assets/assets6/st_js.png" },
    ],
    font: { name: "Quicksand", family: "'Quicksand',sans-serif" },
    media: [
      {
        kind: "print",
        side: "a",
        src: "/assets/assets/j_s1_full.png",
        alt: "Jugomix, pantalla de bienvenida",
        width: 210,
        height: 295,
        style: { left: "4%", top: 20, rotate: "-3deg" },
      },
      {
        kind: "print",
        side: "b",
        src: "/assets/assets/j_s2_full.png",
        alt: "Jugomix, elegí tu sabor",
        width: 210,
        height: 295,
        style: { left: "40%", top: 70, rotate: "3deg" },
      },
      { kind: "sticker", src: "/assets/assets6/st_js.png", style: { width: 86, left: 0, bottom: 4, rotate: "-8deg" } },
    ],
  },
  {
    meta: "Con 16 años · Videojuego",
    title: "Out of Reach",
    role: "Modelador de objetos",
    text: "Out of Reach es un videojuego en 3D ambientado en el espacio que armamos en grupo, donde cada uno se encargó de una parte. Yo fui el modelador de objetos: hice en Blender los objetos que aparecen en el juego, como el dron y el cráneo, y los dejé listos para usarlos dentro del motor.",
    tools: [{ label: "Blender", icon: "/assets/assets6/st_blender.png" }],
    font: { name: "Pixelify Sans", family: "'Pixelify Sans',monospace" },
    media: [
      {
        kind: "print",
        side: "a",
        src: "/assets/assets6/oor_menu_dark.jpg",
        alt: "Out of Reach, menú principal",
        width: 380,
        height: 213,
        style: { left: 0, top: 16, rotate: "-2deg" },
      },
      {
        kind: "print",
        side: "b",
        src: "/assets/assets6/blender_ui.jpg",
        alt: "Modelado en Blender",
        width: 300,
        height: 169,
        style: { left: "22%", top: 205, rotate: "3deg" },
      },
      {
        kind: "sticker",
        src: "/assets/assets6/st_drone.png",
        style: { width: 150, right: 0, top: 0, rotate: "-6deg" },
      },
      {
        kind: "sticker",
        src: "/assets/assets6/st_craneo.png",
        style: { width: 90, right: "4%", bottom: 10, rotate: "8deg" },
      },
    ],
  },
  {
    meta: "Con 17 años · Pastillero inteligente",
    title: "Voitos",
    role: "Backend",
    text: "Voitos es un pastillero inteligente que entrega la medicación a horario. Armo la API que conecta la app con la ESP32 del pastillero y con la base de datos. Uso TypeScript, Express y Supabase.",
    tools: [
      { label: "ESP32", icon: "/assets/assets6/st_esp32.png" },
      { label: "SQL", icon: "/assets/assets6/st_sql.png" },
      { label: "Supabase", icon: "/assets/logos/supabase_icon.svg" },
      { label: "TypeScript" },
      { label: "Express" },
    ],
    font: { name: "Nunito", family: "'Nunito',sans-serif" },
    link: { href: "https://voitos.vercel.app", label: "Ver la web de Voitos →" },
    media: [
      {
        kind: "phone",
        src: "/assets/assets/v_login_full.png",
        alt: "App de Voitos, inicio de sesión",
        width: 170,
        height: 368,
        style: { left: "6%", top: 0, rotate: "-2deg" },
      },
      {
        kind: "print",
        side: "b",
        src: "/assets/assets/v_foto.png",
        alt: "Landing de Voitos",
        width: 200,
        height: 212,
        style: { left: "44%", top: 60, rotate: "4deg" },
      },
      {
        kind: "sticker",
        src: "/assets/assets6/st_esp32.png",
        style: { width: 150, left: "38%", bottom: 6, rotate: "-7deg" },
      },
    ],
  },
];

/** Los íconos "st_" son stickers PNG (se ven más grandes); el resto son logos SVG. */
export function iconSrc(file: string): string {
  return file.startsWith("st_") ? `/assets/assets6/${file}.png` : `/assets/logos/${file}.svg`;
}

export const STACK: { title: string; icons: [file: string, label: string][] }[] = [
  {
    title: "Lenguajes y web",
    icons: [
      ["python", "Python"],
      ["st_js", "JavaScript"],
      ["html", "HTML"],
      ["css", "CSS"],
      ["nodejs", "Node.js"],
      ["nextjs", "Next.js"],
    ],
  },
  {
    title: "Datos y backend",
    icons: [
      ["postgresql", "PostgreSQL"],
      ["mysql", "MySQL"],
      ["st_sql", "SQL"],
      ["supabase_icon", "Supabase"],
      ["firebase_icon", "Firebase"],
    ],
  },
  {
    title: "Deploy e infra",
    icons: [
      ["docker", "Docker"],
      ["vercel_icon", "Vercel"],
      ["render_icon", "Render"],
      ["github", "GitHub"],
      ["gitbash", "Git Bash"],
      ["ubuntu", "Ubuntu"],
    ],
  },
  {
    title: "IA",
    icons: [
      ["claude", "Claude"],
      ["claudecode", "Claude Code"],
      ["chatgpt", "ChatGPT"],
      ["gemini", "Gemini"],
    ],
  },
  {
    title: "Hardware y 3D",
    icons: [
      ["st_esp32", "ESP32"],
      ["st_blender", "Blender"],
    ],
  },
  { title: "Editor", icons: [["vscode", "VS Code"]] },
];

export const OTHER_PROJECTS = [
  {
    tech: "Astro · Supabase",
    name: "NASA Space Explorer",
    text: "Tests con Vitest y Playwright, ESLint y CI con GitHub Actions.",
  },
  { tech: "Streamlit · SQLite", name: "Chef Master Pro", text: "App de recetas con métricas de uso." },
  {
    tech: "Identidad de marca",
    name: "Carrot Dream",
    text: "Manual de marca para una pastelería ficticia: logo, paleta, tipografías y packaging.",
  },
];
