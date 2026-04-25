import type { Language, LanguageMetadata } from './types';

export const languageConfig: Record<Language, LanguageMetadata> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', alternateLabel: 'English' },
  zh: { htmlLang: 'zh-CN', ogLocale: 'zh_CN', alternateLabel: '简体中文' }
};

export const isLanguage = (value: string | null): value is Language => value === 'en' || value === 'zh';
