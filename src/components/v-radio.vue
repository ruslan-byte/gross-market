<template>
	<label class="v-radio">
		<input
			class="v-radio__input"
			type="radio"
			:value="val"
			@input="$emit('input', val)"
			@change="$emit('change')"
			:checked="value === val"
		>
		<div class="v-radio__body">
			<div class="v-radio__box"></div>
			<slot></slot>
			<div class="v-radio__text" v-if="text">{{ text }}</div>
		</div>
	</label>
</template>

<script>
export default {
	name: 'v-radio',
	props: {
		val: String,
		value: String,
		text: String
	},
}
</script>

<style lang="scss">
	.v-radio
	.v-radio__input
	{
		display: none;
		&:checked
		{
			& + .v-radio__body .v-radio__box
			{
				&:after
				{
					background-color: #000;
				}
			}
		}
	}
	.v-radio__body
	{
		display: flex;
		align-items: center;
	}
	.v-radio__box
	{
		position: relative;
		min-width: 24px;
		height: 24px;
		background-color: #F5F5F5;
		border-radius: 50%;
		margin-right: 12px;
		&:after
		{
			content: '';
			position: absolute;
			width: 10px;
			height: 10px;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			transition: .1s;
			background-color: transparent;
		}
	}
</style>