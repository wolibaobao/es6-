<template>
    <div id="product-list-one">
        <h2>Product List one</h2>
        <ul>
                <li v-for="(product,index) in products" :key="index">
                    <span class="name">{{product.name}}</span>
                    <span class="price">${{product.price}}</span>
                </li>
        </ul>

        <button @click="price_jy">价钱减一</button>

        <button @click="price_jy2({amount:3})">价钱减3</button>

    </div>
    
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

// export default {
//     computed:{
//         products(){
//           return this.$store.state.products
//         }
//     },
//     methods:{
//         price_jy(){
//             // return this.$store.commit('price_jy')   //commit直接调用mutations里面的方法
//             return this.$store.dispatch('price_jy')   //dispatch 调用actions里面的方法
//         }
//     }
// }

//下面这是简便的写法
export default {
    computed:{
        ...mapGetters([
            'products'
        ])
    },
    methods:{
        ...mapActions([
            'price_jy','price_jy2'
        ])
    }
}
</script>


<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
