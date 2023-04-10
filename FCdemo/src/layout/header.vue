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
  padding-bottom: 20px;
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
  background-image: url(data:image/jpeg;base64,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);
  background-size: contain;
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
  width: 82px;
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;

}

.el-icon--right{
  position: absolute;
  left: -35px;
  top: -55px;
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

  width: 100px;
  padding-top: 20px;
  background: #EBF5FF;
  border-radius: 5px;
  width: 85px;
  font-size: 13px;

}

.dropdown_item{
  padding: 7px 0px;
  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  width: 85px;

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
  .nav {
    background-color: #121212;
  }
  span {
    //color: #5B93FF;
    //background-color: #121212;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    background-color: #121212;
  }
  .dropdown_item:hover{
  }
  .outside_menu_item {
    background-color: #121212;
  }

}
@media (max-width:500px) {
  * {
    font-size: 50px !important;
    //font-weight: bolder !important;
  }
  .head {
    background-color: #fff;
    height: 4vh;
  }
  .head_ {
    height: 4vh;
  }
  .person_image {
    padding: 25px;
    top: 0.1vh;
    left: 52vw;
  }
  .el-menu-item {
  }

}
  </style>
