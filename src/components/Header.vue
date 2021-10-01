<template>
	<header class="header container">
		<div class="header__wr">
			<Logo />
			<div class="header__action">
				<Number />
				<Button isInHeader @click="questionnaireIsOpen = true" >заполнить анкету</Button>
			</div>
		</div>
		<Popup :visible.sync="questionnaireIsOpen" :transparent="true">
			<Questionnaire @close="questionnaireIsOpen = false"/>
		</Popup>
	</header>
</template>
<script>
	import Button from "@/components/Button";
	import Number from "@/components/Number";
	import Logo from "@/components/Logo";
	import Questionnaire from "@/components/Questionnaire";
	export default {
		name: 'Header',
		components:
		{
			Button,
			Number,
			Logo,
			Questionnaire,
		},
		data()
		{
			return {
				questionnaireIsOpen: false,
			}
		},
		methods:
		{
			showPopup()
			{
				this.questionnaireIsOpen = true;
			},
		}
	}
</script>

<style lang="scss">
	.header__wr
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 78px;
	}
	@media (min-width: 768px)
	{
		.header__wr{min-height: 111px;}
		.header__action
		{
			display: flex;
			align-items: center;
		}
	}
</style>