import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<header class="
			w-full min-h-[100vh]
			flex flex-col items-center justify-center
			bg-[#8e1d5f]
		">
			<h1 class="font-bold text-2xl md:text-5xl lg:text-[7rem]">Carré rouge</h1>
			<div class="h-10" />
			<h2>Saunay Gay - Bisexuels - Hétero Curieux</h2>
		</header>
	);
});
