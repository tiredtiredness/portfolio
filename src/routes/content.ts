import type { TranslatedString } from '$lib/types/index.ts';

export const errorTitle: TranslatedString = {
	en: 'Page not found',
	ru: 'Cтраница не найдена'
};

export const navLinks: Array<{ label: TranslatedString; href: string }> = [
	{ label: { en: '/about', ru: '/обо-мне' }, href: '/about' },
	{ label: { en: '/projects', ru: '/проекты' }, href: '/projects' },
	{ label: { en: '/skills', ru: '/навыки' }, href: '/skills' },
	{ label: { en: '/diary', ru: '/дневник' }, href: '/diary' },
	{ label: { en: '/contact', ru: '/контакты' }, href: '/contact' }
];

export const greeting: TranslatedString = {
	en: "Hi, I'm Konstantin",
	ru: 'Привет, я Константин'
};
