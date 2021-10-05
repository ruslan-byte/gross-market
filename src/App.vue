<template>
	<div>
		<Header @showPopup="isQuestionnaireOpen = true"/>
		<MainSlider :data="mainSliderdata" @showPopup = "isQuestionnaireOpen = true"/>
		<CardsSlider :data="CardsSlider" @showPopup="isQuestionnaireOpen = true"/>
		<Instagram :imageList="imageList"/>
		<Map :mapData="map"/>
		<Footer />
		<Popup :visible.sync="isQuestionnaireOpen" :transparent="true">
			<Questionnaire @close="isQuestionnaireOpen = false"/>
		</Popup>
	</div>
</template>

<script>
	import Header from "@/components/Header"
	import Instagram from "@/components/Instagram"
	import Map from "@/components/Map"
	import Footer from "@/components/Footer";
	import MainSlider from "@/components/MainSlider";
	import CardsSlider from "@/components/CardsSlider";
	import Questionnaire from "@/components/Questionnaire";
	import axios from "axios";

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
			Questionnaire,
		},
		mounted()
		{
			axios.get('http://localhost:3000/instagramSrc')
			.then(response => {
				this.imageList  = response.data;
			})
			axios.get('http://localhost:3000/map')
			.then(response => {
				this.map  = response.data;
			})
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
					],

				},
				imageList:[
					{
						index: 1,
						imageSrc: "img/plug.png",
						url: "#"
					},
					{
						index: 2,
						imageSrc: "img/plug.png",
						url: "#"
					},
					{
						index: 3,
						imageSrc: "img/plug.png",
						url: "#"
					},
					{
						index: 4,
						imageSrc: "img/plug.png",
						url: "#"
					},
					{
						index: 5	,
						imageSrc: "img/plug.png",
						url: "#"
					},

				],
				map:{},
				isQuestionnaireOpen: false,
			};
		},
	}
</script>

<style lang="scss">
	@import "@/assets/styles/styles.scss";
	body{margin: 0;}
	@font-face
	{
		font-family: 'EuclidCircularB';
		src: url('./assets/fonts/EuclidCircularB-Medium.ttf');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}
	@font-face
	{
		font-family: 'EuclidCircularB';
		src: url('./assets/fonts/EuclidCircularB-Regular.ttf');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
</style>