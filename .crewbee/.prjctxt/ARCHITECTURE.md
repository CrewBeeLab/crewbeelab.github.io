# Architecture

## System Map

- Vite + React 19 + TypeScript single-page marketing site.
- Entry composition lives in `src/App.tsx`, assembling layout (`Navbar`, `Footer`) and ordered sections.
- Bilingual homepage content is centralized in `src/i18n/homepageContent.ts`; section components share a localized section prop type for typed `HomepageContent` data.
- Navigation/site constants live in `src/config/site.ts`.
- The final CTA consumes site constants for GitHub, Quick Start, Demo, and Discussions links; Demo currently resolves to the First Task anchor.
- Shared visual utility strings live in `src/config/designSystem.ts` for repeated layout, surface, typography, glow, and code-panel styling.
- Reusable presentation helpers include `FeatureCard` and `AccentLabel`; section files should stay focused on content composition rather than repeated visual class details.
- Sections are exported through `src/sections/index.ts`; current flow includes Hero/Status, Product Highlights, Product Rationale, How It Works, Coding Team, Project Context Roadmap, Team Templates, Builder Audience, OpenCode MVP, FAQ, and Acknowledgements.

## Design Notes

- Visual baseline: black/gold, paper surface, large whitespace, dark sections, card-based product storytelling.
- Content model emphasizes CrewBee's team-definition layer and OpenCode runtime projection while avoiding overclaiming unfinished Project Context capabilities.
