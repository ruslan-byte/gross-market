<template>
	<div class="questionnaire">
		<div class="questionnaire__header">
			<div class="container">
				<div class="questionnaire__header-wr">
					<Logo />
					<div class="questionnaire__header-close-btn" @click="closeHandler()">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.9436 18.6291C19.527 18.0406 19.5225 17.0905 18.9337 16.5074L13.4129 11.0401C12.8241 10.457 12.8196 9.50692 13.403 8.91835L18.8675 3.40452C19.4506 2.81613 19.4464 1.86644 18.858 1.28328L18.6292 1.05641C18.0406 0.473046 17.0905 0.477466 16.5074 1.06628L11.0439 6.58329C10.4609 7.17195 9.51114 7.17655 8.92252 6.59357L3.4023 1.1263C2.8157 0.545324 1.8699 0.547604 1.2861 1.1314L1.06537 1.35213C0.477747 1.93975 0.479857 2.89313 1.07007 3.47814L6.59012 8.94951C7.17831 9.53252 7.18273 10.4819 6.59998 11.0703L1.12619 16.5977C0.54527 17.1843 0.547571 18.1301 1.13134 18.7138L1.35219 18.9347C1.93979 19.5223 2.89312 19.5202 3.47814 18.93L8.95482 13.4053C9.53804 12.8169 10.4878 12.8128 11.0761 13.396L16.5955 18.8673C17.1838 19.4505 18.1336 19.4463 18.7168 18.8579L18.9436 18.6291Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
		<div class="questionnaire__body">
			<div class="container" v-if="!isSuccess">
				<h1 class="g-title-1">Работа твоей мечты</h1>
				<div class="questionnaire__wr">
					<form class="questionnaire__form" @submit.prevent="submit()">
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner">
								<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': !form.vacancy.error}">{{ form.vacancy.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<vSelect
									:placeholder="form.vacancy.placeholder"
									:errorMsg="form.vacancy.errorMsg"
									v-model="form.vacancy.v"
									@change="formFieldsChangeHandler('vacancy')"
									:error="$v.form.vacancy.v.$error"
									:options="form.vacancy.options"
								/>
							</div>
						</div>
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner">
								<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': !form.fio.error}">{{ form.fio.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<vInput
									:placeholder="form.fio.placeholder"
									:errorMsg="form.fio.errorMsg"
									v-model="form.fio.v"
									@change="formFieldsChangeHandler('fio')"
									:error="$v.form.fio.v.$error"
								/>
							</div>
						</div>
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner questionnaire__row-inner--small">
							<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': !form.phone.error}">{{ form.phone.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<vPhoneInput
									:placeholder="form.phone.placeholder"
									:errorMsg="form.phone.errorMsg"
									v-model="form.phone.v"
									@change="formFieldsChangeHandler('phone')"
									:error="$v.form.phone.v.$error"
								/>
							</div>
							<div class="questionnaire__row-inner questionnaire__row-inner--small">
							<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': form.email.v}">{{ form.email.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<vInput
									:placeholder="form.email.placeholder"
									v-model="form.email.v"
								/>
							</div>
						</div>
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner questionnaire__row-inner--small">
								<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': !form.date.error}">{{ form.date.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<vInput
									:placeholder="form.date.placeholder"
									:errorMsg="form.date.errorMsg"
									v-model="form.date.v"
									@change="formFieldsChangeHandler('date')"
									:error="$v.form.date.v.$error"
									:mask="form.date.mask"
								/>
							</div>
							<div class="questionnaire__row-inner questionnaire__row-inner--small">
								<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': form.sex.v}">{{ form.sex.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<div class="questionnaire__row-radio">
									<vRadio
										v-model="form.sex.v"
										@change="formFieldsChangeHandler('sex')"
										:val="'мужской'"
										:text="'мужской'"
									/>
									<vRadio
										v-model="form.sex.v"
										@change="formFieldsChangeHandler('sex')"
										:val="'женский'"
										:text="'женский'"
									/>
								</div>
							</div>
						</div>
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner">
								<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': form.resume.v || form.file.v.name }">{{ form.resume.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
								<vInput
									:placeholder="form.resume.placeholder"
									v-model="form.resume.v"
									:isTextArea="true"
								/>
								<vFileInput v-model="form.file.v"/>
							</div>
						</div>
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner">
								<p class="questionnaire__row-title">{{ form.recaptcha.title }}</p>
								<div class="questionnaire__recaptcha">
									<label class="questionnaire__recaptcha-body">
										<vCheckbox
											v-model="form.recaptcha.v"
											:error="$v.form.recaptcha.v.$error"
										>
										{{ form.recaptcha.placeholder }}
										</vCheckbox>
										<img src="/img/recaptcha.png" alt="" class="questionnaire__recaptcha-icon">
									</label>
									<div class="questionnaire__recaptcha-msg">{{ form.recaptcha.errorMsg }}</div>
								</div>
							</div>
						</div>
						<div class="questionnaire__row">
							<div class="questionnaire__row-inner">
								<vCheckbox
									v-model="form.personal.v"
									:error="$v.form.personal.v.$error"
									@change="formFieldsChangeHandler('personal')"
								>
								{{ form.personal.placeholder }}
								</vCheckbox>
							</div>
						</div>
						<button class="questionnaire__btn" :disabled="form.personal.error">отправить</button>
					</form>
					<div class="questionnaire__info">
						<h2 class="g-title-2" v-if="purpose.title">{{ purpose.title }}</h2>
						<p class="questionnaire__info-abs" v-for="text, i in purpose.texts" :key="i">{{ text }}</p>
						<a class="questionnaire__info-phone" :href="'tel:' + purpose.phone">{{ purpose.phone }}</a>
					</div>
				</div>
			</div>
			<div class="questionnaire__body container" v-else>
				<h1 class="g-title-1">Ждем тебя!</h1>
				<div class="questionnaire__wr">
					<div class="questionnaire__info">
						<p class="questionnaire__info-abs">В 2020 году самыми востребованными умениями и качествами на рынке труда станут:</p>
						<p class="questionnaire__info-quote">Умение ставить цели, планировать свое время, инициативность, настойчивость, высокая мотивация, умение эффективно общаться, любознательность. </p>
						<p class="questionnaire__info-abs">А профессиональным навыкам можно научить любого человека.</p>
					</div>
					<div class="questionnaire__info">
						<h2 class="g-title-2">Остались вопросы?</h2>
						<a class="questionnaire__info-phone" :href="'tel:' + purpose.phone">{{ purpose.phone }}</a>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import { required } from 'vuelidate/lib/validators'
	import validator from '@/services/validator.js';
	import vInput from '@/components/v-input.vue';
	import vSelect from '@/components/v-select.vue';
	import vRadio from '@/components/v-radio.vue';
	import vFileInput from '@/components/v-file-input.vue';
	import vPhoneInput from '@/components/v-phone-input.vue';
	import vCheckbox from '@/components/v-checkbox.vue';
	import Footer from "@/components/Footer";
	import Logo from "@/components/Logo";
	import axios from "axios";
	export default {
		name: 'Questionnaire',
		props:
		{
			msg: String
		},
		data()
		{
			return {
				form:
				{
					vacancy:
					{
						v: '',
						title: 'Вакансия *',
						placeholder: 'товаровед',
						errorMsg: 'поле заполнено не корректно',
						options: ['товаровед', 'водитель', 'пекарь', 'кассир', 'продавец', 'повар', 'приёмщик'],
						error: true,
					},
					fio:
					{
						v: '',
						title: 'ФИО *',
						placeholder: '',
						errorMsg: 'поле заполнено не корректно',
						error: true,
					},
					phone:
					{
						v: '',
						title: 'Контактый телефон *',
						placeholder: '+7 (',
						errorMsg: 'поле заполнено не корректно',
						error: true,
					},
					email:
					{
						v: '',
						title: 'Электронная почта',
						placeholder: 'example@mail.com',
						errorMsg: 'поле заполнено не корректно',
						error: true,
					},
					sex:
					{
						v: '',
						title: 'Пол',
						error: true,
					},
					file:
					{
						v: new File([0], ['']),
					},
					resume:
					{
						v: '',
						title: 'Резюме',
					},
					date:
					{
						v: '',
						title: 'Дата рождения *',
						mask: '##.##.####',
						error: true,
						placeholder: '28.07.2002',
					},
					personal:
					{
						v: false,
						placeholder: 'я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *',
						error: true,
					},
					recaptcha:
					{
						v: false,
						placeholder: 'я не робот',
						title: 'Капча',
						errorMsg: '* поля для обязательного заполнения'
					},
				},
				purpose:
				{
					title: 'Наша суперцель ',
					texts:
					[
						'— стать любимым магазином для каждой российской семьи.',
						'Сотни тысяч наших сотрудников ежедневно работают над её достижением.',
						'Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.',
					],
					phone: '+7 (926) 433-14-16',
				},
				isSuccess: false
			}
		},
		components:
		{
			vInput,
			vPhoneInput,
			vSelect,
			vRadio,
			vFileInput,
			vCheckbox,
			Footer,
			Logo,
		},
		validations:
		{
			form:
			{
				vacancy:
				{
					v:
					{
						required
					}
				},
				fio:
				{
					v:
					{
						required
					}
				},
				phone:
				{
					v:
					{
						required,
						phone: validator.phone,
					}
				},
				date:
				{
					v:
					{
						required,
						stringDate: validator.StringDate
					}
				},
				personal:
				{
					v:
					{
						checked: validator.checked,
					}
				},
				recaptcha:
				{
					v:
					{
						checked: validator.checked,
					}
				}
			},
		},
		methods:
		{
			submit()
			{
				this.$v.form.$touch();
				if(!this.$v.form.$error)
				{
					this.isSuccess = true;
					this.sendFromData();
				}
			},
			getDataInFormData()
			{
				let formData = new FormData();
				for(let formPlace in this.form)
				{
					formData.append(formPlace,this.form[formPlace].v)
				}
				return formData
			},
			sendFromData()
			{
				let formData = this.getDataInFormData();
				axios.post("http://localhost:3000/anketa",formData)
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			formFieldsChangeHandler(field)
			{
				this.$v.form[field].v.$touch();
				this.form[field].error = this.$v.form[field].v.$error;
			},
			getFormatedPhoneLink(phone)
			{
				return `tel:${phone}`;
			},
			closeHandler()
			{
				this.$emit('close');
			}
		},
	}
</script>

<style lang="scss">
	.questionnaire
	{
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: auto;
		.g-title-1
		{
			margin-bottom: 51px;
		}
		.footer
		{
			flex: 0 0 auto;
		}
	}
	.questionnaire__body
	{
		flex: 1 0 auto;
	}
	.questionnaire__btn
	{
		background-color: #FFDF31;
		border-radius: 8px;
		height: 47px;
		font-weight: 500;
		font-size: 18px;
		line-height: 47px;
		border: 0;
		color: #000;
		padding: 0 10px;
		width: 100%;
		cursor: pointer;
		transition: .1s;
		&:disabled
		{
			background-color: #F5F5F5;
		}
	}
	.questionnaire__row
	{
		margin-bottom: 30px;
		.v-input
		{
			display: flex;
			width: 100%;
		}
	}
	.questionnaire__row-inner
	{
		width: 100%;
	}
	.questionnaire__row-title
	{
		position: relative;
		display: block;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #000000;
		margin: 0 0 12px;
		svg
		{
			opacity: 0;
			visibility: hidden;
			transition: .3s;
			position: absolute;
			margin-left: 15px;
		}
		&--is-checked
		{
			svg
			{
				opacity: 1;
				visibility: visible;
			}
		}
	}
	.questionnaire__row-radio
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 0;
		.v-radio
		{
			width: calc(50% - 16px);
		}
	}
	.questionnaire__recaptcha
	{
		display: flex;
		align-items: center;
	}
	.questionnaire__recaptcha-body
	{
		position: relative;
		display: flex;
		align-items: center;
		background-color: #F5F5F5;
		border-radius: 8px;
		height: 47px;
		padding: 0 16px;
		margin-right: auto;
		width: calc(50% - 30px);
		.v-checkbox__box
		{
			background-color: #fff;
		}
	}
	.questionnaire__recaptcha-icon
	{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 16px;
		width: 24px;
		height: 24px;
	}
	.questionnaire__recaptcha-msg
	{
		width: calc(50% - 30px);
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #00000030;
	}
	.questionnaire__form
	{
		margin-bottom: 72px;
	}
	.questionnaire__info-abs
	{
		font-weight: 500;
		font-size: 18px;
		line-height: 23px;
		color: #000000;
		margin: 0 0 32px;
	}
	.questionnaire__info-phone
	{
		display: block;
		font-weight: 500;
		font-size: 24px;
		color: #000000;
		line-height: 73px;
		height: 73px;
		text-align: center;
		background-color: #F5F5F5;
		border-radius: 8px;
		text-decoration: none;
	}
	.questionnaire__wr
	{
		margin-bottom: 48px;
	}
	.questionnaire__header
	{
		flex: 0 0 auto;
		background-color: #F5F5F5;
		margin-bottom: 48px;
	}
	.questionnaire__header-wr
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 78px;
	}
	.questionnaire__info-quote
	{
		position: relative;
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #000000;
		margin: 0 0 24px;
		padding-left: 15px;
		&:after
		{
			content: '';
			position: absolute;
			width: 3px;
			height: 100%;
			left: 0;
			top: 0;
			background-color: #FFDF31;
		}
	}
	.questionnaire__header-close-btn
	{
		cursor: pointer;
	}
	@media (min-width: 768px)
	{
		.questionnaire__row-inner
		{
			&--small
			{
				width: calc(50% - 15px);
			}
		}
		.questionnaire__row
		{
			display: flex;
			justify-content: space-between;
		}
		.questionnaire__header-wr
		{
			min-height: 111px;
		}
	}
	@media (min-width: 1440px)
	{
		.questionnaire__wr
		{
			display: flex;
			justify-content: space-between;
		}
		.questionnaire__form
		{
			width: 540px;
		}
		.questionnaire__info
		{
			width: 445px;
		}
		.questionnaire__header-wr
		{
			min-height: 105px;
		}
	}
</style>