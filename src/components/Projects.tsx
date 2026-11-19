import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { PROJECTS, type MediaItem, type Project } from "../content/data";
import { railFill } from "../lib/scroll";
import { reveal } from "./reveal";

function Media({ item }: { item: MediaItem }) {
  if (item.kind === "sticker") return <img className="sticker" src={item.src} alt="" style={item.style} />;
  return (
    <div className={item.kind === "phone" ? "phone" : `print ${item.side}`} style={item.style}>
      <img src={item.src} alt={item.alt} width={item.width} height={item.height} />
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="proj">
      <motion.div className="media" {...reveal()}>
        {p.media.map((m) => (
          <Media key={m.src + m.kind} item={m} />
        ))}
      </motion.div>
      <motion.div className="info" {...reveal(1)}>
        <div className="meta">{p.meta}</div>
        <h3>{p.title}</h3>
        <span className="role">{p.role}</span>
        <p>{p.text}</p>
        <div className="tools">
          {p.tools.map((t) => (
            <span key={t.label} className={t.icon ? "tool" : "tool t"}>
              {t.icon && <img src={t.icon} alt="" />}
              {t.label}
            </span>
          ))}
        </div>
        <div className="type">
          Tipografía<b style={{ fontFamily: p.font.family }}>{p.font.name}</b>
        </div>
        {p.link && (
          <a className="more" href={p.link.href} target="_blank" rel="noopener">
            {p.link.label}
          </a>
        )}
      </motion.div>
    </article>
  );
}

export function Projects() {
  const timeline = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLElement>(null);

  // La línea se llena a medida que bajás. Se escribe la variable CSS directo,
  // sin estado de React, para no volver a renderizar en cada evento de scroll.
  useEffect(() => {
    const fill = () => {
      const r = timeline.current!.getBoundingClientRect();
      rail.current!.style.setProperty("--fill", railFill(r.top, r.height, innerHeight) + "%");
    };
    fill();
    addEventListener("scroll", fill, { passive: true });
    return () => removeEventListener("scroll", fill);
  }, []);

  return (
    <section id="proyectos">
      <div className="wrap">
        <motion.div className="sh" {...reveal()}>
          <div>
            <span className="num">01 / proyectos</span>
            <h2>Proyectos</h2>
          </div>
          <p>Uno por año, desde los 15 a los 17 años, con un rol distinto en cada uno.</p>
        </motion.div>
        <div className="timeline" ref={timeline}>
          <div className="rail">
            <i ref={rail}></i>
          </div>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
