<template>
	<header class="header container">
		<Logo />
		<div>
			<Number />
			<Button isInHeader>заполнить анкету</Button>
		</div>
	</header>
</template>
<script>
	import Button from "@/components/Button"
	import Number from "@/components/Number"
	import Logo from "@/components/Logo"
	export default {
		name: 'Header',
		components: {Button, Number, Logo}
	}
</script>

<style lang="scss">
	.header
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 78px;
	}
	@media (min-width: 768px) {
		.header{min-height: 111px;}
		.header div
		{
			display: flex;
			align-items: center;
		}
	}
</style>