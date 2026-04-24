# CrewBee Website

This contains everything you need to run the CrewBee website locally.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Start the development server on `http://localhost:3000` and open the browser automatically:
   `npm run start`

## Available Scripts

- `npm run start`: run `scripts/dev.mjs` to start the Vite dev server on `localhost:3000` and open the browser automatically
- `npm run dev`: same as `start`
- `npm run build`: create a production build in `dist/`
- `npm run build:dev`: run `scripts/build-dev.mjs` to create a development-mode build in `dist/`
- `npm run preview`: preview the built app on `http://localhost:4173` and open the browser automatically
- `npm run lint`: run TypeScript diagnostics

## Static Assets

- Put logos, icons, Open Graph images, and other public image assets in `public/assets/images/`.
