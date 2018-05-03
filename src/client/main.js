import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import VueMDCAdapter from 'vue-mdc-adapter'
import messages from './messages/messages';
import routes from './routes.js';
import './theme.scss';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueI18n);
Vue.use(VueMDCAdapter);

const lang = 'zh';

const i18n = new VueI18n({
    locale: lang,
    messages,
});

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
    el: '#app',
    i18n,
    components: { App },
    router,
    mounted() {

    },
    render(createElement) {
        return createElement('App');
    }
});
