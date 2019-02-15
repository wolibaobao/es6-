<template>
    <div id="product-list-one">
        <h2>Product List one</h2>
        {{gaibian}}
        <ul>
                <li v-for="(product,index) in gaibian" :key="index">
                    <span class="name">{{product.name}}</span>
                    <span class="price">${{product.price}}</span>
                </li>
        </ul>

        <button @click="jiangjia2(4)">降价</button>

        <button @click="jiajia(5)">加一</button>

        <button @click="jiajia2(2)">加2</button>

        {{numaber}}

        <erzi></erzi>   

    </div>
    
</template>
<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

import erzi from './erzi.vue'

export default {
    // props:['products'],
    // data (){
    //     return{
            
    //     }
    // }
    computed:{
        products(){
            return this.$store.state.products
        },
        // gaibian(){
        //     return this.$store.getters.gaibian
        // }
        ...mapGetters([
            'gaibian','numaber'
        ])
    },
    methods:{
        // jiangjia(e){
        //     // this.$store.state.products.forEach((product)=>{
        //     //     console.log(product)
        //     //     product.price -=2
        //     // })

        //     // this.$store.commit('jiangjia')

        //     this.$store.dispatch('jiangjia',e)

        // }

        jiajia2(m){
            // console.log(m)   //2
            this.$store.dispatch('jiajia2',m)
        },

        ...mapActions([
            'jiangjia2','jiajia'
        ])
    },
    components:{
        erzi
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
