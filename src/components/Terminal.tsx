import { Fragment, useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

const Prompt = () => (
  <>
    <span className="g">timo@ort</span>:<span className="b">~</span>${" "}
  </>
);

// La "X" del logo: dos bloques que se cruzan. `d` es la distancia al borde en cada fila.
const LOGO = Array.from({ length: 7 }, (_, row) => {
  const d = 3 - Math.abs(3 - row);
  const [first, second] = row <= 3 ? ["p", "l"] : ["l", "p"];
  return (
    <>
      {" ".repeat(d)}
      <span className={first}>██</span>
      {" ".repeat(6 - 2 * d)}
      <span className={second}>██</span>
      {" ".repeat(d)}
    </>
  );
});

const Key = ({ children }: { children: ReactNode }) => <span className="k">{children}</span>;

const INFO = [
  <>
    <span className="g">timo</span>@<span className="g">ort</span>
  </>,
  "--------",
  <>
    <Key>Rol</Key>: backend · web · IA
  </>,
  <>
    <Key>Base</Key>: Buenos Aires
  </>,
  <>
    <Key>Curso</Key>: último año de Tecnología
  </>,
  <>
    <Key>Proyectos</Key>: 3
  </>,
  <>
    <Key>Egreso</Key>: 2026
  </>,
];

const NEOFETCH = LOGO.map((logo, i) => (
  <Fragment key={i}>
    {logo}
    {"  "}
    {INFO[i]}
    {i < LOGO.length - 1 && "\n"}
  </Fragment>
));

const STEPS = [
  { cmd: "neofetch", out: NEOFETCH, pause: 500 },
  { cmd: "ls proyectos/", out: "jugomix/   out-of-reach/   voitos/", pause: 300 },
];

export function Terminal() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(0); // comandos terminados (con su salida)
  const [typed, setTyped] = useState<string | null>(null); // línea actual; null = todavía sin prompt

  useEffect(() => {
    let alive = true; // se corta si el componente se desmonta (StrictMode lo monta dos veces)
    const wait = (ms: number) => new Promise((r) => setTimeout(r, reduced ? 0 : ms));

    (async () => {
      await wait(700);
      for (let i = 0; i < STEPS.length; i++) {
        const { cmd, pause } = STEPS[i];
        for (let c = 0; c <= cmd.length; c++) {
          if (!alive) return;
          setTyped(cmd.slice(0, c));
          await wait(45);
        }
        await wait(260);
        if (!alive) return;
        setTyped(null);
        setDone(i + 1);
        await wait(pause);
      }
      if (alive) setTyped("");
    })();

    return () => {
      alive = false;
    };
  }, [reduced]);

  return (
    <div className="term">
      <div className="bar">
        timo@ort: ~<i></i>
      </div>
      <pre>
        {STEPS.slice(0, done).map((s) => (
          <Fragment key={s.cmd}>
            <Prompt />
            {s.cmd}
            {"\n"}
            {s.out}
            {"\n\n"}
          </Fragment>
        ))}
        {typed !== null && (
          <>
            <Prompt />
            {done < STEPS.length ? typed : <span className="cur"></span>}
          </>
        )}
      </pre>
    </div>
  );
}
