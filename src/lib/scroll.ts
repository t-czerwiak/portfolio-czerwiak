/** Porcentaje (0–100) de la línea de tiempo que ya pasó por la marca del 60% de la pantalla. */
export function railFill(top: number, height: number, viewport: number): number {
  const pct = ((viewport * 0.6 - top) / height) * 100;
  return Math.max(0, Math.min(100, pct));
}

/** Índice de la última sección cuyo borde superior ya pasó el 40% de la pantalla, o -1 si ninguna. */
export function activeIndex(tops: number[], viewport: number): number {
  let active = -1;
  tops.forEach((top, i) => {
    if (top < viewport * 0.4) active = i;
  });
  return active;
}
