<template>
	<div>

		

	<div class="cont">

		

		<h1 :style="{'color':title,'border-bottom':'solid 2px'+title +'!important'}" class="shouye">我是首页</h1>

		<div style="margin-top: 15px;">
			<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
				<el-button slot="append" icon="el-icon-search"></el-button>
			</el-input>
		</div>

		<el-table ref="multipleTable" :data="msg2" tooltip-effect="msg" style="width: 100%" @selection-change="handleSelectionChange" @filter-change="handleFilterChange2">
			<el-table-column type="selection" width="55"></el-table-column>

			<el-table-column prop="name" label="姓名" width="auto">

			</el-table-column>
			<el-table-column prop="tel" label="电话" width="auto"> </el-table-column>
			<el-table-column prop="radio" label="性别" width="auto"> </el-table-column>
			<el-table-column prop="checked" label="技能" width="auto"> </el-table-column>
			<el-table-column prop="textarea" label="详细信息" width="auto"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">

					<el-button size="mini" type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<p style="margin:20px 0">你所选的如下：</p>
		<ul class="aa" v-for="(i,index) in xuandenr" :key="index">

			<li>ID:{{index}}</li>
			<li>姓名{{i.name}}</li>

		</ul>

		<div class="cont_bj" v-show="zhezao">
			<div class="ch" @click="zhezao=false">X</div>
			<h1>现在你正在编辑的是<strong style="color:red">{{name}}</strong></h1>
			<p>姓名：</p>
			<el-input placeholder="Please input" v-model="name"></el-input>
			<p>电话：</p>
			<el-input placeholder="Please input" v-model="tel"></el-input>

			<p>添加选项：</p>

			<el-checkbox-group v-model="checked" @change="test">
				<el-checkbox v-for="item in checkList" :key="item.label" :label="item.label">{{item.label}}</el-checkbox>
			</el-checkbox-group>

			<p>性别：</p>
			<el-radio v-model="radio" label="男性">男性</el-radio>
			<el-radio v-model="radio" label="女性">女性</el-radio>
			<el-radio v-model="radio" label="不男不女">不男不女</el-radio>
			<p>详细内容：</p>
			<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
			</el-input>

			<el-row>
				<br>
				<el-button type="primary" @click="add">提交</el-button>

			</el-row>
		</div>

		<div class="zhezao" v-show="zhezao"></div>

	</div>

	</div>
</template>
<script>
	import axios from "axios";
	import {
		Loading
	} from "element-ui";
	export default {
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
				msg: [],
				fullscreenLoading: false,
				xuandenr: "",
				zhezao: false,
				name: "",
				tel: "18811692640",
				checkList: "",
				radio: "女性",
				input5: "",
				textarea: "",
				checked: [],
				checkList: [{
						id: "001",
						label: "Vue.js"
					},
					{
						id: "002",
						label: "Angular.js"
					},
					{
						id: "002",
						label: "React.js"
					},
					{
						id: "002",
						label: "Node.js"
					},
					{
						id: "002",
						label: "PHP.js"
					}
				],
				ID:''
			};
		},
		methods: {
			handleSelectionChange(val) {
				console.log(val);
				this.xuandenr = val;
			},

			handleFilterChange2(val) {
				console.log(val);
			},

			handleDelete(a, b) {
					console.log(b)
					this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning"
					})
					.then(() => {
						fetch("https://wd9128671721hxdnzq.wilddogio.com/users" + b.name + "/.json", {
							method: 'DELETE',
							headers: {
								'Content-type': 'application/json'
							}
						})
						.then(res => {
							return res.json()
						}).then(data => {
							console.log(data)
							alert('删除成功')
							
						})
						this.$notify({
							title: "成功",
							message: "你要删除的id是" +
								a +
								"-----------------------" +
								"姓名是：" +
								b.name,
							type: "success"
						});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消删除"
						});
					});
			},

			//编辑按钮
			handleEdit(a, b) {
				console.log(a, b);
				this.ID = b;
				this.name = b.name;
				this.tel = b.tel;
				this.radio = b.radio;
				this.textarea = b.textarea;
				this.checked = b.checked;
				this.fullscreenLoading = true;

				setTimeout(() => {
					this.fullscreenLoading = false;
					this.zhezao = true;
				}, 2000);
			},

			//获取技能函数
			test() {
				console.log(this.checked);
			},

			//点击提交函数
			add() {
					const data = [{
						name: this.name,
							tel: this.tel,
						radio: this.radio,
						checked: this.checked,
						textarea: this.textarea
				}];
				axios.put('users.json',data,this.ID)
				.then((e)=>{
					this.$message({
						showClose: true,
						message: "编辑成功",
						type: "success"
					});
				})

				
				this.zhezao = false;
			}
		},

		computed: {
			msg2() {
				const input5 = this.input5;
				if(input5) {
					// console.log('this.tableData', this.msg)
					return this.msg.filter(dataNews => {
						return Object.keys(dataNews).some(key => {
							return(
								String(dataNews[key])
								.toLowerCase()
								.indexOf(input5) > -1
							);
						});
					});
				}
				// console.log('this.tableData', this.msg)
				return this.msg;
			}
		},

		mounted() {
			axios.get("/users.json").then(e => {
				console.log(e.data);

				for(let key in e.data) {
					// console.log(e.data[key]);
					this.msg.push(e.data[key]);
				}



			});

			
		}
	};
</script>
<style>
.aa {
  width: 600px;
}

.aa li {
  float: left;
  width: 50%;
  text-align: left;
  font-weight: bold;
  list-style: none;
  line-height: 40px;
}

.shouye {
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(205, 50, 26) !important;
}

.cont_bj {
  width: 815px;
  height: 535px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgb(255, 255, 255);
  z-index: 99;
  margin: auto;
  border: #f1f1f1 solid 1px;
  box-shadow: 0 0 26px #333;
  padding: 20px;
  animation: mymove 0.5s ease-in;
}

@keyframes mymove {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

p {
  line-height: 50px;
}

.zhezao {
  width: 100%;
  height: 100vh;
  background: #333333ad;
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0;
}

.ch {
  float: right;
  /* font-size: 30px; */
  top: 0px;
  margin-top: -9px;
  font-weight: bold;
  width: 35px;
  height: 35px;
  background: #e4e4e4;
  text-align: center;
  line-height: 35px;
  border-radius: 50px;
}
</style>