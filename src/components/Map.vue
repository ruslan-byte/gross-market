<template>
	<div class="map container">
		<h2>география</h2>
		<div id="map"></div>
		<div class="map__buttons">
			<Button :isWhite="isOnlyNaturalPersonMarkersActive" @click = "activateThisMarkers(true,false)">юрлица</Button>
			<Button :isWhite="isOnlyEntityMarkersActive" @click = "activateThisMarkers(false,true)">физлица</Button>
			<Button :isWhite="isAllMarkersActive" @click = "activateThisMarkers(true,true)">показать всё</Button>
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
				isOnlyNaturalPersonMarkersActive:false,
				isOnlyEntityMarkersActive:false,
				isAllMarkersActive:true,
				map:null,
				google:null,
				markersList:[],
			}
		},
		async created()
		{
			const loader =  new Loader('AIzaSyCOoul-3RqzLsJAXBExE72K1lZVIlBtQ5s', {});
			this.google = await loader.load();
			this.mapInit();
		},
		methods:
		{
			mapInit(){
				this.map = new this.google.maps.Map(document.getElementById('map'), {
					center: {lat: 55.7488401, lng: 37.6110285},
					zoom: 12,
					mapId: "cd3c365a0cad08c2",
					zoomControl: true,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
					fullscreenControl: false
				});
				this.markerInit();
			},
			markerInit()
			{
				const markerImageUrl = "https://i.ibb.co/QNj36yd/Group-37.png"
				let markersCoords = (this.isAllMarkersActive)?[...this.markerGroupEntityCoords, ...this.markerGroupNaturalPersonCoords]:(this.isOnlyNaturalPersonMarkersActive)?this.markerGroupNaturalPersonCoords : this.markerGroupEntityCoords;
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
			activateThisMarkers(naturalPersonMarkersState, entityMarkersState)
			{
				if(naturalPersonMarkersState && entityMarkersState)
				{
					this.isAllMarkersActive = true;
					this.isOnlyNaturalPersonMarkersActive = false;
					this.isOnlyEntityMarkersActive = false;
				}
				else
				{
					this.isAllMarkersActive=false;
					this.isOnlyNaturalPersonMarkersActive = naturalPersonMarkersState;
					this.isOnlyEntityMarkersActive = entityMarkersState;
				}
				this.markerInit();
			}
		}
	}
</script>
<style lang="scss">
	.container.map{margin-bottom: 30px;}
	#map
	{
		margin-bottom: 100px;
		min-height: 540px;
	}
	.map
	{
		position: relative;
		border-radius: 8px;
	}
	.map__buttons
	{
		position:absolute;
		left:60px;
		top:400px;
		z-index: 1000;
		button
		{
			display: block;
			margin-bottom: 8px;
		}
	}
</style>