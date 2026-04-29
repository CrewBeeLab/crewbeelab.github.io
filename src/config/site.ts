export const GITHUB_URL = 'https://github.com/CrewBeeLab/CrewBee';
export const GET_STARTED_URL = '#docs';
export const SITE_URL = 'https://crewbeelab.github.io/';
export const LANGUAGE_STORAGE_KEY = 'crewbee-language';
export const EN_PATH_PREFIX = '/en/';
export const ZH_PATH_PREFIX = '/zh/';

export type NavItemKey = 'features' | 'coding' | 'context' | 'how' | 'docs';

export const navItems: ReadonlyArray<{ href: string; key: NavItemKey }> = [
  { href: '#features', key: 'features' },
  { href: '#coding-team', key: 'coding' },
  { href: '#project-context', key: 'context' },
  { href: '#how-it-works', key: 'how' },
  { href: '#docs', key: 'docs' }
];
