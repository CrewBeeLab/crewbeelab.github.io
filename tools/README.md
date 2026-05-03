# Tools

## Section renders

Use `render-sections.mjs` to render the localized homepage sections into PNG files without changing the website source code.

```bash
npm run render:sections
npm run render:sections:published
```

Defaults are aligned with the published site capture configuration: Chinese route, dark color scheme, `1920x905` viewport, DPR `1`, and output to `assets/section-renders/`. The tool clears browser local storage before loading the page and verifies the published dark theme variables before rendering.

Generated PNG files are local artifacts and are ignored by Git. Commit the tool code and package metadata; regenerate images when needed.
