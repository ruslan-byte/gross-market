<template>
	<header class="header container">
		<div class="header__wr">
			<Logo />
			<div class="header__action">
				<Number />
				<Button isInHeader @click="showPopup">заполнить анкету</Button>
			</div>
		</div>
	</header>
</template>
<script>
	import Button from "@/components/Button";
	import Number from "@/components/Number";
	import Logo from "@/components/Logo";
	export default {
		name: 'Header',
		components:
		{
			Button,
			Number,
			Logo,
		},
		methods:
		{
			showPopup()
			{
				this.$emit('showPopup')
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