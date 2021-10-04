<template>
	<div class="cards-slider">
		<div class="container">
			<div class="cards-slider__top">
				<h2 class="g-title-2">{{ data.title }}</h2>
				<div class="cards-slider__arrows">
					<div class="cards-slider__arrows-wr _cards-slider__arrows"></div>
				</div>
			</div>
			<slick
				ref="slick"
				:options="sliderOptions"
			>
				<div
				class="cards-slider__slide"
				v-for="slide, i in data.slides"
				:key="i"
				@click="showPopup"
				>
					<div class="cards-slider__slide-inner">
						<div class="cards-slider__slide__title">{{ slide.title }}</div>
					</div>
					<img v-if="slide.imgUrl" :src="slide.imgUrl" alt="">
					<div class="cards-slider__slide-hover">
						<div class="cards-slider__slide-inner">
							<p class="cards-slider__slide-desc">{{ slide.desc }}</p>
						</div>
					</div>
				</div>
			</slick>
		</div>
	</div>
</template>
<script>
	import Slick from 'vue-slick';
	import 'slick-carousel/slick/slick.css';

	export default {
		name: 'cards-slider',
		props:
		{
			data: Object,
		},
		components:
		{
			Slick,
		},
		data()
		{
			return {
				sliderOptions:
				{
					infinite: false,
					variableWidth: true,
					mobileFirst: true,
					centerMode:true,
					rows: 0,
					prevArrow: '<div class="cards-slider__arrow cards-slider__arrow--prev"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/></svg></div>',
					nextArrow: '<div class="cards-slider__arrow cards-slider__arrow--next"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/></svg></div>',
					appendArrows: '._cards-slider__arrows',
					responsive: [
						{
							breakpoint: 425,
							settings: {
								centerMode:false,
							}
						},
					]
				},
			};
		},
		methods:
		{
			showPopup(){
				this.$emit("showPopup");
			}
		},
	}
</script>

<style lang="scss">
	.cards-slider
	{
		overflow: hidden;
		margin-bottom: 48px;
		.slick-list
		{
			margin: 0 -15px 0 0;
			overflow: visible;
		}
	}
	.cards-slider__slide
	{
		position: relative;
		height: 344px;
		width: 252px;
		background: #F5F5F5;
		border-radius: 8px;
		margin: 0 15px 0 0;
		overflow: hidden;
		cursor: pointer;
		&:hover .cards-slider__slide-hover{transform: translateY(0);}
	}
	.cards-slider__slide-inner
	{
		padding: 24px;
	}
	.cards-slider__slide-hover
	{
		position: absolute;
		display: flex;
		align-items: flex-end;
		width: 100%;
		height: 100%;
		transition: .3s ease;
		background-color: #FFDF31;
		border-radius: 8px;
		bottom: 0;
		left: 0;
		transform: translateY(101%);
	}
	.cards-slider__slide__title
	{
		position: relative;
		z-index: 1;
		background: #FFFFFF;
		border-radius: 40px;
		line-height: 50px;
		height: 50px;
		padding: 0 16px;
		width: fit-content;
		font-weight: 500;
		font-size: 24px;
		color: #000000;
	}
	.cards-slider__slide-desc
	{
		font-weight: 500;
		font-size: 18px;
		line-height: 23px;
		color: #000000;
	}
	.cards-slider__title
	{
		font-weight: 500;
		font-size: 32px;
		line-height: 41px;
		color: #000000;
	}
	.cards-slider__arrows{display: none;}
	@media (min-width: 768px)
	{
		.cards-slider__slide
		{
			width: 300px;
			height: 410px;
		}
		.cards-slider
		{
			position: relative;
			margin-bottom: 73px;
			&:after
			{
				content: '';
				position: absolute;
				width: 39px;
				height: 100%;
				left: 0;
				top: 0;
				background-color: #fff;
			}
		}
	}
	@media (min-width: 1142px)
	{
		.cards-slider
		{
			&:after
			{
				width: calc( (100% - 1140px) / 2);
			}
		}
	}
	@media (min-width: 1440px)
	{
		.cards-slider{margin-bottom: 71px;}
		.cards-slider__top
		{
			display: flex;
			justify-content: space-between;
			.g-title-2
			{
				min-width: 70%;
			}
		}
		.cards-slider__arrow
		{
			position: relative;
			height: 24px;
			width: 24px;
			svg
			{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				path
				{
					transition: .2s;
					opacity: 0.2;
				}
			}
			&:not(.slick-disabled)
			{
				cursor: pointer;
				svg
				{
					path
					{
						transition: .2s;
						opacity: 1;
					}
				}
			}
			&--prev
			{
				order: -1;
			}
		}
		.cards-slider__arrows
		{
			display: block;
		}
		.cards-slider__arrows-wr
		{
			display: flex;
			align-items: center;
			padding: 10px 8px;
			width: fit-content;
		}
		.cards-slider__slide
		{
			width: 350px;
			height: 482px;
		}
	}
</style>