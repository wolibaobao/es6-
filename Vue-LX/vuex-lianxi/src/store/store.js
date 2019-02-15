import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export const store = new vuex.Store({
    state: {
        products: [
            { name: "马云", price: 200 },
            { name: "马化腾", price: 140 },
            { name: "马冬梅", price: 20 },
            { name: "马蓉", price: 10 }
        ]
    },
    getters: {
        products: (state) => {
            return state.products
        }
    },
    mutations: {
        price_jy: (state) => {
            return state.products.forEach(element => {
                element.price -= 1
            });
        },
        price_jy2: (state, e) => {
            // console.log(e)
            return state.products.forEach(element => {
                element.price -= e.amount
            });
        }
    },
    actions: {
        price_jy: (context) => {

            context.commit('price_jy')

        },
        price_jy2: (context, e) => {
            context.commit('price_jy2', e)
        }
    }
})