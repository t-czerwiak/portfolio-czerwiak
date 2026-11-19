# Timoteo Czerwiak · Portfolio

Portfolio en React y TypeScript, hecho con Vite. Muestra mis tres proyectos (uno por año), el stack que uso, sobre mí y contacto.

## Desarrollo

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

La versión de producción se genera en `dist/` y se publica en Vercel con cada push a `main`. Es un sitio estático: no necesita servidor ni claves.

## Organización

- `src/App.tsx`: arma la página (inicio, stack, sobre mí, contacto).
- `src/content/data.ts`: textos, proyectos, imágenes y stack. Para cambiar contenido se toca solo este archivo.
- `src/components/Nav.tsx`: menú, sección activa y botón de tema (oscuro / cartón).
- `src/components/Terminal.tsx`: la terminal que escribe `neofetch` y `ls proyectos/`.
- `src/components/Projects.tsx`: línea de tiempo de proyectos; la línea se llena al bajar.
- `src/components/reveal.ts`: animación de aparición al entrar en pantalla (Motion).
- `src/lib/scroll.ts`: cálculos de scroll (relleno de la línea y sección activa), con pruebas en `scroll.test.ts`.
- `src/styles/global.css`: estilos y variables de color de los dos temas.
- `public/assets`: imágenes, stickers y logos.

## Detalles

- El tema sigue al del sistema hasta que tocás el botón; la elección se guarda en `localStorage`. Un script corto en `index.html` lo aplica antes de pintar para que no parpadee.
- Las fuentes (Ubuntu, Ubuntu Mono, Quicksand, Pixelify Sans, Nunito) vienen de `@fontsource` y se sirven desde el propio sitio.
- Las animaciones respetan `prefers-reduced-motion`: Motion no mueve los elementos y la terminal aparece escrita de una.
