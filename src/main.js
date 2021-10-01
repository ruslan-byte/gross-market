import Vue from 'vue';
import App from './App.vue';
import Popup from '@/plugins/popup/index.js';
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask';



Vue.config.productionTip = false;

Vue.directive('click-outside', {
	bind: function (el, binding, vnode)
	{
		el.clickOutsideEvent = function (event)
		{
			if (!(el == event.target || el.contains(event.target)))
			{
				vnode.context[binding.expression](event);
			}
		};
		setTimeout( () =>
		{
			document.body.addEventListener('click', el.clickOutsideEvent);
		});
	},
	unbind:function (el)
	{
		document.body.removeEventListener('click', el.clickOutsideEvent);
	},
});
Vue.use(Popup);
Vue.use(Vuelidate);
Vue.use(VueMask);

new Vue({
	render: h => h(App),
}).$mount('#app');