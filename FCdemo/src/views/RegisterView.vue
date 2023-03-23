<template>
   
    <div class="back">
    <div class="box_card_left">
      <logo></logo>
      <div class="back_image">
        
      </div>
    </div>



    <!-- 注册的盒子 -->
  
    <div class="box-card_right">
      <div class="right_inner_box">
      <h2 class="login_title">用户注册</h2>

      
      <el-form
      ref="formRef"
      :model="Register_form"
      status-icon
      :rules="rules"
      label-width="0px"
      class="demo-ruleForm"
    >

    <div class="verification_code_box" >
      <div class="input_label_text">输入用户名</div>
      <el-form-item label="" required prop="username">
          <el-input v-model="Register_form.username" type="username" />
      </el-form-item>
      </div>

      <div class="phone_number_box">
    <div class="input_label_text">输入手机号</div>
      <el-form-item label="" required prop="phone_number" >
          <el-input v-model="Register_form.phone_number"  />
      </el-form-item>
    </div>

      


      <div class="password_box" >
      <div class="input_label_text">设置密码</div>
      <el-form-item label="" required prop="password">
          <el-input v-model="Register_form.password" type="password" />
      </el-form-item>
      </div>

      

    </el-form>

  

  

    <div class="onsubmit" @click="onSubmit()"><span>完成</span></div>
     </div>
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
  username:""
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
  username: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 1, max: 8, message: '用户名', trigger: 'blur' },
  ],
});

//登录功能
const onSubmit = () => {
    Register(Register_form).then((res)=>{
        //保存token，进入Home界面
        window.sessionStorage.setItem("token", res.data.token); 
        console.log(res);
        
        alert("注册成功！")
        router.push({
          path: "/home",
        });
      }).catch(error=>{
        alert(error.message)
      })
}


function findpassword(){
  router.push('/find')
}


</script>

<style scoped>
.back {
  width: 1920px;
  height: 1080px;
}

.box_card_left{
  width: 960px;
  height: 1080px;
  background-color:  #EBF5FF;
}

.logo {
  width: 35px;
  height: 35px;
  position: absolute;
  left: 40px;
  top: 27px;
  border-radius: 50%;
  background-color: yellow;
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

.phone_number_box{
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

.outside_input{
  width: 484px;
  height: 74px;
  /* background-color: pink; */
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