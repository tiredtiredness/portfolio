<script lang="ts">
	import { onMount } from 'svelte';
	import { settings } from '$lib/stores/settings.ts';
	import type { Image } from '$lib/types/index.ts';

	type SliderProps = {
		images: Image[];
	};

	const { images }: SliderProps = $props();

	let currentIndex = $state(0);
	let fading = $state(false);
	const lang = $settings.language;

	const imagesLength = $derived(images.length);
	const current = $derived(images[currentIndex]);

	function showPrev() {
		if (currentIndex > 0) {
			changeImage(currentIndex - 1);
		}
	}

	function showNext() {
		if (currentIndex < imagesLength - 1) {
			changeImage(currentIndex + 1);
		}
	}

	function changeImage(newIndex: number) {
		fading = true;
		setTimeout(() => {
			currentIndex = newIndex;
			fading = false;
		}, 200);
	}

	onMount(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') showPrev();
			if (e.key === 'ArrowRight') showNext();
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});
</script>

{#if imagesLength > 0}
	<div class="mx-auto grid w-full max-w-4xl grid-cols-[auto_1fr_auto] items-center gap-2 p-2">
		<button
			class="p-2 text-xl disabled:opacity-50"
			aria-label="Previous image"
			disabled={currentIndex === 0}
			onclick={showPrev}
		>
			←
		</button>

		<div class="relative flex w-full justify-center">
			<img
				class="max-h-[70vh] object-contain shadow-lg shadow-neutral-300 saturate-0 transition-all hover:saturate-100"
				class:fading
				src={current.src}
				alt={current.alt[lang]}
			/>
		</div>

		<button
			class="p-2 text-xl disabled:opacity-50"
			aria-label="Next image"
			disabled={currentIndex === imagesLength - 1}
			onclick={showNext}
		>
			→
		</button>
	</div>
{:else}
	<p class="text-center text-gray-500">No images available</p>
{/if}

<style>
	img {
		transition: opacity 0.3s ease;
		opacity: 1;
	}
	.fading {
		opacity: 0;
	}
	@media (max-width: 640px) {
		img {
			max-height: 50vh;
		}
	}
</style>
