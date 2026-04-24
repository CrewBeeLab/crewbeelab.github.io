<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/34ae6a21-cf7d-48ef-ae76-7e0cefd5af89

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Start the development server on `http://localhost:3000` and open the browser automatically:
   `npm run start`

## Available Scripts

- `npm run start`: run `scripts/dev.mjs` to start the Vite dev server on `localhost:3000` and open the browser automatically
- `npm run dev`: same as `start`
- `npm run build`: create a production build in `dist/`
- `npm run build:dev`: run `scripts/build-dev.mjs` to create a development-mode build in `dist/`
- `npm run preview`: preview the built app on `http://localhost:4173` and open the browser automatically
- `npm run lint`: run TypeScript diagnostics
