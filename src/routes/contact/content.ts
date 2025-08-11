import type { TranslatedString } from '$lib/types/index.ts';

export const content: TranslatedString = {
	en: 'if u got an idea, offer, or just wanna say hi, feel free to reach out.',
	ru: 'если есть идея, предложение или желание поздороваться, можете написать мне.'
};

export const socials: Array<{
	label: TranslatedString;
	href: string;
}> = [
	{
		label: { en: 'github', ru: 'гитхаб' },
		href: 'https://github.com/tiredtiredness'
	},
	{
		label: { en: 'telegram', ru: 'телега' },
		href: 'https://t.me/constaui'
	}
];
