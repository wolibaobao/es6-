<template>
  <div id="app">
        <aa></aa>
        <bb></bb>
  </div>
</template>

<script>
import aa from './component/aa.vue'
import bb from './component/bb.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    'aa':aa,'bb':bb
  }
}
</script>

<style>


</style>
