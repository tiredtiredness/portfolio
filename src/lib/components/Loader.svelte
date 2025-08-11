<div class="flex items-center space-x-0.5">
	<span>Loading</span>
	<span class="dot delay-0">.</span>
	<span class="dot delay-150">.</span>
	<span class="dot delay-300">.</span>
</div>

<style>
	@keyframes blink {
		0%,
		15% {
			opacity: 0;
		}
		85%,
		100% {
			opacity: 1;
		}
	}

	.dot {
		animation: blink 0.5s infinite;
		display: inline-block;
	}

	.delay-0 {
		animation-delay: 0ms;
	}
	.delay-150 {
		animation-delay: 150ms;
	}
	.delay-300 {
		animation-delay: 300ms;
	}
</style>
