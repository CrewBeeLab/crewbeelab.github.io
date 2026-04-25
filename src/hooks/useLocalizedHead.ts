import { useEffect } from 'react';
import { languageConfig } from '../i18n/languageConfig';
import { getLocalizedUrl } from '../i18n/routing';
import type { Copy } from '../i18n/copy';
import type { Language } from '../i18n/types';
import { upsertCanonical, upsertLink, upsertMeta } from '../utils/documentHead';

export const useLocalizedHead = (language: Language, t: Copy) => {
  useEffect(() => {
    const localizedUrl = getLocalizedUrl(language);

    document.title = t.siteTitle;
    document.documentElement.lang = languageConfig[language].htmlLang;
    document.documentElement.dir = 'ltr';

    upsertMeta('meta[name="description"]', { name: 'description', content: t.siteDescription });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: t.siteTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: t.siteDescription });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: languageConfig[language].ogLocale });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: localizedUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: t.siteTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: t.siteDescription });

    upsertCanonical(localizedUrl);
    upsertLink('en', getLocalizedUrl('en'), languageConfig.en.alternateLabel);
    upsertLink('zh-CN', getLocalizedUrl('zh'), languageConfig.zh.alternateLabel);
    upsertLink('x-default', getLocalizedUrl('zh'));
  }, [language, t.siteDescription, t.siteTitle]);
};
