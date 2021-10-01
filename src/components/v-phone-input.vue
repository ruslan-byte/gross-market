<template>
	<label class="v-input" :class="{'error': error}">
		<input
			:name="name"
			type="text"
			class="v-input__input"
			:value="value"
			:placeholder="placeholder"
			@input="onPhoneInput"
			@change="$emit('change')"
			@keydown="onPhoneKeyDown"
			:maxlength="maxLenght"
		/>
		<div class="v-input__sub">{{ errorMsg }}</div>
	</label>
</template>

<script>
export default {
	name: 'v-phone-input',
	props: {
		placeholder: String,
		error: Boolean,
		name: String,
		value: String,
		errorMsg: String,
	},
	data()
	{
		return {
			maxLenght: 18,
		};
	},
	methods:
	{
		onChange(value)
		{
			this.$emit('input', value)
		},
		onPhoneKeyDown(e)
		{
			let inputValue = e.target.value.replace(/\D/g, '');
			if (e.keyCode === 8 && inputValue.length === 1) this.onChange('');
		},
		onPhoneInput(e)
		{
			let input = e.target;
			let inputNumbersValue = this.getInputNumbersValue(input);
			let selectionStart = input.selectionStart;
			let formattedInputValue = '';

			if (!inputNumbersValue) return this.onChange('');

			if (input.value.length !== selectionStart)
			{
				if (e.data && /\D/g.test(e.data))
					this.onChange(inputNumbersValue);
				return;
			}

			if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1)
			{
				if (inputNumbersValue[0] === '9')
					inputNumbersValue = '7' + inputNumbersValue;

				let firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';

				formattedInputValue = firstSymbols + ' ';
				if (inputNumbersValue.length > 1)
				{
					formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
				}
				if (inputNumbersValue.length >= 5)
				{
					formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
				}
				if (inputNumbersValue.length >= 8)
				{
					formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
				}
				if (inputNumbersValue.length >= 10)
				{
					formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
				}
			}
			else
				formattedInputValue = '+' + inputNumbersValue.substring(0, 16);

			if (formattedInputValue[0] === '+' && formattedInputValue[1] === '7')
				this.maxLenght = 18;

			else if(formattedInputValue[0] === '8')
				this.maxLenght = 17;

			else this.maxLenght = 18;

			this.onChange(formattedInputValue);
		},
		getInputNumbersValue(input)
		{
			return input.value.replace(/\D/g, '');
		},
		onPhonePaste(e)
		{
			let input = e.target;
			let inputNumbersValue = this.getInputNumbersValue(input);
			let pasted = e.clipboardData || window.clipboardData;

			if (pasted)
			{
				let pastedText = pasted.getData('Text');
				if (/\D/g.test(pastedText))
				{
					this.onChange(inputNumbersValue);
				}
			}
		},
	},
};
</script>

<style lang="scss"></style>