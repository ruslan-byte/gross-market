<template>
	<transition name="popup-fade">
		<div class="popup-overlay" :class="{'popup-overlay--transparent': transparent}" v-if="visible" ref="popup" @keydown.esc="close" tabindex="1">
			<div v-click-outside="close">
				<slot></slot>
			</div>
		</div>
	</transition>
</template>
<script>
	export default
	{
		name: 'Popup',
		props:
		{
			visible:
			{
				type: Boolean,
				default: false
			},
			transparent:
			{
				type: Boolean,
				default: false,
			}
		},
		methods:
		{
			close()
			{
				this.$emit('update:visible', false);
			},
			keyup(event)
			{
				if (event.keyCode === 27)
					this.close();
			}
		},
		mounted()
		{
			if (this.visible)
			{
				document.body.appendChild(this.$el);
			}
		},
		created()
		{
			document.addEventListener('keyup', this.keyup);
		},
		destroyed()
		{
			if (this.$el && this.$el.parentNode)
				this.$el.parentNode.removeChild(this.$el);
			document.removeEventListener('keyup', this.keyup);
		},
		watch:
		{
			visible: function()
			{
				this.visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
			}
		}
	};
</script>
<style lang="scss">
	.popup-overlay
	{
		background-color: #00000040;
		position: fixed;
		top:0px;
		left:0px;
		width:100%;
		height: 100%;
		overflow: auto;
		z-index: 1000;
		/*&--transparent
		{
			background-color: transparent;
		}*/
	}
</style>