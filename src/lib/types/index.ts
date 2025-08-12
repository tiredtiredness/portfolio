import { projectLabel } from '$lib/constants/index.ts';

export type Image = {
	src: string;
	alt: TranslatedString;
};

export type TranslatedString = {
	en: string;
	ru: string;
};

type ProjectHref = { label: (typeof projectLabel)[keyof typeof projectLabel]; href: string };

export type Project = {
	label: TranslatedString;
	description: TranslatedString;
	hrefs: ProjectHref[];
	images: Image[];
};
