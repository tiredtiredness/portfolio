<script lang="ts">
	import { settings } from '$lib/stores/settings.js';
	import { techs, content } from './content.ts';

	const lang = $derived($settings.language);
</script>

<div class="flex h-full w-full flex-col space-y-5">
	<p>{content[lang]}</p>

	<div class="grid grow grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-5">
		{#each techs as tech, index}
			<div class="rounded-xl">
				<h3 class="text-xl font-bold">
					<span>0{index + 1}.</span>
					{tech.label[lang]}
				</h3>
				<ul>
					{#each tech.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div></div>
		{/each}
	</div>
</div>
