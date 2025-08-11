<script lang="ts">
	import { settings } from '$lib/stores/settings.js';
	import { useQuery } from 'convex-svelte';
	import { api } from '../../convex/_generated/api.js';
	import { content } from './content.ts';
	import Loader from '$lib/components/Loader.svelte';
	import { setupConvex } from 'convex-svelte';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';

	setupConvex(PUBLIC_CONVEX_URL);

	const query = useQuery(api.posts.get, {});

	const { isLoading, error, data: posts } = $derived(query);
	const lang = $derived($settings.language);
</script>

<div class="flex h-full w-full flex-col items-center space-y-5">
	<p>{content[lang]}</p>

	{#if isLoading}
		<Loader />
	{:else if error}
		<p>Error loading posts.</p>
	{:else}
		<ul class="grid grid-cols-1 gap-4 overflow-y-auto">
			{#each posts as post, index (post._id)}
				<li>
					<div>
						<time class="text-neutral-400"
							>{new Date(post.date).toLocaleDateString(lang, {
								month: 'long',
								day: 'numeric',
								year: 'numeric'
							})}</time
						>
						<h3 class="text-xl font-bold">
							#{(posts.length - 1 - index).toString().padStart(2, '0')}
							{post.title[lang]}
						</h3>
						<p class="text-neutral-400">{post.content[lang]}</p>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
