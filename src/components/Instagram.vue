<template>
	<div class="instagram container">
		<h2>мы в инстаграме</h2>
		<ul class="instagram__image-list">
			<li v-for="image of countViewImage" :key="image"><a :href="imageList[image-1].imageSrc"><img :src="imageList[image-1].url"></a></li>
		</ul>
		<button @click="addCountViewImage" v-if="isAddButtonVisible">показать ещё</button>
	</div>
</template>
<script>
	export default
	{
		data(){
			return{
				imageList:[
					{index:1, imageSrc:"#", url:"https://www.restate.ru/attachment/e42d81bf0c58bdb88b51673e2ed3b3702153d3de/proportional/1600x1600/AF1QipMTkqlsrgHfUeXu33ilViUvYmNMy_PpAL3C96Oi%3Ds1600-w1600"},
					{index:2, imageSrc:"#", url:"https://www.restate.ru/attachment/e42d81bf0c58bdb88b51673e2ed3b3702153d3de/proportional/1600x1600/AF1QipMTkqlsrgHfUeXu33ilViUvYmNMy_PpAL3C96Oi%3Ds1600-w1600"},
					{index:3, imageSrc:"#", url:"https://www.restate.ru/attachment/e42d81bf0c58bdb88b51673e2ed3b3702153d3de/proportional/1600x1600/AF1QipMTkqlsrgHfUeXu33ilViUvYmNMy_PpAL3C96Oi%3Ds1600-w1600"},
					{index:4, imageSrc:"#", url:"https://www.restate.ru/attachment/e42d81bf0c58bdb88b51673e2ed3b3702153d3de/proportional/1600x1600/AF1QipMTkqlsrgHfUeXu33ilViUvYmNMy_PpAL3C96Oi%3Ds1600-w1600"},
					{index:5, imageSrc:"#", url:"https://www.restate.ru/attachment/e42d81bf0c58bdb88b51673e2ed3b3702153d3de/proportional/1600x1600/AF1QipMTkqlsrgHfUeXu33ilViUvYmNMy_PpAL3C96Oi%3Ds1600-w1600"},
				],
				countViewImage:4,
				isAddButtonVisible:true,
			}
		},
		created(){
			this.countViewImage = this.imageList.length;
		},
		methods:
		{
			addCountViewImage()
			{
				if(this.imageList[this.countViewImage+5])
				{
					this.countViewImage += 5;
				}
				else
				{
					this.countViewImage = this.imageList.length;
					this.hideAddButton();
				}
			},
			hideAddButton()
			{
				this.isAddButtonVisible = false;
			}

		}
	}
</script>
<style lang="scss">
	.instagram
	{
		h2
		{
			margin: 0;
			margin-bottom: 32px;
		}
		a{display: block;}
		button
		{
			cursor: pointer;
			height: 47px;
			min-width: 345px;
			width: 100%;
			border:none;
			font-size: 18px;
			border-radius: 8px;
		}
	}
	.instagram__image-list
	{
		display: flex;
		flex-direction: column;
		gap:12px;
		padding: 0;
		margin: 0 auto;
		margin-bottom: 12px;
		width: 346px;
		li{ list-style:none;}
		img
		{
			margin: 0 auto;
			width: 346px;
			height: 346px;
			background: #F5F5F5;
			border-radius: 8px;
		}
	}
	@media (min-width: 768px) {
		.instagram__image-list
		{
			flex-direction: row;
			flex-wrap: wrap;
			width: unset;
			gap: 30px;
			li{width: calc(calc(100%/3) - 20px);}
			img
			{
				width: 100%;
				height: 100%;
			}
			li:nth-of-type(1),
			li:nth-of-type(2)
			{
				width: calc(50% - 15px);
				height: 330px;
			}
		}
	}
	@media (min-width: 1440px)
	{
		.instagram__image-list
		{
			display: grid;
			max-width: unset;
			grid-template-columns: repeat(4, 255px);
			grid-auto-rows: 255px;
			img:nth-of-type(1),
			img:nth-of-type(2),
			img
			{
				width: 100%;
				height: 100%;
			}
			li,
			li:nth-of-type(1),
			li:nth-of-type(2)
			{
				width: unset;
				height: unset;
			}
			li:nth-of-type(1)
			{
				grid-row-start:1;
				grid-row-end:3;
				grid-column-start:1;
				grid-column-end:3;
			}
		}
	}
</style>