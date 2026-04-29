import { useEffect } from 'react';
import { languageConfig } from '../i18n/languageConfig';
import { getLocalizedUrl } from '../i18n/routing';
import type { HomepageContent } from '../i18n/homepageContent';
import type { Language } from '../i18n/types';
import { upsertCanonical, upsertLink, upsertMeta } from '../utils/documentHead';

export const useLocalizedHead = (language: Language, content: HomepageContent) => {
  useEffect(() => {
    const localizedUrl = getLocalizedUrl(language);

    document.title = content.siteTitle;
    document.documentElement.lang = languageConfig[language].htmlLang;
    document.documentElement.dir = 'ltr';

    upsertMeta('meta[name="description"]', { name: 'description', content: content.siteDescription });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: content.siteTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: content.siteDescription });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: languageConfig[language].ogLocale });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: localizedUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: content.siteTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: content.siteDescription });

    upsertCanonical(localizedUrl);
    upsertLink('en', getLocalizedUrl('en'), languageConfig.en.alternateLabel);
    upsertLink('zh-CN', getLocalizedUrl('zh'), languageConfig.zh.alternateLabel);
    upsertLink('x-default', getLocalizedUrl('en'));
  }, [language, content.siteDescription, content.siteTitle]);
};
