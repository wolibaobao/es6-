import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        products: [
            { name: "马云", price: 200 },
            { name: "马化腾", price: 140 },
            { name: "马冬梅", price: 20 },
            { name: "马蓉", price: 10 }
        ],
        numaber: 0
    },
    getters: {
        gaibian(state) {
            var gb = state.products.map((prompt) => {
                return {
                    name: '**' + prompt.name + '**',
                    price: prompt.price / 2
                }
            })
            return gb
        },
        numaber(state) {
            return state.numaber
        }
    },
    mutations: {
        jiangjia: (state, payload) => {
            // setTimeout(function() {
            state.products.forEach((product) => {
                    console.log(product)
                    product.price -= payload
                })
                // }, 3000)
        },
        jiajia: (state, payload) => {
            console.log(state, payload)
            state.numaber += payload
        },

        jiajia2: (state, m) => {
            console.log(state, m)
            state.numaber += m
        },

        erzijianyi: (state) => {
            state.numaber--
        }
    },
    actions: {
        jiangjia2: (context, payload) => {
            setTimeout(function() {
                context.commit('jiangjia', payload)
            }, 2000)
        },
        jiajia: (context, payload) => {
            console.log(context, payload)
            context.commit('jiajia', payload)
        },
        jianyi: (context) => {
            context.commit('erzijianyi')
        },

        jiajia2: function(context, m) {
            console.log(context, m)
            context.commit('jiajia2', m)
        }

    }
})