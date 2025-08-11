import { writable } from 'svelte/store';

type TSettings = {
	theme: 'dark' | 'light';
	language: 'en' | 'ru';
};

export const settings = writable<TSettings>({
	theme: 'light',
	language: 'ru'
});
