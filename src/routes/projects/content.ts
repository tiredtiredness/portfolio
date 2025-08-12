import { projectLabel } from '$lib/constants/index.ts';
import { type Project, type TranslatedString } from '$lib/types/index.ts';

export const content: TranslatedString = {
	en: "some thing i've built to showcase my skills and creativity.",
	ru: 'проекты, которые я создал, чтобы	показать, что умею. немного креатива, немного кода.'
};

export const projects: Project[] = [
	{
		label: { en: 'Impersonator Chat', ru: 'Impersonator Chat' },
		description: {
			en: 'A web app that allows users to chat with famous personalities brought to life using AI. Characters speak in their own style, considering their era, knowledge, and worldview.',
			ru: 'Веб-приложение, позволяющее пользователю общаться с известными личностями, которые "оживают" с помощью AI. Персонажи ведут диалог в своём стиле, с учётом эпохи, знаний и мировоззрения.'
		},
		hrefs: [
			{ label: projectLabel.github, href: 'https://github.com/tiredtiredness/impersonator-chat' },
			{ label: projectLabel.showcase, href: 'https://impersonator-chat.vercel.app' }
		],
		images: [
			{
				src: 'projects/impersonator/1.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/impersonator/2.webp',
				alt: { en: '', ru: '' }
			}
		]
	},
	{
		label: { en: 'Mayorverse', ru: 'Mayorverse' },
		description: {
			en: 'A web app for Cities: Skylines players to share city photos and take part in developing other players’ cities via polls. Developed fullstack app with authentication (JWT), REST API, and database design.',
			ru: 'Веб-приложение для игроков Cities: Skylines, где можно делиться фото городов и участвовать в создании чужих городов через опросы. Разработал fullstack-приложение с аутентификацией (JWT), REST API и проектированием базы данных.'
		},
		hrefs: [{ label: projectLabel.github, href: 'https://github.com/tiredtiredness/mayorverse' }],
		images: [
			{
				src: 'projects/mayorverse/1.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/mayorverse/2.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/mayorverse/3.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/mayorverse/4.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/mayorverse/5.webp',
				alt: { en: '', ru: '' }
			}
		]
	},
	{
		label: { en: 'StarBugsSharing', ru: 'StarBugsSharing' },
		description: {
			en: 'A Mars rover sharing service. Worked in a Kanban team, built frontend and designed database to simplify work with remote-controlled devices.',
			ru: 'Сервис шеринга марсоходов. Работал в команде по Kanban, разрабатывал фронтенд и проектировал базу данных для упрощения работы с радиоуправляемыми устройствами.'
		},
		hrefs: [{ label: projectLabel.github, href: 'https://github.com/Vvvindeta/StarBugsSharing' }],
		images: []
	},
	{
		label: { en: 'Compairson', ru: 'Compairson' },
		description: {
			en: 'An app for creating and ranking lists using the pairwise comparison algorithm.',
			ru: 'Приложение для создания и ранжирования списков с помощью алгоритма попарных сравнений.'
		},
		hrefs: [{ label: projectLabel.github, href: 'https://github.com/tiredtiredness/compairson' }],
		images: []
	},
	{
		label: { en: 'Sixty Four Restaurant Website', ru: 'Сайт ресторана Sixty Four' },
		description: {
			en: 'Implemented online table booking to make reservations easier for guests.',
			ru: 'Реализовал онлайн-бронирование столов, что упростило процесс резервирования для гостей.'
		},
		hrefs: [
			{ label: projectLabel.showcase, href: 'https://rest64.netlify.app' },
			{ label: projectLabel.github, href: 'https://github.com/tiredtiredness/sixtyfour' }
		],
		images: [
			{
				src: 'projects/64/1.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/64/2.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/64/3.webp',
				alt: { en: '', ru: '' }
			}
		]
	},
	{
		label: { en: 'Brut Restaurant Website', ru: 'Сайт ресторана Brut' },
		description: {
			en: 'Updated outdated layout to a modern one.',
			ru: 'Переделал устаревшую верстку на более актуальную.'
		},
		hrefs: [{ label: projectLabel.showcase, href: 'https://brut.spb.ru' }],
		images: [
			{
				src: 'projects/brut/1.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/brut/2.webp',
				alt: { en: '', ru: '' }
			},
			{
				src: 'projects/brut/3.webp',
				alt: { en: '', ru: '' }
			}
		]
	}
];
