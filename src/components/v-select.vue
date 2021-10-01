<template>
	<div class="v-select">
		<div class="v-select__body" @click="toggle()" v-click-outside="closeOptionsList" :class="{'open': isOpen, 'selected': value, 'error': error}">
			<div class="v-select__selected">
					<div class="v-select__selected-name _selected-text" v-if="value" :title="value">{{ value }}</div>
					<div class="v-select__selected-placeholder _selected-text" :title="placeholder">{{ placeholder }}</div>
				<div class="v-select__arrow">
					<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.86595 9.5C6.48105 10.1667 5.5188 10.1667 5.1339 9.5L0.803772 2C0.418872 1.33333 0.899998 0.5 1.6698 0.5L10.3301 0.5C11.0999 0.5 11.581 1.33333 11.1961 2L6.86595 9.5Z" fill="black"/>
					</svg>
				</div>
			</div>
			<div class="v-select__list">
				<ul class="v-select__items">
					<li class="v-select__item" v-for="option, i in options" :key="i" @click="setSelected(option)" :title="option">{{ option }}</li>
				</ul>
			</div>
			<div class="v-seletct__sub">{{ errorMsg }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'v-select',
		props: {
			options: Array,
			error: Boolean,
			value: String,
			name: String,
			title: String,
			errorMsg: String,
			placeholder:
			{
				type: String,
				default: '',
			},
		},
		data()
		{
			return {
				isOpen: false
			};
		},
		methods:
		{
			closeOptionsList()
			{
				this.isOpen = false;
			},
			toggle()
			{
				this.isOpen = !this.isOpen;
			},
			setSelected(val)
			{
				if(val === this.value)
					return;

				this.$emit('input', val);
				this.$emit('change', val);
			}
		},
	}
</script>

<style lang="scss">
	.v-select__body
	{
		position: relative;
		background-color: #F5F5F5;
		border-radius: 8px;
		display: flex;
		align-items: flex-end;
		height: 47px;
		padding: 0 16px;
		cursor: pointer;
		transition: .3s;
		&.open
		{
			border-radius: 4px 4px 0 0;
			.v-select__list
			{
				max-height: 144px;
				overflow-y: auto;
			}
			.v-select__arrow svg
			{
				transform: rotate(180deg);
			}
		}
		&.selected
		{
			.v-select__selected-placeholder
			{
				opacity: 0;
				visibility: hidden;
			}
			.v-select__arrow
			{
				opacity: 1;
			}
		}
		&.error
		{
			background-color: #FF666630;
			.v-seletct__sub
			{
				display: block;
			}
		}
	}
	.v-select__selected{width: 100%;}
	.v-select__selected-name
	{
		position: absolute;
		font-size: 16px;
		letter-spacing: -0.02em;
		color: #1A1C21;
		width: 90%;
		top: 50%;
		transform: translateY(-50%);
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.v-select__arrow
	{
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
		opacity: .3;
		svg
		{
			transition: .3s;
			fill: #ADB4BB;
			height: 9px;
			width: 13px;
		}
	}
	.v-select__items
	{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.v-select__list
	{
		position: absolute;
		overflow-y: hidden;
		background-color: #F5F5F5;
		left: 0;
		top: 100%;
		width: 100%;
		max-height: 0;
		border-radius: 0 0 4px 4px;
		border-top: 0;
		transition: .3s;
		scrollbar-width: none;
		z-index: 1;
		&::-webkit-scrollbar
		{
			width: 0;
			height: 0;
		}
	}
	.v-select__item
	{
		cursor: pointer;
		font-size: 16px;
		line-height: 20px;
		letter-spacing: -0.02em;
		color: #1A1C21;
		padding: 14px 16px;
		border-top: 1px solid #E0E0E0;
	}
	.v-select__selected-placeholder
	{
		position: absolute;
		font-size: 16px;
		line-height: 20px;
		letter-spacing: -0.02em;
		color: #949BA5;
		top: 50%;
		transform: translateY(-50%);
		transition: .1s;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 80%;
	}
	.v-seletct__sub
	{
		display: none;
		position: absolute;
		left: 0;
		bottom: -20px;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #FF6666;
	}
</style>