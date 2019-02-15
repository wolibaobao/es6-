<template>
  <div class="cont">
       <h1 :style="{'color':title,'border-bottom':'solid 2px'+title +'!important'}" class="shouye">我是添加</h1>
    <p style="height:20px"></p>
    <p>姓名：</p>
    <el-input placeholder="" v-model="name"></el-input>
    <p>电话：</p>
    <el-input placeholder="" v-model="tel"></el-input>

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

    <br>
    <hr>

    <div class="nr">
      <p> 姓名：<span>{{name}} </span></p>
      <p>电话：<span>{{tel}} </span></p>
      <p>性别：<span>{{radio}} </span> </p>
      <p> 技能：<span>{{checked}} </span></p>
      <p>详细详细：<span>{{textarea}}</span></p>
    </div>



  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
			title: {
				type: String
			}
		},
  data() {
    return {
      name: "",
      tel: "",
      checkList: "",
      radio: "",
      textarea: "",
      checked: [],
      checkList: [
        {
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
      ]
    };
  },
  methods: {
    add() {
      console.log(this.checked);
      console.log(this.name, this.tel, this.radio, this.checked, this.textarea);
      if (
        this.name == "" ||
        this.tel == "" ||
        this.radio == "" ||
        this.checked == "" ||
        this.textarea == ""
      ) {
        this.$message({
          showClose: true,
          message: "请填写完整",
          type: "warning"
        });
      } else {
        const data = {
          name: this.name,
          tel: this.tel,
          radio: this.radio,
          checked: this.checked,
          textarea: this.textarea
        };
        axios.post("/users.json	", data).then(res => {
          this.$message({
            showClose: true,
            message: "注册成功，我们去登录吧^_^",
            type: "success"
          });
          setTimeout(() => {
            this.$router.push({
              path: "/"
            });
          }, 3000);
          console.log(res);
        });
      }
    },

    test() {
      console.log(this.checked);
    },

    toggleSelection(rows) {
      console.log(rows);
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
p {
  height: 50px;
  line-height: 50px;
  font-weight: bold;
}

.nr p span {
  color: red;
}

.shouye {
		padding-bottom: 10px;
		border-bottom: 2px solid rgb(205, 50, 26) !important;
	}
</style>
