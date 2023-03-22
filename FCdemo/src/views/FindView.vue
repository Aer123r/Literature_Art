<template>
   
   
    <div class="box_card_left">
      <logo></logo>
      <div class="back_image">
        
      </div>
    </div>



    <!-- 注册的盒子 -->
  
    <div class="box-card_right">
      <div class="right_inner_box">
      <h2 class="login_title">忘记密码</h2>

      
      <el-form
      ref="formRef"
      :model="Register_form"
      status-icon
      :rules="rules"
      label-width="0px"
      class="demo-ruleForm"
    >
    <div class="phone_number_box">
    <div class="input_label_text">手机号</div>
      <el-form-item label="" required prop="phone_number" >
          <el-input v-model="Register_form.phone_number"  />
      </el-form-item>
    </div>

      <div class="verification_code_box" >
      <div class="input_label_text">验证码</div>
      <div class="send_code_box">
        <div class="send_code_button"  v-if="button_disabled==false" @click="getVerification_code()">获取验证码</div>
        <div class="send_code_button2" v-else>{{count_second}}秒后再次获取</div>
      </div>
      <el-form-item label="" required prop="verification_code">
          <el-input v-model="Register_form.verification_code" type="verification_code" />
      </el-form-item>
    </div>


      <div class="password_box" >
      <div class="input_label_text">重置密码</div>
      <el-form-item label="" required prop="password">
          <el-input v-model="Register_form.password" type="password" />
      </el-form-item>
      </div>

      

    </el-form>

  

  

    <div class="onsubmit" @click="onSubmit()"><span>完成</span></div>
     </div>
    </div>


</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@/components/logo.vue";
import{Register} from "../api/login_register"

const router=useRouter();


const Register_form = reactive({
  phone_number: "",
  password: "",
  verification_code:""
});
const formRef = ref(Register_form);

const rules = reactive({
  phone_number: [
    { required: true, message: "手机号不能为空", trigger: "blur" },
    { min: 6, max: 12, message: '手机号长度在6-12位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 16, message: '密码长度在6-16位', trigger: 'blur' },
  ],
  verification_code: [
    { required: true, message: "请输入验证码", trigger: "blur" },
    { min: 6, max: 8, message: '验证码长度不对', trigger: 'blur' },
  ],
});

//登录功能
const onSubmit = () => {
    Register(Register_form).then((res)=>{
        //保存token，进入Home界面
        // window.sessionStorage.setItem("token", res.data.token); 
        alert("注册成功！")
        router.push({
          path: "/home",
        });
      }).catch(error=>{
        alert(error.message)
      })
}


function register(){
  router.push('/register')
}

function findpassword(){
  router.push('/find')
}

let button_disabled=ref(false)
let count_second=ref(5)

function getVerification_code(){
  console.log("button_code");
  count_second.value=5
  button_disabled.value=true

  let timer = setInterval(() => {
    if (count_second.value==0) {
      button_disabled.value=false
      window.clearInterval(timer);
    }
    count_second.value--

  }, 1000)
}


</script>

<style scoped>

.box_card_left{
  width: 960px;
  height: 1080px;
  background-color:  #EBF5FF;
}



.box_card_left .back_image{
  width: 1060px;
  height: 748px;
  background-image: url("../../images/login1.png");
  background-size: contain;
  position: absolute;
  top: 136px;
  left: -86px;
}



.right_inner_box{
  width: 960px;
  height: 1080px;
  position: absolute;
  top: 0px;
  left: 960px;
  /* background-color: rgb(199, 207, 210); */
}

.login_title{
  position: absolute;
  width: 200px;
  height: 66px;
  left:380px;
  top: 175px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 66px;
  /* identical to box height */
  color: #000000;
}



.el-form{

  width: 639px;
  margin-bottom: 60px;

}

.el-form-item{

  width: 639px;
  height: 98px;

}

.el-form-item .el-input{
  position: absolute;
  top: 0;
  left: 0;
  width: 639px;
  height: 95px;
  font-size: 25px;

}
.el-form-item .el-button{
  width: 639px;
}

.phone_number_box,.password_box,.verification_code_box{
  position: absolute;
  top: 270px;
  left: 161px;
  width: 639px;
  height: 153px;

  /* background-color: yellow; */
}

.verification_code_box{
  top: 455px;
}

.password_box{
  top: 636px;
}


.input_label_text{
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */
  margin-bottom: 24px;

  color: #000000;
 
}

.send_code_box{
  position: absolute;
  left: 484px;
  top: 89px;
  width: 120px;
  height: 32px;
  z-index: 1;
  cursor: pointer;
}

.send_code_button{

font-family: 'Microsoft YaHei';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height */
color: #9B9595;
cursor: pointer;
}

.send_code_button2{
position: absolute;
width: 200px;
left: -15px;
top: 0;
font-family: 'Microsoft YaHei';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height */
color: #9B9595;
cursor:not-allowed;
}
.input_phone_number,.input_password,.input_verification_code{
  width: 639px;
  height: 95px;
  border-radius: 9px;
  background: #FBFAFA;
  font-size: 25px;
  line-height: 95px;
  padding-left: 10px;
}

.onsubmit{
  position: absolute;
  width: 639px;
  height: 98px;
  left: 161px;
  top: 831px;
  
  background: #9AC1E4;
  border-radius: 9px 0px 9px 9px;
  text-align: center;
  cursor: pointer;
}
.onsubmit span{
  display: block;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 98px;

  color: #FFFFFF;
}

</style>