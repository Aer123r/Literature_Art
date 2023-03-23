<template>
   
    <div class="back">
    <div class="box_card_left">
      <logo></logo>
      <div class="back_image">
        
      </div>
    </div>



    <!-- 登录的盒子 -->
  
    <div class="box-card_right">
      <div class="right_inner_box">
      <h2 class="login_title">用户登录</h2>
      <div class="change_login_method" @click="change_login_method()">
        <div class="method1" v-if="now_login_method==0"  >使用验证码登录</div>
        <div class="method2" v-else>使用密码登录</div>
      </div>


      <el-form
      ref="formRef"
      :model="login_form"
      status-icon
      :rules="rules"
      label-width="0px"
      class="demo-ruleForm"
    >
    <div class="phone_number_box">
        <div class="input_label_text">手机号</div>
          <el-form-item label="" required prop="phone_number" >
              <el-input v-model="login_form.phone_number"  />
          </el-form-item>
    </div>


      <div class="password_box" v-if="now_login_method==0">
      <div class="input_label_text">密码</div>
      <el-form-item label="" required prop="password">
          <el-input v-model="login_form.password" type="password" />
      </el-form-item>
      </div>

      <div class="verification_code_box" v-else>
      <div class="input_label_text">验证码</div>
      <div class="send_code_box" >
        <div class="send_code_button"  v-if="button_disabled==false" @click="getVerification_code()">获取验证码</div>
        <div class="send_code_button2" v-else>{{count_second}}秒后再次获取</div>
      </div>
      <el-form-item label="" required prop="verification_code">
          <el-input v-model="login_form.verification_code" type="verification_code" />
      </el-form-item>
    </div>

    </el-form>



    <div class="onsubmit" @click="onSubmit()"><span>登录</span></div>
    <div class="save_login_set">
      <input type="checkbox" name="保存登录设置" id="" :checked="!!save_login" @click="change_save_login_set()">
      <div class="save_login_set_text">保存登录设置</div>
    </div>

    <div class="forget_password" @click="findpassword()"  v-if="now_login_method==0">忘记密码?</div>
     </div>
    </div>

</div>
</template>

<script setup lang="ts">
import { reactive, ref,watch,onMounted} from "vue";
import { useRouter } from "vue-router";
import logo from "@/components/logo.vue";
import {useStore} from "vuex";
import {login} from '../../src/api/login_register'
import { toUpper } from "lodash";
import { clearInterval } from "timers";
const store=useStore();




/*切换登录方式:y*/ 
let now_login_method=ref(0);

function change_login_method(){
  now_login_method.value=(now_login_method.value+1)%2;
  
}



/*自动登录*/
onMounted(()=>{
  // console.log(localStorage.getItem('save_login'),"now_save_login");
  
  if(localStorage.getItem('save_login')=='true'){
    login_form.value.phone_number=localStorage.getItem("phone_number")||'';
    login_form.value.password=localStorage.getItem("password")||'';
  }
})





var save_login=localStorage.getItem('save_login')

/*保存登录设置*/
function change_save_login_set(){
  console.log("before_login_set",save_login);
  if(save_login!='true'){
    localStorage.removeItem("save_login");
    localStorage.setItem("save_login",'true');
    console.log("now_login_set",save_login);
  }
  else if(save_login=='true'){
    localStorage.removeItem("save_login");
    localStorage.setItem("save_login",'false');
    console.log("now_login_set",save_login);
  }
 
  
}



const router=useRouter();

/*登录表单 */
let login_form = ref({
  phone_number: "",
  password: "",
  verification_code:""
});

const formRef = ref(login_form.value);

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
  

      login(login_form.value).then((res)=>{
        //保存token，进入Home界面
        console.log(res,'res');
        
        if(res.code==200){
        window.sessionStorage.setItem("token", res.data.token); 
        
        if(localStorage.getItem('save_login')=='true'){
          console.log("login_form.value.phone_number",login_form.value.phone_number);
          console.log("password",login_form.value.password);
          
          localStorage.setItem("phone_number",login_form.value.phone_number);
          localStorage.setItem("password",login_form.value.password);
          console.log(login_form.value,"保存本地");
        }else{
          localStorage.removeItem("save_login");
          console.log(login_form.value,"不保存");
        }
        localStorage.setItem('uid',res.data.用户信息.uid)
       
        
          alert('登录成功')
          router.push({
          path: "/home",
        });
        }
        else{
         
        }

      }).catch(error=>{
        
        alert(error.message)
        
       
        
        
      })
}

/*验证码 */
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



function register(){
  router.push('/register')
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


.change_login_method{
  position: absolute;
  width: 168px;
  height: 32px;
  left: 632px;
  top: 303px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */
  color: #D9D9D9;
  cursor: pointer;
}


.method2{
  width: 168px;
  height: 32px;
  position: absolute;
  left: 19px;
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
  top: 325px;
  left: 161px;
  width: 639px;
  height: 153px;

  /* background-color: yellow; */
}

.password_box,.verification_code_box{
  top: 510px;
}

.send_code_box{
  position: absolute;
  left: 484px;
  top: 89px;
  width: 120px;
  height: 32px;
  z-index: 3;

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
  top: 729px;
  
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
.save_login_set{
  /* background-color: yellow; */
}

.save_login_set input{
  box-sizing: border-box;

  position: absolute;
  width: 36px;
  height: 36px;
  left: 161px;
  top: 888px;

  border: 2px solid #000000;
  border-radius: 3px;
  cursor: pointer;
}

.save_login_set .save_login_set_text{
  position: absolute;
  width: 144px;
  height: 32px;
  left: 224px;
  top: 888px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height */


  color: #000000;
}

.forget_password{
  position: absolute;
  width: 110px;
  height: 29px;
  left: 690px;
  top: 890px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #013480;
  cursor: pointer;
}
</style>