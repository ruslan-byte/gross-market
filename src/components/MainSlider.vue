<template>
	<div class="main-slider">
		<div class="main-slider__arrows">
			<div class="container">
				<div class="main-slider__arrows-wr _main-slider__arrows"></div>
			</div>
		</div>
		<slick
			ref="slick"
			:options="sliderOptions"
		>
			<div
				class="main-slider__slide"
				v-for="slide, i in data"
				:key="i"
			>
				<div class="container">
					<div class="main-slider__slide-inner">
						<h3 class="main-slider__slide-title">{{ slide.title }}</h3>
						<div class="main-slider__slide-img">
							<div
								class="main-slider__slide-marker"
								:class="{'main-slider__slide-marker--reverse': slide.markersType === 2}"
								v-for="marker, j in slide.markers"
								:key="j + marker"
							>{{ marker }}</div>
							<div class="main-slider__slide-img-wr">
								<img :src="slide.imgUrl" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</slick>
	</div>
</template>
<script>
	import Slick from 'vue-slick';
	import 'slick-carousel/slick/slick.css';
	export default {
		name: 'main-slider',
		props:
		{
			data: Array,
		},
		data()
		{
			return {
				sliderOptions:
				{
					infinite: false,
					// autoplay: true,
					arrows: true,
					rows: 0,
					prevArrow: '<div class="main-slider__arrow main-slider__arrow--prev"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/></svg></div>',
					nextArrow: '<div class="main-slider__arrow main-slider__arrow--next"><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/></svg></div>',
					appendArrows: '._main-slider__arrows',
				},
			};
		},
		components:
		{
			Slick,
		},
		methods:
		{},
	}
</script>

<style lang="scss">
	.main-slider
	{
		margin-bottom: 47px;
	}
	.main-slider__slide-title
	{
		font-weight: 500;
		font-size: 48px;
		line-height: 44px;
		color: #000000;
		margin: 0 0 45px;
	}
	.main-slider__slide
	{
		min-height: 591px;
		position: relative;
		background-color: #F5F5F5;
		overflow: hidden;
	}
	.main-slider__slide-inner
	{
		padding: 48px 15px 15px;
	}
	.main-slider__slide-img
	{
		position: absolute;
		bottom: 0;
		width: 120%;
		right: 50%;
		transform: translateX(50%);
		height: 410px;
	}
	.main-slider__slide-img-wr
	{
		border-radius: 50% 50% 0 0;
		overflow: hidden;
		position: absolute;
		width: 100%;
		height: 100%;
	}
	img
	{
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.main-slider__slide-marker
	{
		position: absolute;
		font-weight: 500;
		font-size: 24px;
		color: #000000;
		background-color: #FFFFFF;
		line-height: 54px;
		height: 54px;
		padding: 0 16px;
		border-radius: 40px;
		z-index: 1;
		&:not(&--reverse)
		{
			&:first-of-type
			{
				right: 17%;
				top: 20%;
			}
			&:nth-of-type(2)
			{
				left: 11%;
				bottom: 20%;
			}
		}
		&--reverse
		{
			&:first-of-type
			{
				left: 17%;
				top: 20%;
			}
			&:nth-of-type(2)
			{
				right: 11%;
				bottom: 20%;
			}
		}
	}
	.main-slider__arrows
	{
		display: none;
	}
	@media (min-width: 768px)
	{
		.main-slider
		{
			position: relative;
			margin-bottom: 72px;
		}
		.main-slider__slide
		{
			min-height: 400px;
		}
		.main-slider__slide-img
		{
			width: 370px;
			height: 100%;
			right: 0;
			transform: translateX(0);
		}
		.main-slider__slide-img-wr
		{
			border-radius: 48% 0 0 48%;
			height: 100%;
			width: 100%;
			img
			{
				/*transform: translateX(-10%);*/
			}
		}
		.main-slider__slide-title
		{
			font-size: 72px;
			line-height: 66px;
			width: 35%;
		}
		.main-slider__slide-marker
		{
			&:not(&--reverse)
			{
				&:nth-of-type(2)
				{
					left: 15%;
				}
			}
		}
	}
	@media (min-width: 768px)
	{
		.main-slider__slide-title
		{
			width: 50%;
		}
		.main-slider__arrow
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
		.main-slider__arrows
		{
			position: absolute;
			display: block;
			z-index: 1;
			bottom: 48px;
			left: 50%;
			width: 100%;
			transform: translateX(-50%);
		}
		.main-slider__arrows-wr
		{
			display: flex;
			align-items: center;
			padding: 10px 8px;
			width: fit-content;
			background-color: #FFFFFF;
			border-radius: 8px;
			&:before
			{
				content: '';
				display: block;
				width: 1px;
				height: 28px;
				background-color: #F5F5F5;
				margin: 0 12px;
			}
		}
	}
	@media (min-width: 1440px)
	{
		.main-slider
		{
			.main-slider__slide
			{
				display: flex;
				height: 100%;
				.container
				{
					width: 100%;
					position: relative;
				}
			}
		}
		.main-slider__slide-img
		{
			display: flex;
			align-items: center;
			top: 50%;
			transform: translateY(-50%);
			width: 680px;
			height: 612px;
		}
		.main-slider__slide-img-wr
		{
			border-radius: 50%;
			height: 100%;
			width: 100%;
		}
		.main-slider__slide-title
		{
			width: 25.3%;
		}
	}
</style>