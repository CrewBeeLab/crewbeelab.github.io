import homepageContentEn from '../../content/homepage-content.en.json';
import homepageContentZh from '../../content/homepage-content.zh.json';

export const homepageContent = {
  en: homepageContentEn,
  zh: homepageContentZh
};

export type HomepageContent = typeof homepageContent.en;
