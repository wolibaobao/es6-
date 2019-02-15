<template>

    <div class="erzi">
        <p>我是儿子级</p>
        <button @click="jianyi">我在这控制state里的数据</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    data (){
        return{

        }
    },
    methods:{
        ...mapActions([
            'jianyi'
        ])
    }
}
</script>

<style scoped>
    .erzi{
        line-height: 50px;
        background: rgb(116, 179, 216);
    }
</style>

