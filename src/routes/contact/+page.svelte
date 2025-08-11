<script lang="ts">
	import { settings } from '$lib/stores/settings.js';
	import { content, socials } from './content.ts';

	const lang = $derived($settings.language);
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-5">
	<p>{content[lang]}</p>
	<div class="flex justify-center gap-4">
		{#each socials as social, index (social.href)}
			<a href={social.href} target="_blank" rel="noopener noreferrer"> {social.label[lang]}</a>
			{#if index < socials.length - 1}
				<span>/</span>
			{/if}
		{/each}
	</div>
</div>
