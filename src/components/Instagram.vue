<template>
	<div class="instagram container">
		<h2>мы в инстаграме</h2>
		<div class="instagram__image-list">
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
			<img>
		</div>
	</div>
</template>
<script>
	export default
	{

	}
</script>
<style>
	.instagram__image-list
	{
		display: flex;
		flex-direction: column;
		gap:12px;
	}
	.instagram__image-list img
	{
		margin: 0 auto;
		width: 346px;
		height: 346px;
		background: #F5F5F5;
		border-radius: 8px;
	}
	@media (min-width: 768px) {
		.instagram__image-list
		{
			flex-direction: row;
			flex-wrap: wrap;
			gap:30px;
		}
		.instagram__image-list img
		{
			margin: 0;
			width: 210px;
			height: 210px;
		}
		.instagram__image-list img:nth-of-type(1),
		.instagram__image-list img:nth-of-type(2)
		{
			width: 330px;
			height: 330px;
			flex-basis: 50%
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
		}
		.instagram__image-list img:nth-of-type(1),
		.instagram__image-list img:nth-of-type(2),
		.instagram__image-list img
		{
			width: 100%;
			height: 100%;
		}
		.instagram__image-list img:nth-of-type(1)
		{
			grid-row-start:1;
			grid-row-end:3;
			grid-column-start:1;
			grid-column-end:3;
		}
	}
</style>