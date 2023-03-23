<template>
    <div class="backimg">
        <div class="title">加入文易通VIP，尊享账号等级配置权益</div>    
        <div class="subhead">-新会员·新服务-</div>
        <div class="under_title">海量论文、智慧分屏、超大容量...</div>
        <div class="left_line"></div>
        <div class="badge"></div>
        <div class="right_line"></div>
        <div class="vip_button"><span>加入VIP</span></div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.backimg{
    position: absolute;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    background-image: url(../../images/online-shopping.png);
    background-size: contain;
}

.title{
    position: absolute;
    width: 1240px;
    height: 92px;
    left: 340px;
    top: 244px;

    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 92px;

    color: #D8AA69;

}
.subhead{
    position: absolute;
    width: 285px;
    height: 53px;
    left: 818px;
    top: 385px;

    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 53px;
    /* identical to box height */


    color: #FFFFFF;
}

.left_line{
    position: absolute;
    width: 504px;
    height: 4px;
    left: 245px;
    top: 587px;
    background-image: url(../../images/shop_line.png);
    background: radial-gradient(72.98% 13682800.79% at 7.04% -0.01%, rgba(0, 0, 0, 0) 1.56%, rgba(122, 96, 59, 0.562963) 23.96%, rgba(158, 124, 77, 0.729453) 51.56%, #D8AA69 73.96%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


}

.right_line{
    position: absolute;
    width: 504px;
    height: 4px;
    left: 1171px;
    top: 586px;
    background-image: url(../../images/shop_line.png);
    background: radial-gradient(72.98% 13682800.79% at 7.04% -0.01%, rgba(0, 0, 0, 0) 1.56%, rgba(122, 96, 59, 0.562963) 23.96%, rgba(158, 124, 77, 0.729453) 51.56%, #D8AA69 73.96%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    transform: rotate(-180deg);
}
.under_title{

}

.badge{
    position: absolute;
    width: 112px;
    height: 112px;
    left: 905px;
    top: 531px;
    background-image: url(../../images/medal.png);
    background-size: contain;
}
.vip_button{
    position: absolute;
    width: 398px;
    height: 112px;
    left: 761px;
    top: 740px;
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 112px;
    text-align: center;
    color: #FFFFFF;
    
    background: linear-gradient(90deg, #D8AA69 26.01%, #E6A03D 90.33%);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 65.5px;
    cursor: pointer;
}
</style>