<script lang="ts">
	import { settings } from '$lib/stores/settings.js';
	import { errorTitle } from './content.ts';

	const lang = $settings.language;
</script>

<div>
	<h1>404</h1>
	<p>{errorTitle[lang]}</p>
</div>
