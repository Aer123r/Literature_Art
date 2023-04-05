<template>
  <body>



      <div class="home1" v-if="now_home_page==0">
          <div class="title">一站式智能检索系统</div>
          <div class="subhead">一个为医药行业开发的平台，<br>
集文献管理、智慧云端、团队协作等功能于一体，<br>
为您打造智能检索系统</div>
            <div class="use_button" @click="use_rightnow()"><span>立即使用</span></div>
            <div class="right_image1"></div>
            <div class="right_image3"></div>
            <div class="right_image2"></div>


      </div>


      <div class="home2" v-if="now_home_page==1">
        <div class="title">满足你的个性化需求</div>
          <div class="subhead">
            <p>· 海量文献库在线检索，一键添加至个人收藏</p>
            <p>· 支持多种格式文件在线阅读</p>
            <p>· 智慧云端提供个性化存储，不用担心文件丢失</p>
            <p>· 智能提取文献关键信息，大大降低人力物力消耗</p>
            <br>
          </div>

            <div class="right_image1"></div>
            <div class="right_image3"></div>
            <div class="right_image2"></div>

      </div>

      <div class="home3" v-if="now_home_page==2">
        <div class="title">智能打造便捷高效平台</div>
          <div class="subhead">
            <p>· 关键词检索，精准查询</p>
            <p>· 智能精准读取文献关键信息，大大降低人力物力消耗</p>
            <p>· 支持多种格式文件在线阅读</p>
            <p>· 分类归档，条理有序</p>
            <br>
          </div>

            <div class="right_image1"></div>
            <div class="right_image3"></div>
            <div class="right_image2"></div>

      </div>

      <div class="change_page" @click="change_page()"></div>


    </body>

</template>

<script setup lang="ts">

import {  useRouter } from "vue-router";
import { isShallow, onMounted, reactive, ref } from "vue";
import logo from "@/components/logo.vue";


let now_home_page=ref(0)

const router = useRouter();
function intoLogin(){
  router.push('/login')
}

function use_rightnow(){
  if(localStorage.getItem('token')?.length!=0){
    router.push('/2')
  }
  else{
    router.push('/login')
  }

}
function intoRegister(){
  router.push('/register')
}


function change_page(){
  now_home_page.value=(now_home_page.value+1)%3
}


</script>

<style scoped>
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
        position: relative;
        top: 500px;
    }
    100% {
        opacity: 1; position: relative;top: 0;
    }
}

.home1,.home2,.home3{
  animation: fadeInAnimation ease 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  width: 100vw;
  height: 79.4vh;
}

/*首页1*/
.home1 .title{
  position: absolute;
  width: 720px;
  height: 106px;
  left: 102px;
  top: 291px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 106px;
  /* identical to box height */


  color: #000000;
}

.home1 .subhead{
  position: absolute;
  width: 836px;
  height: 216px;
  left: 102px;
  top: 483px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 50px;

  color: #272727;
}

.home1 .use_button{
  position: absolute;
  width: 280px;
  height: 99px;
  left: 331px;
  top: 783px;
  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 99px;
  /* identical to box height */
  color: #FFFFFF;
  background: #013480;
  border-radius: 50px;
  cursor: pointer;
}

.home1 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1110px;
  top: -135px;
  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;
}
@media(max-width: 500px){
  .home1 .right_image1{
    width: 929px;
    height: 1515px;
    left: 1010px;
    top: -135px;
  }
}
.home1 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 1261px;
  top: -167px;
  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.home1 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;
  left: 1224px;
  top: 239px;

  background: url(../../images/home1_right2.png);
  background-size: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}


/*首页2 */
.home2 .title{
  position: absolute;
  width: 630px;
  height: 92px;
  left: 984px;
  top: 345px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 92px;

  color: #000000;
}

.home2 .subhead{
  position: absolute;
  width: 819px;
  height: 299px;
  left: 984px;
  top: 511px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 50px;

  color: #272727;
}

.home2 .subhead p{
  margin-bottom: 20px;
}
.home2 .use_button{
  position: absolute;
  width: 280px;
  height: 99px;
  left: 331px;
  top: 783px;
  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 99px;
  /* identical to box height */
  color: #FFFFFF;
  background: #013480;
  border-radius: 50px;
  cursor: pointer;
}

.home2 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1px;
  top: -135px;

  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;
}

.home2 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 152px;
  top: -167px;

  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.home2 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;

  background: url(../../images/home2_right.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}


/*首页3 */

.home3 .title{
  position: absolute;
  width: 700px;
  height: 92px;
  left: 142px;
  top: 345px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 92px;

  color: #000000;

}

.home3 .subhead{
  position: absolute;
  width: 895px;
  height: 299px;
  left: 142px;
  top: 511px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 50px;

  color: #272727;
}

.home3 .subhead p{
  margin-bottom: 25px;
}

.home3 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1110px;
  top: -135px;
  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;
}

.home3 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 1261px;
  top: -167px;
  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.home3 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;
  left: 1224px;
  top: 239px;

  background: url(../../images/home3_right.png);
  background-size: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}


.change_page{
  float: left;
  width: 60px;
  height: 60px;
  background-image: url(../../images/down_arrow.png);
  background-size: contain;
  opacity: 0.2;
  margin-left: 900px;
}

</style>
