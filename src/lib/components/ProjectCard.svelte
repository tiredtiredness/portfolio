<script lang="ts">
	import { settings } from '$lib/stores/settings.ts';
	import type { Image, TranslatedString } from '$lib/types/index.ts';
	import Slider from './Slider.svelte';

	type ProjectCardProps = {
		label: TranslatedString;
		description: TranslatedString;
		href: string;
		images: Image[];
	};

	const { label, description, href, images }: ProjectCardProps = $props();
	const lang = $derived($settings.language);
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-xl">
		{label[lang]} <a class="text-sm" {href} target="_blank" rel="noopener noreferrer">(link)</a>
	</h3>
	<p class="text-neutral-400">{description[lang]}</p>
	{#if images.length > 0}
		<Slider {images} />
	{/if}
</div>
