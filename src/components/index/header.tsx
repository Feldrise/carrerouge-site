import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<header class="
			w-full min-h-[100vh]
			flex flex-col items-center justify-end
			bg-[url('/images/header.webp')] bg-cover bg-center
			pb-[200px] md:pb-[140px]
		">
			<h1 class="text-[max(4vw,4vh)] font-bold">Sauna Carré Rouge</h1>
			<div class="h-4" />
			<h2 class="text-center font-bold md:text-2xl">Sauna Gay - Bisexuels - Hétéros Curieux</h2>
		</header>
	);
});
