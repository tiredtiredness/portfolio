<script lang="ts">
	import { settings } from '$lib/stores/settings.ts';
	import type { Project } from '$lib/types/index.ts';
	import Slider from './Slider.svelte';

	const { label, description, hrefs, images }: Project = $props();
	const lang = $derived($settings.language);
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-xl">
		{label[lang]}
	</h3>

	<ul class="flex gap-2">
		(
		{#each hrefs as { label, href }, index}
			<li>
				<a class="text-sm" {href} target="_blank" rel="noopener noreferrer">{label[lang]}</a>
				{#if index < hrefs.length - 1}
					<span>/</span>
				{/if}
			</li>
		{/each}
		)
	</ul>

	<p class="text-neutral-400">{description[lang]}</p>
	{#if images.length > 0}
		<Slider {images} />
	{/if}
</div>
