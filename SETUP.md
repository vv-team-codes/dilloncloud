# Dillon Cloud Website

Complete source package with all website images, the original Dillon Cloud logo, favicon, and self-hosted fonts.

## Requirements

- Bun 1.2 or newer

## Run locally

```bash
bun install
bun run dev
```

Open the local address shown in the terminal.

## Production build

```bash
bun run build
```

## Included fonts

- Instrument Serif — Regular and Italic
- Plus Jakarta Sans — 300, 400, 500, and 600

The fonts are stored in `src/assets/fonts/` and loaded locally from `src/styles.css`. No Google Fonts connection is required.

## Main assets

The exact Dillon Cloud logo and all photography are stored in `src/assets/`. The browser favicon is stored in `public/favicon.png`.
