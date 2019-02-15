<template>
  <div id="app">
   
    <Nav v-bind:title='color1'/>
 
     <div @click="fn" class="block" style="margin-top:10px;right: 25%;top: 0%;position: absolute;box-shadow:0 0 20px #fff" v-bind:title='color1' >         
            <el-color-picker v-model="color1" ></el-color-picker>
     </div>


    <div class="cont">
			<router-view v-bind:title='color1'></router-view>
			
		</div>
  
  </div>
</template>

<script>
import Nav from './components/nav'
import axios from 'axios'

export default {
  name: 'App',
  data (){
    return{
          color1: 'rgb(205, 50, 26)'
    }
  },
  methods:{
      fn(e){
        setTimeout(()=>{
            localStorage.setItem('a',this.color1)
        },3000)

        // const data ={
        //    color1:this.color1
        // }
      
        // axios.post("/huanfu.json	", data).then(res => {
        //       setTimeout(()=>{
        //           this.$message({
        //             showClose: true,
        //             message: "换肤成功^_^",
        //             type: "success"
        //           });
        //           console.log(res);
        //       },3000)
        // });

      }
  },
  components: {
    Nav
  },
  mounted(){
    console.log(localStorage.getItem("a") != null)
   
    
    if(!localStorage.getItem("a")){
        this.color1 = '#333'
    } if(localStorage.getItem("a")==null){
      this.color1 = '#333'
    }
    else{
         this.color1 = localStorage.getItem("a")
    }
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
 }
.cont{
  width: 1000px;
  margin: 0 auto;margin-top: 20px;
}

.block{
   animation:mymove2 1s linear infinite ;
   border-radius: 50%;
}
.el-color-picker__trigger{
  border-radius: 50% !important;
  border: #fff 2px solid !important;
}
.el-color-picker__color-inner{
  border-radius: 50% !important; 
}
.el-color-picker__color{
  border: none !important;
}
.el-color-picker__color{
 border-radius: 50% !important;
}
.el-color-picker__empty, .el-color-picker__icon{
  font-size:0px !important;
}

.el-button--text span{
  display:none;
}

@keyframes mymove2
{
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
}



</style>
