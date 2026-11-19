import { MotionConfig, motion } from "motion/react";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Terminal } from "./components/Terminal";
import { reveal } from "./components/reveal";
import { LINKS, OTHER_PROJECTS, STACK, iconSrc } from "./content/data";

const External = ({ href, children }: { href: string; children: string }) => (
  <a className="btn" href={href} target="_blank" rel="noopener">
    {children}
  </a>
);

export function App() {
  return (
    // reducedMotion="user": si el sistema pide menos movimiento, Motion no anima los desplazamientos.
    <MotionConfig reducedMotion="user">
      <Nav />

      <header className="hero" id="top">
        <div className="wrap">
          <div>
            <motion.div className="kicker" {...reveal()}>
              <span>●</span> Último año de Tecnología · ORT Belgrano
            </motion.div>
            <motion.h1 {...reveal(1)}>
              Timoteo
              <br />
              Czerwiak
            </motion.h1>
            <motion.p className="lead" {...reveal(2)}>
              Hago <strong>backend, web y sistemas con IA</strong>. Ahora armo la API de Voitos, un pastillero
              inteligente.
            </motion.p>
            <motion.div className="cta" {...reveal(3)}>
              <a className="btn main" href="#proyectos">
                Ver proyectos ↓
              </a>
              <External href={LINKS.github}>GitHub ↗</External>
              <External href={LINKS.linkedin}>LinkedIn ↗</External>
            </motion.div>
          </div>
          <motion.div className="stage" aria-hidden="true" {...reveal(2)}>
            <Terminal />
            <img className="stk s1" src="/assets/assets6/st_html.png" alt="" />
            <img className="stk s2" src="/assets/assets6/st_blender.png" alt="" />
            <img className="stk s3" src="/assets/assets6/st_esp32.png" alt="" />
          </motion.div>
        </div>
      </header>

      <Projects />

      <section id="stack">
        <div className="wrap">
          <motion.div className="sh" {...reveal()}>
            <div>
              <span className="num">02 / stack</span>
              <h2>Stack</h2>
            </div>
          </motion.div>
          <div className="groups">
            {STACK.map((g, i) => (
              <motion.div key={g.title} className="grp" {...reveal(i % 3)}>
                <h3>{g.title}</h3>
                <div className="icons">
                  {g.icons.map(([file, label]) => (
                    <div key={file} className="ic">
                      <span className={file.startsWith("st_") ? "big" : undefined}>
                        <img src={iconSrc(file)} alt="" />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi">
        <div className="wrap">
          <motion.div className="sh" {...reveal()}>
            <div>
              <span className="num">03 / sobre mí</span>
              <h2>Sobre mí</h2>
            </div>
          </motion.div>
          <div className="about">
            <div>
              <motion.p {...reveal()}>
                Estoy en 5° año de la orientación tecnológica de ORT Belgrano y egreso en 2026. Me anoté en Ingeniería
                en Inteligencia Artificial en la UdeSA.
              </motion.p>
              <motion.p {...reveal(1)}>
                Me interesa usar la IA para resolver cosas concretas y todo lo que pasa del lado del servidor: bases de
                datos, APIs e infraestructura.
              </motion.p>
              <motion.p className="muted" {...reveal(2)}>
                Para los datos uso PostgreSQL y Supabase, para las APIs Node.js con Express y para desplegar Docker y
                Vercel. Con la IA pruebo modelos y herramientas para automatizar tareas y resolver problemas reales.
              </motion.p>
            </div>
            <div className="side">
              <motion.div className="mono" style={{ color: "var(--muted)", fontSize: 14 }} {...reveal()}>
                otros proyectos
              </motion.div>
              {OTHER_PROJECTS.map((f, i) => (
                <motion.div key={f.name} className="fact" {...reveal(i)}>
                  <div className="mono">{f.tech}</div>
                  <div>{f.name}</div>
                  <small>{f.text}</small>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="wrap">
          <motion.span className="num" {...reveal()}>
            04 / contacto
          </motion.span>
          <motion.h2 {...reveal(1)}>Contacto</motion.h2>
          <motion.p {...reveal(2)}>
            <a href={`mailto:${LINKS.mail}`}>{LINKS.mail}</a>
          </motion.p>
          <motion.div className="cta" style={{ justifyContent: "center" }} {...reveal(3)}>
            <a className="btn main" href={`mailto:${LINKS.mail}`}>
              Mandar mail
            </a>
            <External href={LINKS.linkedin}>LinkedIn ↗</External>
            <External href={LINKS.github}>GitHub ↗</External>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>Timoteo Czerwiak · 2026</span>
          <a className="mono" href={`mailto:${LINKS.mail}`} style={{ textDecoration: "none" }}>
            {LINKS.mail}
          </a>
        </div>
      </footer>
    </MotionConfig>
  );
}
