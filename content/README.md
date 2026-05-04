# Content assets

`homepage-content.en.json` and `homepage-content.zh.json` are the source of truth for public website wording and content. Keep product-facing introductions, website sections, navigation labels, metadata, FAQ, and CTA text aligned by updating these files first.

The website imports these JSON files through `src/i18n/homepageContent.ts`, so display components stay focused on layout while wording and content remain independently maintainable.
