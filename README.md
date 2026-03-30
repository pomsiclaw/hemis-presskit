
# HEMIS Presskit

Este proyecto es un presskit interactivo para HEMIS (DJ/Producer, Barcelona), construido con Next.js.

## Características

- Hero visual con logo de HEMIS (SVG) y fondo personalizado.
- Header con carita SVG y logo.
- SVGs organizados como archivos independientes en `public/` para mejor mantenimiento.
- Diseño responsive y moderno.
- Widgets embebidos de SoundCloud, Spotify y YouTube.

## Estructura de imágenes

- `public/logo-hemis.svg`: Logo principal de HEMIS.
- `public/carita.svg`: Carita para el header.
- `public/58926.jpg`: Imagen de fondo.

## Uso

Instala dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

Puedes editar la página principal en `app/page.tsx`.

---

Proyecto basado en Next.js. Para más detalles técnicos, consulta la [documentación de Next.js](https://nextjs.org/docs).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
