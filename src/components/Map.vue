<template>
	<div class="map container">
		<h2>география</h2>
		<div id="map"></div>
		<div class="map__buttons">
			<Button :isWhite="markerFilter !== 'entity'" @click = "setMarkerFilterAndInitMarkers('entity')">юрлица</Button>
			<Button :isWhite="markerFilter !== 'naturalPerson'" @click = "setMarkerFilterAndInitMarkers('naturalPerson')">физлица</Button>
			<Button :isWhite="markerFilter !== 'all'" @click = "setMarkerFilterAndInitMarkers('all')">показать всё</Button>
		</div>
	</div>
</template>
<script>
	import {Loader} from 'google-maps';
	import Button from '@/components/Button';
	export default
	{
		components:{Button},
		data(){
			return{
				markerGroupNaturalPersonCoords: [
					{lat: 55.7555612, lng: 37.6647919},
					{lat: 55.7455612, lng: 37.6747919},
					{lat: 55.715612, lng: 37.6647919},
					{lat: 55.7255612, lng: 37.5647919},
					{lat: 55.7355612, lng: 37.6647919},
				],
				markerGroupEntityCoords: [
					{lat: 55.7555612, lng: 37.6757919},
					{lat: 55.7555612, lng: 37.5647919},
					{lat: 55.7655612, lng: 37.5847919},
					{lat: 55.7755612, lng: 37.5347919},
					{lat: 55.7855612, lng: 37.5747919},
				],
				markerFilter:'all',
				map:null,
				google:null,
				markersList:[],
			}
		},
		async created()
		{
			const loader =  new Loader('AIzaSyCOoul-3RqzLsJAXBExE72K1lZVIlBtQ5s', {});
			this.google = await loader.load();
			this.initMap();
		},
		methods:
		{
			initMap(){
				this.map = new this.google.maps.Map(document.getElementById('map'), {
					center: {lat: 55.7488401, lng: 37.6110285},
					zoom: 12,
					zoomControl: true,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
					fullscreenControl: false
				});
				this.initMarkers();
			},
			initMarkers()
			{
				const markerImageUrl = "https://i.ibb.co/QNj36yd/Group-37.png"
				let markersCoords = (this.markerFilter === 'all' ) ? [...this.markerGroupEntityCoords, ...this.markerGroupNaturalPersonCoords]: (this.markerFilter === 'naturalPerson' )? this.markerGroupNaturalPersonCoords : this.markerGroupEntityCoords;
				this.markersList.forEach((marker)=> marker.setMap(null))
				for(let markerCoord of markersCoords)
				{
					let marker = new this.google.maps.Marker({
						position: markerCoord,
						map: this.map,
						icon: markerImageUrl,
					});
					this.markersList.push(marker);
				}
			},
			setMarkerFilterAndInitMarkers(newValueMarkerFilter)
			{
				if(this.markerFilter !== newValueMarkerFilter)
				{
					this.markerFilter = newValueMarkerFilter;
					this.initMarkers();
				}
			}
		}
	}
</script>
<style lang="scss">
	.container.map
	{
		margin-bottom: 30px;
		padding: 0;
	}
	#map
	{
		margin-bottom: 100px;
		min-height: 600px;
	}
	.map{ position: relative;}
	.map__buttons
	{
		position:absolute;
		left:15px;
		top:423px;
		z-index: 1000;
		button
		{
			display: block;
			margin-bottom: 8px;
		}
	}
	div[aria-label="Map" ]> div:first-of-type > div:last-child{filter:grayscale(1);}
	@media(min-width: 768px)
	{
		.map__buttons{left:39px;}
	}
	@media(min-width: 1110px)
	{
		.container.map{	padding: 0 39px;}
		.map__buttons{left:63px;}
	}

</style>