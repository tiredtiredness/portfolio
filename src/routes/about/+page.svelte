<script lang="ts">
	import { settings } from '$lib/stores/settings.js';
	import { content } from './content.ts';

	const lang = $derived($settings.language);
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-5">
	<p>{content[lang]}</p>
</div>
