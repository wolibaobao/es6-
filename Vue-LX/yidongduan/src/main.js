// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



// import Vant from 'vant';
// import 'vant/lib/index.css';


// Vue.use(Vant);


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.px.css';

Vue.use(YDUI);

//路由文件在这里面
import { routes } from './router/index.js'

const router = new VueRouter({
    // mode: 'history',
    //	history
    routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})