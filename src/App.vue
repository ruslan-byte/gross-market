<template>
	<div>
		<Header />
		<Instagram />
		<Map />
		<InformationPopup />
	</div>
</template>
<script>
	import Header from "@/components/Header"
	import Instagram from "@/components/Instagram"
	import Map from "@/components/Map"
	import InformationPopup from "@/components/InformationPopup"
	export default {
		name: 'App',
		components: {Header,Instagram, Map,InformationPopup}
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
	@font-face
	{
		font-family: 'EuclidCircularB';
		src: url('./assets/fonts/EuclidCircularB-Regular.ttf');
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}
</style>