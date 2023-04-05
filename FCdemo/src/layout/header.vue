<template >
    <div class="head">
      <el-menu
    :default-active="activeIndex"
    class="head_"
    mode="horizontal"
    :ellipsis="true"
    @select="handleSelect"
    router

  >

    <div>
        <div class="logo">
      </div>
      <div class="title"><h1><span>文</span>易通</h1></div>
    </div>


    <div class="nav">
    <el-menu-item index="home"
    ><div class="outside_menu_item"><span>首页</span></div></el-menu-item>
    <!-- <span class="line">|</span> -->
    <el-menu-item index="2"><div class="outside_menu_item"><span>检索引擎</span></div></el-menu-item>
    <!-- <span class="line">|</span> -->
    <el-menu-item index="3"><div class="outside_menu_item"><span>在线商城</span></div></el-menu-item>
    <!-- <span class="line">|</span> -->
    <el-menu-item index="4"><div class="outside_menu_item"><span>智慧云端</span></div></el-menu-item>
    <!-- <span class="line">|</span> -->
    <div class="isLogin" v-if="had_token==0"><div class="login_text" @click="intoLogin()" >登录</div></div>
    <div class="isLogin2" v-else><div class="person_image">
      <img src="#" alt="">
    </div>

    <div class="dropdown_column">
      <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      <el-icon class="el-icon--right"></el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
      <div class="dropdown_item" @click="toPerson()">个人中心</div>
      <div class="dropdown_item" @click="toFeedBack()">我要反馈</div>
      <div class="dropdown_item" @click="deLogin()">切换账号</div>
      <div class="dropdown_item"  @click="deLogin()">退出登录</div>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
      </div>
    </div>
   </div>
  </el-menu>


    </div>
  </template>

<script  lang="ts" setup>

import { useRoute, useRouter } from "vue-router";
import { ref,onMounted } from "vue";
import axios from "axios";
import logo from "@/components/logo.vue";
import { ArrowDown } from '@element-plus/icons-vue'
axios.defaults.baseURL = "/api";
const router = useRouter();
const activeIndex = ref("home");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};



var had_token=ref(0);
onMounted(()=>{
  if(localStorage.getItem('token')?.length==0){
    had_token.value=0
  }else{
    had_token.value=1
  }
})


function intoLogin(){
  router.push('/login')
}

function toPerson(){
  router.push('/person')
}

function toFeedBack(){
  router.push('/feedback')
}
/*退出登录 */
function deLogin(){
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style lang="less">

.head{

  width: 1920px;
  height: 15vh;
}

.head_ {
  position: absolute;
  width: 1920px;
  height: 88px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  z-index: 5;

}
.logo {
  width: 57px;
  height: 57px;
  position: absolute;
  left: 42px;
  top: 16px;
  border-radius: 50%;
  background-image: url(../../images/logo.png);
  background-size: contain;
}


 h1{
  position: absolute;
  width: 90px;
  height: 36px;
  left: 126px;
  top: 25px;
  font-family: 'zihunjingdianrunhei';
  font-style: normal;
  font-weight: 400;
  font-size:30px;
  line-height: 36px;
  /* identical to box height */

}

 h1 span{
  color: #013480;
}

.nav{
  width: 1136px;
  height: 88px;
  position: absolute;
  left: 784px;
}

/* .nav .line{
  float: left;
  font-size: 26px;
  line-height: 80px;
} */

.el-menu-item{
  float: left;
  height: 60px;
  margin-top: 24px;
  padding: 30px 18px;
  margin-right: 100px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 39px;
  /* identical to box height */
  color: #000000;
  background: #FFFFFF;

}

.el-menu-item.is-active {
    border-bottom: 2px blue;
}

.outside_menu_item
{
  text-align: center;
  width: 5vw;


}

.outside_menu_item span{
  display: inline-block;
  padding-bottom: 26px;
}

.el-menu-item.is-active{
  border-bottom: 5px solid #0066FF;
  /* background: white; */
}

.el-menu--horizontal .el-menu-item span:not(.is-disabled):hover{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size:22px;
  line-height: 39px;
  /* color: #000000; */
  background-color: transparent;

}


.isLogin{
  position: absolute;
  width: 74px;
  height: 41px;
  left: 877px;
  top: 24px;
  background: #043492;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
}

.isLogin .login_text{
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size:22px;
  line-height: 41px;
  /* identical to box height */
  color: #FFFFFF;
}

.person_image{
  position: absolute;
  left: 877px;
  top: 15px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: pink;

}


.dropdown_column{
  position: absolute;
  top: 67px;
  left: 905px;

}

.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;

}
.example-showcase .el-dropdown-link {
  width: 8vw;
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.el-icon--right{
  position: absolute;
  left: -25px;
  top: -49px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
}

.el-dropdown-menu{
  /* position: absolute;
  top: 30px;
  left: 0px;
  width: 100px;
  height: 500px; */

  width: 82px;
  padding-top: 20px;
  background: #EBF5FF;
  border-radius: 5px;
}

.dropdown_item{
  padding: 7px 3px;
  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  width: 6vw;
  color: #013480;
  cursor: pointer;
}

.dropdown_item:hover{
  background-color: rgb(199, 227, 238);
}

.title {
  h1 {
    width: 20vw;
  }
}
@media (prefers-color-scheme: dark) {
  .head_ {
    background-color: #121212;
  }
  .outside_menu_item {
    background-color: #121212;
  }

  .el-menu-item {
    background-color: #121212;
    color: white;
  }
  h1 {
    color: white;
  }
  span {
    color: #5B93FF;
  }
}
@media (max-width:500px) {
  * {
    font-size: 50px !important;
  }

}
  </style>
