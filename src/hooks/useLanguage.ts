import { useEffect, useState } from 'react';
import { LANGUAGE_STORAGE_KEY } from '../config/site';
import { languageConfig } from '../i18n/languageConfig';
import { getInitialLanguage, getLocalizedPath } from '../i18n/routing';
import type { Language } from '../i18n/types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = languageConfig[language].htmlLang;
    document.documentElement.dir = 'ltr';
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = getLocalizedPath(language);
    nextUrl.searchParams.delete('lang');

    const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextPath !== currentPath) {
      window.history.replaceState({}, '', nextPath);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'zh' : 'en'));
  };

  return { language, toggleLanguage };
};
