<template>
	<div>
		<Header />
		<Instagram />
		<Map />
	</div>
</template>
<script>
	import Header from "@/components/Header"
	import Instagram from "@/components/Instagram"
	import Map from "@/components/Map"
	export default {
		name: 'App',
		components: {Header,Instagram, Map}
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
</style>