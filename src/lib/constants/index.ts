import type { TranslatedString } from '$lib/types/index.ts';

export const projectLabel: Record<'github' | 'showcase', TranslatedString> = {
	github: { en: 'github', ru: 'гитхаб' },
	showcase: { en: 'showcase', ru: 'демонстрация' }
} as const;
