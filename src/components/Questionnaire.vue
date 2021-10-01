<template>
	<div class="questionnaire">
		<div class="container">
			<h1 class="g-title-1">Работа твоей мечты</h1>
			<form @submit.prevent="submit()">
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
					<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': !form.email.error}">{{ form.email.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
						<vInput
							:placeholder="form.email.placeholder"
							:errorMsg="form.email.errorMsg"
							v-model="form.email.v"
							@change="formFieldsChangeHandler('email')"
							:error="$v.form.email.v.$error"
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
						<p class="questionnaire__row-title" :class="{'questionnaire__row-title--is-checked': !form.sex.error}">{{ form.sex.title }} <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="#10C300" stroke-width="2" stroke-linecap="round"/></svg></p>
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
						<p class="questionnaire__row-title">{{ form.resume.title }}</p>
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
						>
						{{ form.personal.placeholder }}
						</vCheckbox>
					</div>
				</div>
				<button class="questionnaire__btn">отправить</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { required, email } from 'vuelidate/lib/validators'
	import validator from '@/services/validator.js';
	import vInput from '@/components/v-input.vue';
	import vSelect from '@/components/v-select.vue';
	import vRadio from '@/components/v-radio.vue';
	import vFileInput from '@/components/v-file-input.vue';
	import vPhoneInput from '@/components/v-phone-input.vue';
	import vCheckbox from '@/components/v-checkbox.vue';

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
						placeholder: 'я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *'
					},
					recaptcha:
					{
						v: false,
						placeholder: 'я не робот',
						title: 'Капча',
						errorMsg: '* поля для обязательного заполнения'
					},
				}
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
				email:
				{
					v:
					{
						required,
						email,
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
				sex:
				{
					v:
					{
						required,
					}
				},
				date:
				{
					v:
					{
						required,
						stringDate: validator.StringDate
					}
				}
			},
		},
		methods:
		{
			submit()
			{
				this.$v.form.$touch();
			},
			formFieldsChangeHandler(field)
			{
				this.$v.form[field].v.$touch();
				this.form[field].error = this.$v.form[field].v.$error;
			},
		},
		mounted()
		{},
		computed:
		{},
	}
</script>

<style lang="scss">
	.questionnaire
	{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: auto;
		.g-title-1
		{
			margin-bottom: 51px;
		}
	}
	.questionnaire__btn
	{
		background-color: #F5F5F5;
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
	}
	.questionnaire__row
	{
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		.v-input
		{
			display: flex;
			width: 100%;
		}
	}
	.questionnaire__row-inner
	{
		width: 100%;
		&--small
		{
			width: calc(50% - 15px);
		}
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
		.v-radio
		{
			width: calc(50% - 16px);
		}
	}
	.questionnaire__recaptcha
	{
		display: flex;
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
		width: calc(50% - 15px);
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
		width: calc(50% - 15px);
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		color: #00000030;
	}
</style>
