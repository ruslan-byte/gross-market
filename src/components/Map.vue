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
		props:{mapData:Object},
		data(){
			return{
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
				console.log("this.mapData.mapOptions", this.mapData.mapOptions);
				this.map = new this.google.maps.Map(document.getElementById('map'), this.mapData.mapOptions);
				this.initMarkers();
			},
			initMarkers()
			{
				const markerImageUrl = "https://i.ibb.co/QNj36yd/Group-37.png"
				let markersCoords = (this.markerFilter === 'all' ) ? [...this.mapData.mapMarkers.markerGroupEntityCoords, ...this.mapData.mapMarkers.markerGroupNaturalPersonCoords]: (this.markerFilter === 'naturalPerson' )? this.mapData.mapMarkers.markerGroupNaturalPersonCoords : this.mapData.mapMarkers.markerGroupEntityCoords;

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