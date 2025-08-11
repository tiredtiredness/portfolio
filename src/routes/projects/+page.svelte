<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { settings } from '$lib/stores/settings.js';
	import { content, projects } from './content.ts';

	const lang = $derived($settings.language);
</script>

<div class="flex h-full w-full flex-col items-center space-y-5">
	<p>{content[lang]}</p>
	<div class="flex flex-col gap-5 pb-5">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
