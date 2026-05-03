import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const args = new Map(
  process.argv.slice(2).flatMap((arg) => {
    if (!arg.startsWith('--')) return [];
    const [key, value = 'true'] = arg.slice(2).split('=');
    return [[key, value]];
  })
);

if (args.has('help')) {
  console.log(`Render localized homepage sections to PNG files.

Usage:
  npm run render:sections
  npm run render:sections:published
  node tools/render-sections.mjs --url=https://crewbeelab.github.io/zh/ --out-dir=assets/section-renders

Options:
  --url=<url>            Source page URL. Defaults to local zh page.
  --out-dir=<path>       Output directory. Defaults to assets/section-renders.
  --width=<px>           Browser viewport width. Defaults to 1920.
  --height=<px>          Browser viewport height. Defaults to 905.
  --browser-path=<path>  Optional Chrome or Chromium executable path.

Environment overrides:
  CREWBEE_RENDER_URL, CREWBEE_RENDER_OUT_DIR, CREWBEE_RENDER_WIDTH,
  CREWBEE_RENDER_HEIGHT, CREWBEE_CHROME_PATH
`);
  process.exit(0);
}

const defaultLocalUrl = 'http://localhost:3000/zh/';
const publishedUrl = 'https://crewbeelab.github.io/zh/';
const baseUrl = args.get('url') ?? process.env.CREWBEE_RENDER_URL ?? defaultLocalUrl;
const outDir = path.resolve(args.get('out-dir') ?? process.env.CREWBEE_RENDER_OUT_DIR ?? 'assets/section-renders');
const viewport = {
  width: Number(args.get('width') ?? process.env.CREWBEE_RENDER_WIDTH ?? 1920),
  height: Number(args.get('height') ?? process.env.CREWBEE_RENDER_HEIGHT ?? 905)
};
const browserContextConfig = {
  viewport,
  deviceScaleFactor: 1,
  colorScheme: 'dark',
  locale: 'zh-CN'
};

const expectedPublishedTheme = {
  paper: 'rgb(11, 10, 8)',
  ink: 'rgb(244, 239, 230)',
  honey: 'rgb(244, 165, 28)'
};

const browserPathCandidates = [
  args.get('browser-path'),
  process.env.CREWBEE_CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium'
].filter(Boolean);

const sections = [
  { slug: '01-hero-status', title: 'Hero + Status', childIndex: 0 },
  { slug: '02-installation', title: 'Installation / Quick Start', childIndex: 1 },
  { slug: '03-why-crewbee', title: 'Why CrewBee', childIndex: 2 },
  { slug: '04-works-today', title: 'What Works Today', childIndex: 3 },
  { slug: '05-how-it-works', title: 'How It Works', childIndex: 4 },
  { slug: '06-coding-team', title: 'Coding Team', childIndex: 5 },
  { slug: '07-first-task', title: 'First Task', childIndex: 6 },
  { slug: '08-product-highlights', title: 'Product Highlights', childIndex: 7 },
  { slug: '09-team-templates', title: 'Team Templates', childIndex: 8 },
  { slug: '10-builder-audience', title: 'Builder Audience', childIndex: 9 },
  { slug: '11-opencode-ready', title: 'OpenCode-ready', childIndex: 10 },
  { slug: '12-project-context-roadmap', title: 'Project Context Roadmap', childIndex: 11 },
  { slug: '13-faq-docs', title: 'FAQ', childIndex: 12 },
  { slug: '14-open-source-inspiration', title: 'Open Source Inspiration', childIndex: 13 },
  { slug: '15-final-cta', title: 'Final CTA', childIndex: 14 }
];

const getLaunchOptions = () => {
  const executablePath = browserPathCandidates.find((candidate) => fs.existsSync(candidate));
  return executablePath ? { executablePath, headless: true } : { headless: true };
};

