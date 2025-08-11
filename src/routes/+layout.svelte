<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import { settings } from '$lib/stores/settings.js';
	import { IconContext, Moon, Sun } from 'phosphor-svelte';
	import { navLinks } from './content.ts';

	const { children } = $props();

	const isCurrentPage = (href: string) => page.url.pathname.includes(href);

	const currentIndex = $derived(navLinks.findIndex((link) => link.href === page.url.pathname) + 1);

	const totalPages = navLinks.length;
	const lang = $derived($settings.language);
	let theme = $derived($settings.theme);
</script>

<header class="z-20 flex justify-between">
	<div class="flex grow flex-col md:flex-row">
		<p><a href="/">/constaui</a></p>
		<nav class="flex grow md:ml-auto md:justify-center">
			<ul class="flex flex-col md:flex-row md:items-center md:gap-4">
				{#each navLinks as link}
					<li>
						<a
							class=" {isCurrentPage(link.href) && 'text-shadow-lg text-shadow-neutral-300'}"
							href={link.href}>{link.label[lang]}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<button
		class="cursor-pointer self-start"
		onclick={() => {
			if (lang === 'ru') {
				$settings.language = 'en';
			} else {
				$settings.language = 'ru';
			}
		}}>{lang}</button
	>
</header>

<div class="grid h-full grow grid-cols-1 place-items-center gap-10">
	{@render children()}
</div>

<footer class="z-20 flex justify-between">
	<button
		class="cursor-pointer"
		onclick={() => {
			if (theme === 'light') {
				$settings.theme = 'dark';
				document.body.setAttribute('data-theme', 'dark');
			} else {
				$settings.theme = 'light';
				document.body.setAttribute('data-theme', 'light');
			}
		}}
		><IconContext values={{ weight: 'fill' }}>
			{#if theme === 'dark'}
				<Moon />
			{:else}
				<Sun />
			{/if}</IconContext
		>
	</button>
	<p>{currentIndex} / {totalPages}</p>
</footer>
