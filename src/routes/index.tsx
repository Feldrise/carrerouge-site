/* eslint-disable max-len */
/* eslint-disable qwik/jsx-img */
import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Experience from '~/components/index/experience';
import Header from '~/components/index/header';

const GOOGLE_HORAIRES_URL =
	'https://www.google.com/search?sca_esv=590380016&sxsrf=AM9HkKkVEdMMFkgLl-i6lUZCk0RAiuwJUA:1702485963316&q=sauna+carr%C3%A9+rouge+horaires&ludocid=3104661641764749841&sa=X&ved=2ahUKEwjohMq47oyDAxUeaqQEHZ0IDycQ6BN6BAgqEAI';

export default component$(() => {
	return (
		<>
			<Header />
			<main class="w-full flex flex-col items-center text-center">
				<div class="w-full flex flex-col items-center max-w-6xl py-12 md:py-[15rem] px-8 md:px-12 gap-[8rem]">
					<section>
						<h2 class="font-bold text-3xl md:text-5xl">Bienvenue</h2>
						<div class="h-20" />
						<p class="md:text-3xl mb-16">
							Le Sauna CARRE ROUGE à RENNES est un lieu propice à la décontraction et aux rencontres entres hommes Gays, Bi
							ou Hétéros, curieux de nouvelles sensations.
						</p>
						<p class="md:text-3xl mb-16">
							Qu'il s'agisse de passer un simple moment de détente en utilisant les équipements de l'espace Spa, de bavarder
							au bar ou sur la terrasse autour d'une boisson rafraîchissante ou de chercher un amateur de corps à corps...
							Libre à vous de décider ce qui vous fera plaisir et de rester autant de temps que vous le souhaitez.
						</p>
						<p class="md:text-3xl mb-16">
							Les comportements attendus au sein de notre établissement sont : le respect des autres et des différences physiques,
							le respect des lieux, l'hygiène corporelle régulière grâce aux douches, savon et serviettes.
						</p>
					</section>
					<section class="flex flex-col w-full gap-12 items-center">
						<h2 class="font-bold text-3xl md:text-5xl text-center">Venez découvrir nos expériences</h2>
						<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
							<Experience title='Bar' image='bar' />
							<Experience title='Snacking' image='snacking' />
							<Experience title='Terrasse' image='terrasse' />
							<Experience title='Jacuzzi' image='jacuzzi' />
							<Experience title='Sauna' image='hammam' />
							<Experience title='Hammam' image='sauna' />
							<Experience title='Douches' image='douches' />
							<Experience title='Labyrinthe' image='labyrinthe' />
							<Experience title='Cabines XL' image='cabinesxl' />
						</div>
						<p class="w-full text-xl">L'abus d'alcool est dangereux pour la santé - à consommer avec modération</p>
					</section>
					<section class="w-full flex flex-col items-center">
						<h2 class="font-bold text-3xl md:text-5xl text-center">Profitez d'un endroit chaleureux</h2>
						<div class="h-20" />
						<p class="md:text-3xl pb-8">
							Dans un cadre design et contemporain le sauna Carré Rouge, situé dans la zone de Saint Grégoire, est un lieu idéal
							pour faire de nouvelles rencontres en jouissant pleinement des infrastructures.
						</p>
						<p class="md:text-3xl pb-8">
							L'établissement dispose d'un Spa, Hammam, sauna, salon télé et salles vidéos, bar licence IV avec petite
							restauration, fumoir, labyrinthe, cabines XXL.
						</p>
						<p class="md:text-3xl pb-8">
							Le lieu dispose également d'une terrasse exposée plein sud unique en Bretagne qui fera le bonheur des adeptes du
							naturisme.<br/>
							Prenez le temps de venir découvrir ce coin de verdure insolite à Rennes !
						</p>
						<p class="md:text-3xl pb-8">
							Profitez en toutes saisons de notre établissement, seul ou à plusieurs pour vivre des expériences de rencontres et
							de bien-être qui ne vous laisseront pas indifférents.
						</p>
						<h2 class="py-8 text-center text-3xl font-bold md:text-4xl">
							<span class="text-[#f50707]">Journées naturiste :</span> Lundi, Mercredi et Samedi
						</h2>
						<div class="w-full flex flex-col gap-8 my-20">
							<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
								<div class="bg-[url(/images/1.webp)] bg-center bg-cover h-[300px] md:col-span-2 rounded-lg" />
								<div class="bg-[url(/images/2.webp)] bg-center bg-cover h-[300px] rounded-lg" />
								<div class="bg-[url(/images/3.webp)] bg-center bg-cover h-[300px] rounded-lg" />
								<div class="bg-[url(/images/4.webp)] bg-center bg-cover h-[300px] md:col-span-2 rounded-lg" />
							</div>
							<div class="w-full grid grid-cols-1 md:grid-cols-2 md:h-[1000px] md:grid-rows-6 gap-8">
								<div class="bg-[url(/images/5.webp)] bg-center bg-cover h-[300px] md:h-full md:col-start-1 md:row-start-1 md:row-end-4 rounded-lg" />
								<div class="bg-[url(/images/6.webp)] bg-center bg-cover h-[300px] md:h-full md:col-start-1 md:row-start-4 md:row-end-7 rounded-lg" />
								<div class="bg-[url(/images/7.webp)] bg-center bg-cover h-[300px] md:h-full md:col-start-2 md:row-start-1 md:row-end-3 rounded-lg" />
								<div class="bg-[url(/images/8.webp)] bg-center bg-cover h-[300px] md:h-full md:col-start-2 md:row-start-3 md:row-end-7 rounded-lg" />
							</div>
							<div class="w-full bg-[url(/images/9.webp)] bg-center bg-cover h-[500px] rounded-lg" />
						</div>
					</section>
					<section class="flex flex-col w-full gap-20 items-center">
						<h2 class="font-bold text-3xl md:text-5xl text-center">Pour une expérience plus intense...</h2>
						<p class="md:text-3xl text-center">
							Pour une meilleure expérience vous pourrez profiter sur place d'équipement ou de produits disponibles à la vente
							améliorant votre expérience au Carré Rouge.<br/><br/>
							Amusez vous et profitez de vos nouvelles rencontres
						</p>
						<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
							<Experience title='Poppers' image='poppers' />
							<Experience title='BDSM' image='bdsm' />
							<Experience title='Accessoires' image='accessoires' />
						</div>
					</section>
					<section class="flex flex-col w-full gap-12">
						<h2 class="font-bold text-3xl md:text-5xl">
							Privatisation d'évènements <img class="inline w-[48px] h-[48px]" src="/svg/martini.svg" alt='Icon martini' width={48} height={48} />
						</h2>
						<p class="md:text-3xl">
							Vous souhaitez célébrer un évènement important ou tout simplement rassembler vos amis ou connaisances pour créer
							une soirée insolite dans un lieu atypique !<br /><br/>
							Réservez tous types de soirées : nouveau job, anniversaire, corporate, promotion, enterrement vie de garçon ou
							fille ou tout autre évènement<br/><br/>
							Pour réserver contactez-nous au : <a class="text-primary" href="tel:+33299366829">02.99.36.68.29</a>
						</p>
					</section>
					<section class="w-full max-w-7xl flex items-center justify-center">
						<img class="hidden w-full xl:block" src="/images/footer.webp" alt="Image d'illustration du Footer" />
						<img class="w-full max-w-[600px]" src="/images/logo.png" alt="Image d'illustration du Footer" />
					</section>
					<section class="w-full flex flex-col md:text-3xl font-bold text-center gap-20">
						<p>
							Le Sauna Carré Rouge est situé dans la ville de Rennes<br/>
							Les places de stationnement sont gratuites
							<br/><br />
							15 Rue de la Donelière<br/>
							35000 Rennes<br/>
							02.99.36.68.29
						</p>
						<div class="flex flex-col gap-8">
							<h2 class="underline underline-offset-[1rem] decoration-primary">Horaires</h2>
							<p class="font-normal text-2xl underline">
								<i>
									<a href={GOOGLE_HORAIRES_URL} target="_blank">
										Vérifier nos horaires sur la fiche Google en cliquant ici
									</a>
								</i>
							</p>
							<p>
								Les horaires sont donnés à titre indicatif et susceptibles de modifications.<br/>
								<i>Ouvert tous les jours y compris les jours fériés sauf exception</i>
							</p>
						</div>
						<div class="flex flex-col gap-8">
							<h2 class="underline underline-offset-[1rem] decoration-primary">Tarifs</h2>
							<p>
								18 - 25 ans : 5 €<br/>
								26 - 35 ans : 11 € / 8 €<br/>
								36 ans et + : 16 € / 12 €<br/>
							</p>
							<p>
								Happy Hours tarif réduit tous les jours de 12h00 à 13h00 de 19h00 à 20h00 et les 2 dernières heures (le
								weekend de 13h00 à 14h00)
							</p>
						</div>
						<p>
							Carte de fidelité gratuite<br/>
							DROIT DE RETOUR OFFERT !
						</p>
					</section>
				</div>
				<section class="w-full flex flex-col items-center justify-center bg-white text-black font-normal text-center">
					<div class="w-full flex flex-col max-w-6xl py-4 md:py-16 px-8 md:px-12 gap-24">
						<div class="w-full flex flex-col gap-4">
							<h2 class="w-full text-secondary font-bold text-3xl md:text-5xl text-center">Nos intervenants santé et prévention</h2>
							<h3 class="w-full text-secondary text-2xl md:text-3xl text-center">
								Pour répondre a vos questions en toute discrétion et convivialité
							</h3>
						</div>
						<div class="w-full flex flex-col items-center gap-10">
							<img src="/images/aides.webp" alt="Logo AIDES" width={430} height={188} />
							<p class="md:text-3xl">
								L'association Aides intervient au Sauna Carré Rouge une fois par mois pour échanger autour de votre santé
								sexuelle, de votre statut sérologique. Un dépistage rapide du VIH et / ou des hépatites B et C vous sera
								proposé (dernier dépistage 30min avant la fin).
							</p>
							<div class="h-10" />
							<img class="w-[112px] h-[112px]" src="/svg/calendrier.svg" alt='Logo Calendrier' width={112} height={112} />
							<p class="md:text-3xl">
								Pour connaître les prochaines dates d'interventions vous pouvez consulter{' '}
								<a href="https://www.aides.org/" target="_blank" class="text-primary underline">le site de l'AIDES</a>
							</p>
						</div>
						<div class="w-full flex flex-col items-center gap-10">
							<img src="/images/enips.webp" alt="Logo AIDES" width={430} height={188} />
							<p class="md:text-3xl">
								L'association ENIPS intervient au Sauna Carré Rouge une fois par mois pour vous proposer un dépistage rapide,
								gratuit et anonyme : dépistage du VIH et / ou des hépatites B et C.
							</p>
							<div class="h-10" />
							<img class="w-[112px] h-[112px]" src="/svg/calendrier.svg" alt='Logo Calendrier' width={112} height={112} />
							<p class="md:text-3xl">
								Pour connaître les prochaines date d'interventions vous pouvez consulter{' '}
								<a href="https://www.enipse.fr/" target="_blank" class="text-primary underline">le site de l'ENIPSE</a>
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Sauna Carré Rouge',
	meta: [
		{
			name: 'description',
			content: 'Bienvenue sur le site du Sauna Carré Rouge',
		},
	],
};
