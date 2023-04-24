<template>
    <body>
       <div class="feedback_box_page1" v-if="feed_back_page==0">

          <div class="title">联系我们</div>
          <div class="subhead">亲爱的用户，如果您在使用产品过程中遇到任何困难，
或者您对产品有更好地建议，请及时和我们联系！</div>
            <div class="input_box">
                <div class="input_inner_box">
                    <div class="each_input" v-for="(item,index) in input_title_list" :key="item">
                        <div class="input_title">{{ item }}</div>
                        <div class="input_content_box">
                            <input type="text" class="input_content">
                        </div>
                    </div>
                </div>
            </div>
            <div class="right_image1"></div>
            <div class="right_image3"></div>
            <div class="right_image2"></div>

            <div class="submit_button" @click="to_feedback_box_page2()"><span>提交</span></div>
            
       </div>

       <div class="feedback_box_page2" v-if="feed_back_page==1">

<div class="title">您的反馈已收到，感谢您的支持！</div>
<div class="subhead">祝您生活愉快！
</div>
  <div class="right_image1"></div>
  <div class="right_image3"></div>
  <div class="right_image2"></div>

</div>
    </body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let feed_back_page =ref(0)
let input_title_list=['用户名','邮箱','电话','留言']
function to_feedback_box_page2(){
    feed_back_page.value=1
}
</script>

<style scoped>
.body{
  width: 100vw;
  height:990px;

}

/* 第一个界面 */
.feedback_box_page1{
  position: absolute;
  width:1920px;
  height: 990px;
  top: 90px;
  left: 0;
  /* background-color: yellow; */
  overflow: hidden;
  background-color:#EBF5FF
}

/*首页1*/
.feedback_box_page1 .title{
    position: absolute;
    width: 200px;
    height: 66px;
    left: 426px;
    top: 54px;

    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 66px;
    /* identical to box height */


    color: #013480;


}

.feedback_box_page1 .subhead{
    position: absolute;
    width: 720px;
    height: 76px;
    left: 174px;
    top: 156px;

    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 147.48%;
    /* or 38px */

    letter-spacing: 0.135em;

    color: #CCC9C9;
}

.feedback_box_page1 .submit_button{
    position: absolute;
    width: 225px;
    height: 81px;
    left: 414px;
    top: 811px;
    text-align: center;
    line-height: 81px;
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    background: #013480;
    border-radius: 45px;
  cursor: pointer;
}

.feedback_box_page1 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1080px;
  top: -135px;
  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;

}
@media(max-width: 500px){
  .feedback_box_page1 .right_image1{
    width: 929px;
    height: 1515px;
    left: 1010px;
    top: -225px;
  }
}
.feedback_box_page1 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 1261px;
  top: -257px;
  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.feedback_box_page1 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;
  left: 1224px;
  top: 149px;

  background: url(../../images/feedback_img.png);
  background-size: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}

/* 四个输入框 */
.input_box{
    width: 487px;
    height: 518px;
    position: absolute;
    top: 265px;
    left: 283px;
    /* background-color: yellowgreen; */
}

.input_inner_box{
    width: 487px;
    height: 518px;
    /* background-color: pink; */
}

.each_input{
    position: relative;
    width: 487px;
    height: 119px;
    margin-bottom: 14px;
    /* background-color: skyblue; */

}

.each_input .input_title{
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    /* identical to box height */
    color: #013480;
}

.each_input .input_content_box{
    box-sizing: border-box;

    position: absolute;
    width: 487px;
    height: 81px;
    left: 0px;
    top: 37px;

    border: 1px solid #013480;
    border-radius: 45px;
}

.each_input .input_content{
    width: 450px;
    height: 71px;
    position: absolute;
    left: 15px;
    top: 5px;
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 71px;
    /* identical to box height */
    color: #000000;
    outline:none;
    border: none;
    background-color: transparent;
}
/* 第二个界面 */

.feedback_box_page2{
  position: absolute;
  width:1920px;
  height: 990px;
  top: 90px;
  left: 0;
  /* background-color: yellow; */
  overflow: hidden;
  background-color:#EBF5FF
}

/*首页1*/
.feedback_box_page2 .title{
    position: absolute;

    left: 93px;
    top: 307px;

    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 66px;
    line-height: 87px;

    color: #013480;


}

.feedback_box_page2 .subhead{
    position: absolute;

    left: 93px;
    top: 472px;

    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 66px;
    /* identical to box height */


    color: #013480;
}

.feedback_box_page2 .submit_button{
    position: absolute;
    width: 225px;
    height: 81px;
    left: 414px;
    top: 811px;
    text-align: center;
    line-height: 81px;
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    background: #013480;
    border-radius: 45px;
  cursor: pointer;
}

.feedback_box_page2 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1080px;
  top: -135px;
  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;

}
@media(max-width: 500px){
  .feedback_box_page2 .right_image1{
    width: 929px;
    height: 1515px;
    left: 1010px;
    top: -225px;
  }
}
.feedback_box_page2 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 1261px;
  top: -257px;
  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.feedback_box_page2 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;
  left: 1224px;
  top: 149px;
  background: url(../../images/feedback_img.png);
  background-size: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}
</style>