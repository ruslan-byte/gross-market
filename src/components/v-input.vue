<template>
	<label class="v-input" :class="{'error': error}">
		<textarea
			v-if="isTextArea"
			:name="name"
			type="text"
			class="v-input__input v-input__input--textarea"
			@input="$emit('input', $event.target.value)"
			@change="$emit('change')"
			:value="value"
			:placeholder="placeholder"
		></textarea>
		<input
			v-else
			:name="name"
			type="text"
			class="v-input__input"
			@input="$emit('input', $event.target.value)"
			@change="$emit('change')"
			:value="value"
			:placeholder="placeholder"
			v-mask="mask"
		/>
		<div class="v-input__sub">{{ errorMsg }}</div>
	</label>
</template>

<script>
export default {
	name: 'v-input',
	props: {
		placeholder: String,
		error: Boolean,
		name: String,
		value: String,
		errorMsg: String,
		isTextArea:
		{
			type: Boolean,
			default: false,
		},
		mask:
		{
			type: String,
			default: '',
		}
	},
};
</script>

<style lang="scss">
	.v-input
	{
		display: inline-block;
		position: relative;
		margin-bottom: 10px;
		&.error
		{
			.v-input__input
			{
				background-color: #FF666630;
			}
			.v-input__sub
			{
				display: block;
			}
		}
	}
	.v-input__input
	{
		font-weight: 500;
		font-size: 18px;
		color: #000000;
		background-color: #F5F5F5;
		border-radius: 8px;
		padding: 0 16px;
		width: 100%;
		height: 47px;
		height: 47px;
		color: #191C21;
		transition: .2s;
		border: 0;
		&::placeholder
		{
			color: #00000030;
		}
		&:focus
		{
			outline: none;
		}
		&--textarea
		{
			font-family: "EuclidCircularB";
			resize: none;
			height: 94px;
			padding: 12px 16px;
		}
	}
	.v-input__sub
	{
		display: none;
		position: absolute;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #FF6666;
		left: 0;
		bottom: -20px;
	}
</style>