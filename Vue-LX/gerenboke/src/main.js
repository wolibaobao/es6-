// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
//配置默认路径
axios.defaults.baseURL = 'https://wd9128671721hxdnzq.wilddogio.com/'
    //配置Vue原型,在任何组件中都可以正常使用axios
Vue.prototype.http = axios


Vue.use(VueRouter)

Vue.config.productionTip = false

import Home from './components/Home_cont'
import add from './components/add'
import bianji from './components/bianji'
import lunbotu from './components/lunbotu'
import shangchuan from './components/shangchuan'
const routes = [{
        path: '/',
        component: Home,
        meta: { active: 1 }
    }, {
        path: '/add',
        component: add,
        meta: { active: 2 }
    }, {
        path: '/bianji',
        component: bianji,
        meta: { active: 3 }
    }, {
        path: '/lunbotu',
        component: lunbotu,
        meta: { active: 4 },
        children: [{
            path: "/lunbotu/shangchuan",
            component: shangchuan
        }]
    },
    {
        path: "*",
        redirect: '/'
    }

]
const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})