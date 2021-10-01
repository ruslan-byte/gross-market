<template>
	<div
		class="information-popup"
		ref="infoPopup"
		tabindex="0"
		@keyup.esc="closePopup"
	>
		<div class="information-popup__header" :class="{'information-popup__header-active': !isPopupScroling}">
			<div class="information-popup__close" @click="closePopup">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19 1L1 19" stroke="black" stroke-width="2"/>
					<path d="M19 19L1 1" stroke="black" stroke-width="2"/>
				</svg>
			</div>
			<h2>Обработка данных</h2>
		</div>

		<div class="information-popup__content" :class="{'information-popup__content-scroll': !isPopupScroling}">
			<h3>1. Что регулирует настоящая политика конфиденциальности</h3>
			<p>
				Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»),которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе входящие в однугруппу с ООО «Гросс маркет» (далее - «Гросс маркет»), могут получить о Вас впроцессе использования Вами любых сайтов, программ, продуктов и/или сервисов Гросс маркет (далее вместе  «Сервисы»), информацию о которых Гросс маркет может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Гросс маркет или службами такси). В таких случаях передача Персональной информации возможна только в случаях, установленных применимым законодательством, и осуществляется на основании специальных договоров между Гросс маркет и каждым из Партнеров.

				Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может регулироваться дополнительными условиями, которые могут вносить в настоящую Политику изменения и/или дополнения, и/или иметь специальные условия в отношении персональной информации, размещенные в соответствующих разделах документов для таких Сайтов /или Сервисов.
			</p>
			<h3>2. Кто обрабатывает информацию</h3>
			<p>
				Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.
			</p>
			<h3>3. Какова цель данной Политики</h3>
			<p>
				Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.
			</p>
			<h3>
				4. Какую Персональную информацию о Вас собирает Гросс маркет
			</h3>
			<p>
				Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'information-popup',
		data(){
			return{
				isPopupScroling:true,
			}
		},
		watch:{
			visibily(){ this.isPopupScroling = true }
		},
		mounted(){
			let changeisPopupScroling = () => {
				this.isPopupScroling = ( this.$refs.infoPopup.scrollTop < 100 )
			}
			this.$refs.infoPopup.addEventListener('scroll',() => changeisPopupScroling());
		},
		updated(){
			if(this.$refs.infoPopup)
			{
				this.$refs.infoPopup.focus()
				let changeisPopupScroling = () => {
					this.isPopupScroling = ( this.$refs.infoPopup.scrollTop < 100 )
				}
				this.$refs.infoPopup.removeEventListener('scroll',() => changeisPopupScroling());
				this.$refs.infoPopup.addEventListener('scroll',() => changeisPopupScroling());
			}
		},
		methods:{
			closePopup(){
				this.$emit('close');
			}
		}
	}
</script>
<style lang="scss">
	.information-popup
	{
		position: fixed;
		left:0;
		top: 0;
		z-index: 1000;
		width: calc(100vw - 28px) ;
		min-height: 100vh;
		background: white;
		z-index: 1000;
		padding: 0 14px;
		height: 100%;
		overflow: auto;
		h2
		{
			font-size: 48px;
			font-weight: 500;
			line-height: 44px;
			margin: 0;
		}
		h3
		{
			font-size: 18px;
			font-weight: 500;
		}
		p
		{
			font-size: 14px;
			font-weight: 400;
			line-height: 22px;
		}
	}
	.information-popup__content-scroll{padding-top: 180px;}
	.information-popup__close
	{
		position: absolute;
		right: 35px;
		top:27px;
	}
	.information-popup__header
	{
		padding-top: 72px;
		padding-bottom: 32px;
	}
	.information-popup__header-active
	{
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items:center;
		padding: 0 16px;
		position: fixed;
		top:0;
		left:0;
		width: calc(100% - 32px);
		background:white;
		height: 72px;
		h2
		{
			font-size: 24px;
			font-weight: 500;
			line-height: 72px;
			align-items: middle;
			padding:0 14px;
		}
		.information-popup__close{position:static;}
	}
</style>