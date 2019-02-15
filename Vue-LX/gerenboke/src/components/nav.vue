<template>
	<div class="hello" :style="{background:title}">
		<div class="cont">
			<!--:route="{path: '/area'}"-->
			<el-menu :style="{background:title}" :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item index="1">
					<router-link to='/'>我的首页</router-link>
				</el-menu-item>
				<el-menu-item index="2">
					<router-link to='/add'>添加</router-link>
				</el-menu-item>
				<el-menu-item index="3">
					<router-link to='/bianji'>添加(带表单验证的)</router-link>
				</el-menu-item>
				<el-menu-item index="4">
					<router-link to='/lunbotu'>轮播图</router-link>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
	export default {
		
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
				input: "",
				active: "0"
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted() {
			// console.log(this.$route.fullPath);
			// if(this.$route.fullPath == "/") {
			// 	this.active = "1";
			// } else {
			// 	this.active = "2";
			// }
		}
	};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.cont {
		width: 1000px;
		margin: 0 auto;
		margin-top: 0px;
	}
	
	.cont li a {
		display: block;
		padding: 0 20px;
		text-decoration: none;
		font-weight: bold;
	}
	
	.cont li {
		padding: 0;
		transition: 0.5s;
		background: none;
	}
	
	.el-menu-item {
		background: none !important;
	}
	.el-menu.el-menu--horizontal{
		border: none;
	}
</style>