const waitForSections = async (page) => {
  await page.waitForFunction(
    (expectedCount) => document.querySelector('main')?.children.length >= expectedCount,
    sections.length,
    { timeout: 15000 }
  );
  await page.evaluate(() => document.fonts?.ready);
};

const assertPublishedTheme = async (page) => {
  const theme = await page.evaluate(() => {
    const root = document.documentElement;
    const computed = getComputedStyle(root);
    const toRgb = (value) => {
      const probe = document.createElement('span');
      probe.style.color = value;
      document.body.appendChild(probe);
      const rgb = getComputedStyle(probe).color;
      probe.remove();
      return rgb;
    };

    return {
      url: window.location.href,
      htmlClass: root.className,
      lang: root.lang,
      paper: toRgb(computed.getPropertyValue('--theme-paper').trim()),
      ink: toRgb(computed.getPropertyValue('--theme-ink').trim()),
      honey: toRgb(computed.getPropertyValue('--theme-honey').trim())
    };
  });

  const mismatches = Object.entries(expectedPublishedTheme).filter(([key, expected]) => theme[key] !== expected);
  if (!theme.htmlClass.split(/\s+/).includes('dark') || mismatches.length > 0) {
    throw new Error(`Published theme mismatch: ${JSON.stringify(theme)}`);
  }

  console.log(`using published theme from ${theme.url} (${theme.lang}, ${theme.htmlClass})`);
};

const prepareClip = async (page, childIndex) => {
  await page.evaluate((index) => {
    const section = document.querySelector('main')?.children[index];
    if (!section) throw new Error(`Missing section index ${index}`);
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, Math.max(0, sectionTop - 120));
  }, childIndex);

  await page.waitForTimeout(450);

  return page.evaluate((index) => {
    const section = document.querySelector('main')?.children[index];
    const nav = document.querySelector('nav');
    if (!section || !nav) throw new Error(`Missing section or nav for index ${index}`);

    const navHeight = Math.ceil(nav.getBoundingClientRect().height);
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = sectionRect.top + window.scrollY;
    const sectionHeight = Math.ceil(sectionRect.height);
    const isFirstSection = index === 0;
    const y = isFirstSection ? 0 : Math.max(0, Math.round(sectionTop - navHeight));
    const height = isFirstSection ? sectionHeight : Math.ceil(navHeight + sectionHeight);

    window.scrollTo(0, y);

    nav.dataset.captureOriginalStyle = nav.getAttribute('style') || '';
    nav.style.position = 'absolute';
    nav.style.top = `${y}px`;
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.width = '100%';
    nav.style.zIndex = '9999';

    return { x: 0, y, width: window.innerWidth, height, navHeight, sectionHeight };
  }, childIndex);
};

const restoreNav = async (page) => {
  await page.evaluate(() => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const original = nav.dataset.captureOriginalStyle || '';
    if (original) nav.setAttribute('style', original);
    else nav.removeAttribute('style');
    delete nav.dataset.captureOriginalStyle;
  });
};

const main = async () => {
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`source=${baseUrl}`);
  console.log(`viewport=${viewport.width}x${viewport.height}, dpr=${browserContextConfig.deviceScaleFactor}`);
  console.log(`hint: use --url=${publishedUrl} to capture the published site directly`);

  const browser = await chromium.launch(getLaunchOptions());
  const context = await browser.newContext(browserContextConfig);
  const page = await context.newPage();

  await page.addInitScript(() => {
    localStorage.clear();
  });

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await waitForSections(page);
  await assertPublishedTheme(page);

  for (const section of sections) {
    const clip = await prepareClip(page, section.childIndex);
    await page.waitForTimeout(250);
    const filePath = path.join(outDir, `${section.slug}.png`);
    await page.screenshot({ path: filePath, clip, fullPage: true, animations: 'disabled' });
    await restoreNav(page);
    console.log(`saved ${path.relative(process.cwd(), filePath)} (${clip.width}x${clip.height})`);
  }

  await context.close();
  await browser.close();
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
