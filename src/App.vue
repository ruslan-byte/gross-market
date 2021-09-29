<template>
	<div>
		<Header />
		<Instagram />
	</div>
</template>
<script>
	import Header from "@/components/Header"
	import Instagram from "@/components/Instagram"
	export default {
		name: 'App',
		components: {Header,Instagram}
	}
</script>

<style lang="scss">
	body{margin: 0;}
	@font-face
	{
		font-family: 'EuclidCircularB';
		src: url('./assets/fonts/EuclidCircularB-Medium.ttf');
		font-weight: 500;
		font-style: normal;
		font-display: swap;
	}
	body
	{
		font-family: "EuclidCircularB";
		font-weight: 500;
		margin: 0;
	}
</style>