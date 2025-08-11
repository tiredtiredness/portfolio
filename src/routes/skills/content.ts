import type { TranslatedString } from '$lib/types/index.ts';

export const content: TranslatedString = {
	ru: 'инструменты, технологии и всякое разное, с чем работал (или пробовал) в процессе.',
	en: "tools, technologies, and random stuff i've used (or just tried) to make things."
};

export const techs: Array<{
	label: TranslatedString;
	items: string[];
}> = [
	{ label: { en: 'Frontend', ru: 'Фронтенд' }, items: ['React', 'NextJS', 'Svelte'] },
	{ label: { en: 'Styles', ru: 'Стили' }, items: ['Tailwind CSS', 'SCSS'] },
	{
		label: { en: 'State Management', ru: 'Управление состоянием' },
		items: ['React Query', 'Zustand', 'MobX', 'DexieJS']
	},
	{ label: { en: 'Backend', ru: 'Бэкенд' }, items: ['Node.js', 'NestJS'] },
	{ label: { en: 'Databases', ru: 'Базы данных' }, items: ['PostgreSQL', 'MySQL', 'Convex'] },
	{ label: { en: 'Hosting', ru: 'Хостинг' }, items: ['Netlify', 'Vercel', 'Selectel'] },
	{ label: { en: 'Package Manager', ru: 'Пакетные менеджеры' }, items: ['npm', 'bun', 'pnpm'] }
];
