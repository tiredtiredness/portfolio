<script lang="ts">
	import { settings } from '$lib/stores/settings.js';
	import { greeting } from './content.ts';

	const lang = $settings.language;
</script>

<div class="flex grow flex-col">
	<p class="z-20 text-3xl text-neutral-100">{greeting[lang]}</p>
	<div
		class="fixed bottom-0 left-1/2 z-10 aspect-video h-2/3 -translate-x-[50%] -translate-y-20 brightness-50 contrast-[82%]"
	>
		<img class="animate-pulse" src="/me.webp" alt="me" />
	</div>
</div>
