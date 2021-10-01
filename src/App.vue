<template>
	<div>
		<Header />
		<MainSlider :data="mainSliderdata" />
		<CardsSlider :data="CardsSlider" />
		<Instagram />
		<Map />
		<Footer />
	</div>
</template>

<script>
	import Header from "@/components/Header"
	import Instagram from "@/components/Instagram"
	import Map from "@/components/Map"
	import Footer from "@/components/Footer";
	import MainSlider from "@/components/MainSlider";
	import CardsSlider from "@/components/CardsSlider";

	export default {
		name: 'App',
		components:
		{
			Header,
			MainSlider,
			CardsSlider,
			Footer,
			Instagram,
			Map,
		},
		data()
		{
			return {
				mainSliderdata:
				[
					{
						title: 'У тебя к этому талант',
						imgUrl: './img/MainSlider.png',
						markers: ['пекарь', 'валентин'],
					},
					{
						title: 'У тебя всё под контролем',
						imgUrl: './img/MainSlider2.png',
						markers: ['пекарь', 'валентин'],
						markersType: 2,
					},
					{
						title: 'У тебя к этому талант',
						imgUrl: './img/MainSlider.png',
						markers: ['пекарь', 'валентин'],
					}
				],
				CardsSlider:
				{
					title: 'вакансии в гросс маркете',
					slides:
					[
						{
							title: 'товаровед',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider1.png',
						},
						{
							title: 'водитель',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider2.png',
						},
						{
							title: 'пекарь',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider3.png',
						},
						{
							title: 'кассир',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider4.png',
						},
						{
							title: 'продавец',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider5.png',
						},
						{
							title: 'повар',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider6.png',
						},
						{
							title: 'приёмщик',
							desc: 'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
							imgUrl: './img/CardsSlider7.png',
						},
					]
				}
			};
		}
	}
</script>

<style lang="scss">
	body{margin: 0;}
	@font-face
	{
		font-family: 'EuclidCircularB';
		src: url('./assets/fonts/EuclidCircularB-Medium.ttf');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}
</style>