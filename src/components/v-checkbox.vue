<template>
	<label class="v-checkbox" :class="{'error': error}">
		<input
			type="checkbox"
			name="name"
			class="v-checkbox__input"
			:checked="modelValue"
			@input="$emit('update:modelValue', $event.target.checked)"
			@change="$emit('change', value)"
		>
		<div class="v-checkbox__body">
			<span class="v-checkbox__box"></span>
			<span class="v-checkbox__text">
				<slot></slot>
			</span>
		</div>
	</label>
</template>

<script>
	export default {
		name: 'g-input',
		props: {
			modelValue: Boolean,
			error: Boolean,
		}
	}
</script>

<style lang="scss">
	.v-checkbox
	{
		position: relative;
		font-size: 0;
		display: block;
		&.error
		{
			.v-checkbox__input:enabled~.v-checkbox__body .v-checkbox__box,
			.v-checkbox__input:enabled:not(:checked) ~ .v-checkbox__body:hover .v-checkbox__box
			{
				border-color: #E45131;
			}
		}
	}
	.v-checkbox__input
	{
		position: absolute;
		width: 0;
		height: 0;
		top: 0;
		left: 0;
		z-index: -10;
		visibility: hidden;
		opacity: 0;
		&:enabled
		{
			& ~ .v-checkbox__body
			{
				display: flex;
				align-items: center;
				cursor: pointer;
			}
			&:not(:checked)
			{
				& ~ .v-checkbox__body:hover .v-checkbox__box
				{}
			}
			&:checked
			{
				&~ .v-checkbox__body .v-checkbox__box
				{
					background-position: center center;
					background-image: url(/svg/checked.svg);
					background-repeat: no-repeat;
				}
			}
		}
		&:disabled:checked ~ .v-checkbox__body .v-checkbox__box,
		&:disabled:checked ~ .v-checkbox__body .v-checkbox__text
		{
			color: #c2c7cf;
		}
	}
	.v-checkbox__box
	{
		min-width: 24px;
		min-height: 24px;
		display: inline-block;
		vertical-align: top;
		transition: .1s;
		background-color: #F5F5F5;
		border-radius: 8px;
	}
	.v-checkbox__text
	{
		margin-left: 11px;
		font-weight: 500;
		font-size: 14px;
		line-height: 12px;
		color: #000000;
		max-width: 80%;
	}
</style>