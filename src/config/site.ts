export const GITHUB_URL = 'https://github.com/CrewBeeLab/CrewBee';
export const DISCUSSIONS_URL = `${GITHUB_URL}/discussions`;
export const GET_STARTED_URL = '#docs';
export const DEMO_URL = '#first-task';
export const SITE_URL = 'https://crewbeelab.github.io/';
export const LANGUAGE_STORAGE_KEY = 'crewbee-language';
export const EN_PATH_PREFIX = '/en/';
export const ZH_PATH_PREFIX = '/zh/';

export type NavItemKey = 'why' | 'coding' | 'how' | 'templates' | 'roadmap' | 'docs';

export const navItems: ReadonlyArray<{ href: string; key: NavItemKey }> = [
  { href: '#why-crewbee', key: 'why' },
  { href: '#coding-team', key: 'coding' },
  { href: '#how-it-works', key: 'how' },
  { href: '#teams', key: 'templates' },
  { href: '#project-context', key: 'roadmap' },
  { href: '#docs', key: 'docs' }
];
