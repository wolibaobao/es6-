<template>
	<div id="app">
		<div class='outNode'>

			<div class='topNode'>

				<div class='moveDiv'>
					<div class='left' @click='leftCl' @mousedown.prevent>左</div>
					<div class='right2' @click='rightCl' @mousedown.prevent>右</div>

					<ul :style='{width:img.length*800+"px",left:index*-800+"px"}'>
						<li v-for='i in img' :key="i">
							<img :src="i" :style='{transform:"scale("+transitionlast+")"}' v-drag="1" >
						</li>
					</ul>
				</div>

				<div class='textDiv'>
					<span class='text'>{{msg[index]}}</span>
					<div class='fdj'>
		              <span @click='small' @mousedown.prevent>小</span>
		              <span @click='big' @mousedown.prevent>大</span>
		            </div>
				</div>

				<div class='bottomNode'>
					<ol :style='{width:img.length*200+"px",left:index>=4?(index-3)*-200+"px":0}'>
						<li v-for='(i,needIndex) in img' :key="i" :class='index==needIndex?"active":""' @click='index=needIndex'>
							<img :src="i">
						</li>
					</ol>
				</div>

			</div>

		</div>

		<el-button type="success" style="margin:20px;"><router-link to="/lunbotu/shangchuan" tag='div'>成功按钮</router-link></el-button>
		<router-view></router-view>

	</div>
</template>

<script>
//import Vue from 'vue'
var Vue = require('vue').default;

Vue.directive('drag',(el,val)=>{
  //console.log(el,val)
  el.onmousedown = function(e){
    var ev = e || event;
    var l = ev.clientX - el.offsetLeft;
    var t = ev.clientY - el.offsetTop;
    document.onmousemove = function(e){
      var ev = e || event;
      el.style.left = ev.clientX - l + 'px';
      el.style.top = ev.clientY - t + 'px';
    };
    document.onmouseup = function(){
      this.onmousemove = this.onmouseup = null;
    }
    return false;
  }
})

	export default {
		name: 'app',
		data() {
			return {
				img: [
					    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541668725517&di=c33f11960ffb64571ad94d0a2a82a5a9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4d086e061d950a7bbaf025fe01d162d9f3d3c9c7.jpg', 
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541668725517&di=f6fc224b995d6b6b5fd4569a251169e8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4610b912c8fcc3ce35e5350a9945d688d43f20e6.jpg', 
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541668725516&di=4c80774acaeac4f1a580af03d08c95fb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7dd98d1001e93901c0d9281470ec54e737d196c5.jpg', 
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541668725514&di=e9f6a0afe82900a94a738a6ff35dc294&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4afbfbedab64034f712e15f5a5c379310b551d65.jpg', 
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541668725514&di=19d665ba91d0a8f3a66e647c24cf953a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4bed2e738bd4b31c7861a9958cd6277f9e2ff8bb.jpg', 
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541668725509&di=0d780340241618004d5e3345c3d10344&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31b9fa937108d18367adbb4e1c6.jpg'],
				msg: ['图片1', '图片2', '图片3', '图片4', '图片5', '图片6'],
				index: 0,
				transitionlast: 1
			}
		},
		methods:{
			rightCl(){
				this.index++;
				this.index == this.img.length && (this.index=0);
				this.transitionlast=1;
			},
			leftCl(){
				this.index--;
				this.index == -1 && (this.index=this.img.length-1);
				this.transitionlast=1;
			},
			small(){
				
				this.transitionlast-=0.2;
				console.log(this.transitionlast)
				if(this.transitionlast==0.4000000000000001){
					this.$notify({
						title: '警告',
						message: '在删除没了！',
						type: 'warning'
					});
					this.transitionlast+=0.2;
				}
			},
			big(){
				console.log(this.transitionlast)
				this.transitionlast+=0.2;
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.fdj{
  float: right;color: white;margin-right: 20px;
}
	.topNode {
		width: 800px;
		height:600px;
		border: 1px solid black;
		margin: 0 auto;
	}
	
	.left {
		position: absolute;
		left: 0;
		top: 40%;
		z-index: 5;
		color: white;
		font-size: 50px;
		cursor: pointer;
		background: red;
	}
	
	.right2 {
		position: absolute;
		right: 0;
		top: 40%;
		z-index: 5;
		color: white;
		font-size: 50px;
		cursor: pointer;
		background: red;
	}
	
	.moveDiv {
		overflow: hidden;
		position: relative;
		width: 800px;
		height: 400px;
	}
	
	.moveDiv ul {
		height: 400px;
		margin: 0;
		padding: 0;
		display: block;
		transition: .6s;
		position: absolute;
		left: 0px;
	}
	
	.moveDiv ul li {
		margin: 0;
		padding: 0;
		width: 800px;
		float: left;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.moveDiv ul li img {
		width: 100%;
		height: 100%;
		left: 0px;
		position: absolute;
	}
	
	.textDiv {
		height: 40px;
		line-height: 40px;
		background: brown;
		color: white;
		text-align: left;
	}
	
	.bottomNode {
		width: 800px;
		height: 200px;
		overflow: hidden;position: relative;
	}
	
	.bottomNode ol {
		margin: 0;
		padding: 0;
		position: absolute;
		display: block;
		transition: .6s;
	}
	
	.bottomNode ol li {
		margin: 0;
		padding: 0;
		display: block;
		margin: 15px;
		float: left;
		border:5px black solid;
		transition: .6s;
		width: 160px;
		height: 110px;
	}
	
	.bottomNode ol li img {
		width: 100%;
		height: 100%;
	}
	
	.bottomNode>ol li.active {
		border-color: orange;
	}
</style>