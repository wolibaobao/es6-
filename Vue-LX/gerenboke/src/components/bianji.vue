<template>
   
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px ">
    <h1 :style="{'color':title,'border-bottom':'solid 2px'+title +'!important'}" class="shouye">我是添加(带表单验证的)</h1>
    <p style="height:20px"></p>
		<el-form-item label="姓名" prop="name">
			<el-input v-model="ruleForm.name"></el-input>
		</el-form-item>

    <el-form-item label="电话" prop="tel">
			<el-input v-model="ruleForm.tel"></el-input>
		</el-form-item>

		<el-form-item label="活动区域" prop="region">
			<el-select v-model="ruleForm.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
    
		<!-- <el-form-item label="活动时间" required>
			<el-col :span="11">
				<el-form-item prop="date1">
					<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-form-item prop="date2">
					<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
				</el-form-item>
			</el-col>
		</el-form-item> -->

		<el-form-item label="即时配送" prop="delivery">
			<el-switch v-model="ruleForm.delivery"></el-switch>
		</el-form-item>

		<el-form-item label="技能" prop="type">
		  	<el-checkbox-group v-model="ruleForm.type" @change="test" >
          <el-checkbox v-for="item in ruleForm.checkList" :key="item.label" :label="item.label">{{item.label}}</el-checkbox>
        </el-checkbox-group>
		</el-form-item>

		<el-form-item label="性别" prop="resource">
			<el-radio-group v-model="ruleForm.resource">
				<el-radio label="男性"></el-radio>
				<el-radio label="女性"></el-radio>
			</el-radio-group>
		</el-form-item>

		<el-form-item label="详细内容" prop="desc">
			<el-input type="textarea" v-model="ruleForm.desc"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			<el-button @click="resetForm('ruleForm')">重置</el-button>
		</el-form-item>
	</el-form>

  
</template>

<script>
import axios from "axios";
//这里要俺需要引入，我不是一个对象
import { isvalidPhone } from "../../config/validate";
//定义一个全局的变量，谁用谁知道
var validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("请输入电话号码"));
  } else if (!isvalidPhone(value)) {
    callback(new Error("请输入正确的11位手机号码"));
  } else {
    callback();
  }
};

export default {
  props: {
			title: {
				type: String
			}
		},
  data() {
    return {
      ruleForm: {
       
        name: "",
        region: "",
        tel: "",
        // date1: "",
        // date2: "",
        delivery: false,
        type: [],
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
        ],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        tel: [
          { required: true, trigger: "blur", validator: validPhone } //这里需要用到全局变量
        ],
        region: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "请选择活动资源",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "请填写活动形式",
            trigger: "blur"
          },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    test(test) {
      console.log(test);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const data = {
            name: this.ruleForm.name,
            tel: this.ruleForm.tel,
            checked: this.ruleForm.type,
            radio: this.ruleForm.resource,
            textarea: this.ruleForm.desc
          };
          console.log(data);
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
        } else {
          console.log("error submit!!");
          this.$message({
            showClose: true,
            message: "请填写完整",
            type: "warning"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style>
.el-form-item__label{
  text-align: center;
  font-weight: bold;
}
.shouye {
		padding-bottom: 10px;
		border-bottom: 2px solid rgb(205, 50, 26) !important;
	}
</style>
