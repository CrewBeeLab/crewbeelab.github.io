import { EN_PATH_PREFIX, LANGUAGE_STORAGE_KEY, SITE_URL, ZH_PATH_PREFIX } from '../config/site';
import { isLanguage } from './languageConfig';
import type { Language } from './types';

export const getLocalizedPath = (language: Language) => (language === 'zh' ? ZH_PATH_PREFIX : EN_PATH_PREFIX);

export const getLocalizedUrl = (language: Language) => new URL(getLocalizedPath(language), SITE_URL).toString();

export const getInitialLanguage = (): Language => {
  if (window.location.pathname === '/en' || window.location.pathname.startsWith(EN_PATH_PREFIX)) {
    return 'en';
  }

  if (window.location.pathname === '/zh' || window.location.pathname.startsWith(ZH_PATH_PREFIX)) {
    return 'zh';
  }

  const searchLanguage = new URLSearchParams(window.location.search).get('lang');
  if (isLanguage(searchLanguage)) {
    return searchLanguage;
  }

  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return 'en';
};
