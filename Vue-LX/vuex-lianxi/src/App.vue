<template>
  <div id="app">
    
    <one ></one>
    <two ></two>

  </div>
</template>

<script>
import one from './components/ove'
import two from './components/two'
export default {
  name: 'App',
  data (){
    return{
     
    }
  },
  components: {
    one,two
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
