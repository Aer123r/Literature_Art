<template>
    <div class="body">
       
        <div class="content_box1" v-if="now_page==0">
            <div class="title">联系我们</div>
            <div class="subhead">亲爱的用户，如果您在使用产品过程中遇到任何困难，
或者您对产品有更好地建议，请及时和我们联系！</div>
            <div class="right_image1"></div>
            <div class="right_image3"></div>
            <div class="right_image2"></div>
        


        <div class="input_boxs">
          <div class="username_box">
            <div class="title">
              用户名
            </div>
            <div class="input_item">
              <input type="text" >
            </div>
          </div>
        
          
          <div class="email_box">
            <div class="title">
              邮箱
            </div>
            <div class="input_item">
              <input type="text" >
            </div>
          </div>
         


          <div class="phone_number_box">
            <div class="title">
              电话
            </div>
            <div class="input_item">
              <input type="text" >
            </div>
          </div>
   

         
          <div class="comment_box">
            <div class="title">
              留言
            </div>
            <div class="input_item">
              <input type="text" >
            </div>
          </div> 
        </div>


        <div class="submit_button" @click="now_page=1">发送</div>
      </div>

      <div class="content_box2" v-else>
        <div class="title">您的反馈已收到，感谢您的支持！</div>
            <div class="subhead">祝您生活愉快！</div>
            <div class="right_image1"></div>
            <div class="right_image3"></div>
            <div class="right_image2"></div>
        
      </div>


    </div>
</template>

<script setup lang="ts">
import{ref} from 'vue'

let now_page=ref(0)
</script>

<style scoped>
.body{
    background-color: #EBF5FF;
}


.content_box1,
.content_box2
{
    height: 990px;
    width: 1920px;
}

.content_box1 .title{
  position: absolute;
  width: 200px;
  height: 66px;
  left: 426px;
  top: 144px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 66px;
  /* identical to box height */


  color: #013480;

}

.content_box1 .subhead{
  position: absolute;
  width: 705px;
  height: 76px;
  left: 174px;
  top: 246px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 147.48%;
  /* or 38px */

  letter-spacing: 0.135em;

  color: #CCC9C9;
}
.content_box1 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1110px;
  top: -135px;
  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;
}

.content_box1 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 1261px;
  top: -167px;
  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.content_box1 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;
  left: 1224px;
  top: 239px;

  background: url(../../images/feedback1.png);
  background-size: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}

.input_boxs{
  position: absolute;
  width: 487px;
  height: 520px;  
  left: 283px;
  top: 355px;
}

.username_box{
  width: 487px;
  height: 119px;

}

.input_boxs .username_box .title{
  position: absolute;
  top: 0;
  left: 0;
  width: 66px;
  height: 29px;


  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #013480;
}

.input_boxs .username_box .input_item{
  box-sizing: border-box;

  position: absolute;
  width: 487px;
  height: 81px;
  left: 0;
  top: 38px;

  border: 1px solid #013480;
  border-radius: 45px;
}

.input_boxs .username_box .input_item input{
  box-sizing: border-box;
  position: absolute;
  width: 477px;
  height: 75px;
  left: 0;
  top: 0;
  padding-left: 20px;
  outline: none;
  background: transparent;
  border-radius: 45px;
  border: none;
}

/*邮箱 */

.input_boxs .email_box{
  position: absolute;
  width: 487px;
  height: 119px;
  top: 119px;
  left: 0;

}

.input_boxs .email_box .title{
  position: absolute;
  top: 0px;
  left: 0;
  width: 66px;
  height: 29px;


  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #013480;
}

.input_boxs .email_box .input_item{
  box-sizing: border-box;

  position: absolute;
  width: 487px;
  height: 81px;
  left: 0;
  top: 38px;

  border: 1px solid #013480;
  border-radius: 45px;
 
}

.input_boxs .email_box .input_item input{
  box-sizing: border-box;
  position: absolute;
  width: 477px;
  height: 75px;
  left: 0;
  top: 0;
  padding-left: 20px;
  outline: none;
  background: transparent;
  border-radius: 45px;
  border: none;
}

/*电话 */

.input_boxs .phone_number_box{
  position: absolute;
  width: 487px;
  height: 119px;
  top: 357px;
  left: 0;

}



.input_boxs .phone_number_box .title{
  position: absolute;
  top: 0px;
  left: 0;
  width: 66px;
  height: 29px;


  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #013480;
}

.input_boxs .phone_number_box .input_item{
  box-sizing: border-box;

  position: absolute;
  width: 487px;
  height: 81px;
  left: 0;
  top: 38px;

  border: 1px solid #013480;
  border-radius: 45px;
}

.input_boxs .phone_number_box .input_item input{
  box-sizing: border-box;
  position: absolute;
  width: 477px;
  height: 75px;
  left: 0;
  top: 0;
  padding-left: 20px;
  outline: none;
  background: transparent;
  border-radius: 45px;
  border: none;
}

/* 留言 */

.comment_box{
  position: absolute;
  width: 487px;
  height: 119px;
  top: 238px;
  left: 0;

}
.input_boxs .comment_box .title{
  position: absolute;
  top: 0px;
  left: 0;
  width: 66px;
  height: 29px;


  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #013480;
}

.input_boxs .comment_box .input_item{
  box-sizing: border-box;

  position: absolute;
  width: 487px;
  height: 81px;
  left: 0;
  top: 38px;

  border: 1px solid #013480;
  border-radius: 45px;
}

.input_boxs .comment_box .input_item input{
  box-sizing: border-box;
  position: absolute;
  width: 477px;
  height: 75px;
  left: 0;
  top: 0;
  padding-left: 20px;
  outline: none;
  background: transparent;
  border-radius: 45px;
  border: none;
}


.submit_button{
  position: absolute;
  width: 225px;
  height: 81px;
  left: 414px;
  top: 901px;

  background: #013480;
  border-radius: 45px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 81px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
}



/* 第二个界面 */
.content_box2 .title{
  position: absolute;
  width: 990px;
  height: 87px;
  left: 93px;
  top: 397px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 66px;
  line-height: 87px;

  color: #013480;

}

.content_box2 .subhead{
  position: absolute;
  width: 350px;
  height: 66px;
  left: 93px;
  top: 562px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 66px;
  /* identical to box height */


  color: #013480;
}
.content_box2 .right_image1{
  position: absolute;
  width: 829px;
  height: 1215px;
  left: 1110px;
  top: -135px;
  background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
  border-radius: 0px 0px 455px 455px;
  z-index: 1;
}

.content_box2 .right_image3{
  position: absolute;
  width: 527px;
  height: 1057px;
  left: 1261px;
  top: -167px;
  background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
  border-radius: 0px 0px 345px 345px;
  z-index: 2;
}

.content_box2 .right_image2{
  position: absolute;
  width: 602px;
  height: 602px;
  left: 1224px;
  top: 239px;

  background: url(../../images/feedback1.png);
  background-size: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
}

</style>