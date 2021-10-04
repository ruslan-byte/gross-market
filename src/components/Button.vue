<template>
	<button
		class="button"
		:class="{'button-header': isInHeader, 'button-hide': isScrollInTop && isMobileVersion && isInHeader,'button-white': isWhite}"
		@click="clickEvent"
	>
		<slot></slot>
	</button>
</template>
<script>
	export default {
		name: 'Button',
		props:{
			isInHeader:{
				type:Boolean,
				default:false,
			},
			isWhite:{type:Boolean, default:false}
		},
		data(){
			return{
				isScrollInTop:true,
				isMobileVersion:true,
			}
		},
		created(){
			this.initButton();
			window.addEventListener('resize',() => this.initButton());
		},
		methods:{
			initButton()
			{
				this.isMobileVersion = !!(window.screen.width < 768)
				if(this.isInHeader && this.isMobileVersion)
				{
					let changeIsScrollInTop = () => {
						this.isScrollInTop = (window.pageYOffset < 100)
					}
					window.addEventListener('scroll',() => changeIsScrollInTop());
				}
			},
			clickEvent()
			{
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
	.button
	{
		cursor: pointer;
		background: #FFDF31;
		color:black;
		border-radius: 8px;
		min-height: 43px;
		border:none;
		transition:opacity 0.3s;
		font-family: "EuclidCircularB";
		font-size: 18px;
		padding: 0 16px;
	}
	.button[disabled]{
		background:#F5F5F5;
		cursor: default;
	}
	.button-white{background: white}
	.button-header
	{
		position: fixed;
		z-index: 10;
		left:16px;
		top:8px;
		width: calc(100% - 30px);
	}
	.button-hide
	{
		opacity: 0;
		pointer-events: none;
	}
	@media (min-width: 768px) {
		.button-header
		{
			position: static;
			width: unset;
		}
	}
</style>