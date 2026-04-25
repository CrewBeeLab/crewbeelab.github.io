import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const zhDir = path.join(distDir, 'zh');
const zhIndexPath = path.join(zhDir, 'index.html');

const locales = {
  en: {
    lang: 'en',
    title: 'CrewBee | Team-first Agent Teams',
    description: 'CrewBee is a Team-first Agent Team framework for OpenCode. Define Teams, pick a Leader, and run structured agent workflows in the host you already use.',
    ogLocale: 'en_US',
    url: 'https://crewbeelab.github.io/'
  },
  zh: {
    lang: 'zh-CN',
    title: 'CrewBee | 团队优先的智能体团队',
    description: 'CrewBee 是一个面向 OpenCode 的团队优先 Agent Team 框架。定义团队、选择 Leader，并在你已经使用的宿主中运行结构化的智能体工作流。',
    ogLocale: 'zh_CN',
    url: 'https://crewbeelab.github.io/zh/'
  }
};

const alternateLinks = `    <link rel="alternate" hreflang="en" href="${locales.en.url}" />
    <link rel="alternate" hreflang="zh-CN" href="${locales.zh.url}" />
    <link rel="alternate" hreflang="x-default" href="${locales.zh.url}" />`;

const upsertTag = (html, selectorPattern, tag) => {
  if (selectorPattern.test(html)) {
    return html.replace(selectorPattern, tag);
  }

  return html.replace('    <link rel="icon"', `${tag}\n    <link rel="icon"`);
};

const localizeHtml = (html, locale) => {
  let localized = html
    .replace(/<html lang="[^"]*">/, `<html lang="${locale.lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${locale.title}</title>`);

  localized = upsertTag(localized, /    <meta name="description" content="[^"]*" \/>/, `    <meta name="description" content="${locale.description}" />`);
  localized = upsertTag(localized, /    <meta property="og:title" content="[^"]*" \/>/, `    <meta property="og:title" content="${locale.title}" />`);
  localized = upsertTag(localized, /    <meta property="og:description" content="[^"]*" \/>/, `    <meta property="og:description" content="${locale.description}" />`);
  localized = upsertTag(localized, /    <meta property="og:url" content="[^"]*" \/>/, `    <meta property="og:url" content="${locale.url}" />`);
  localized = upsertTag(localized, /    <meta property="og:locale" content="[^"]*" \/>/, `    <meta property="og:locale" content="${locale.ogLocale}" />`);
  localized = upsertTag(localized, /    <meta name="twitter:title" content="[^"]*" \/>/, `    <meta name="twitter:title" content="${locale.title}" />`);
  localized = upsertTag(localized, /    <meta name="twitter:description" content="[^"]*" \/>/, `    <meta name="twitter:description" content="${locale.description}" />`);
  localized = upsertTag(localized, /    <link rel="canonical" href="[^"]*" \/>/, `    <link rel="canonical" href="${locale.url}" />`);
  localized = localized.replace(/    <link rel="alternate" hreflang="en" href="[^"]*" \/>\n    <link rel="alternate" hreflang="zh-CN" href="[^"]*" \/>\n    <link rel="alternate" hreflang="x-default" href="[^"]*" \/>/, alternateLinks);

  return localized;
};

if (!fs.existsSync(indexPath)) {
  throw new Error(`Missing build output: ${indexPath}`);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');
fs.writeFileSync(indexPath, localizeHtml(baseHtml, locales.en));
fs.mkdirSync(zhDir, { recursive: true });
fs.writeFileSync(zhIndexPath, localizeHtml(baseHtml, locales.zh));

console.log('Localized dist pages: / and /zh/');
