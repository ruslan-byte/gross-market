<template>
	<label class="v-file-input">
		<input class="v-file-input__input" type="file" @change="changeHandler">
		<div class="v-file-input__icon">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.3">
				<path d="M17 5V17C17 19.757 14.757 22 12 22C9.243 22 7 19.757 7 17V5C7 3.346 8.346 2 10 2C11.654 2 13 3.346 13 5V14C13 14.551 12.551 15 12 15C11.449 15 11 14.551 11 14V6H9V14C9 15.657 10.343 17 12 17C13.657 17 15 15.657 15 14V5C15 2.239 12.761 0 10 0C7.239 0 5 2.239 5 5V17C5 20.866 8.134 24 12 24C15.866 24 19 20.866 19 17V5H17Z" fill="black"/>
				</g>
			</svg>
		</div>
		<span class="v-file-input__text" v-if="value.name">{{ value.name }}</span>
		<span class="v-file-input__text v-file-input__text--placeholder" v-else>{{ placeholder }}</span>
	</label>
</template>

<script>
	export default {
		name: 'v-file-input',
		props:
		{
			placeholder:
			{
				type: String,
				default: 'выберете или перетащите файл',
			},
			value: File,
		},
		data()
		{
			return {}
		},
		components:
		{},
		methods:
		{
			changeHandler({target})
			{
				this.$emit('input', target.files[0])
			}
		},
		mounted()
		{},
		computed:
		{},
	}
</script>

<style lang="scss">
	.v-file-input
	{
		display: flex;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 8px;
		padding: 0 21px;
		height: 47px;
		cursor: pointer;
	}
	.v-file-input__input
	{
		display: none;
	}
	.v-file-input__text
	{
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #000;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 80%;
		&--placeholder
		{
			color: #00000030;
		}
	}
	.v-file-input__icon
	{
		display: flex;
		margin-right: 17px;
	}
</style>
