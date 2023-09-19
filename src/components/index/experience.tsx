import {component$} from '@builder.io/qwik';

export interface IExperienceProps {
	title: string,
	image: string,
}

export default component$<IExperienceProps>((props: IExperienceProps) => {
	return (
		<div class="
			flex flex-col items-center justify-between
			h-[260px] w-full
			p-8 gap-4
			border border-[3px] border-primary
			rounded-md
		">
			<h3 class="font-bold text-xl md:text-3xl">{props.title}</h3>
			{props.image != '' ?
				(<img src={`/svg/${props.image}.svg`} class="w-[100px] h-[100px]" alt={props.title} width={100} height={100} />) :
				(<div class="bg-white w-[100px] h-[100px]" />)}
		</div>
	);
});
