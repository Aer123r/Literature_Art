<template>
    <div class="paperView_body" >
        <div class="modify_icon"></div>
        <div class="share_icon"></div>
        <div class="collection_icon"></div>
        <div class="tag_icon"></div>
        <div class="title">{{ now_paper_unit.title }}</div>
        <div class="authors"><span v-for="(item,index) in now_paper_unit.author_list">{{ item }}</span></div>
        <div class="search_place">{{ now_paper_unit.search_place }}</div>
        <div class="abstract list_title">
            摘要：<span class="content1">{{ now_paper_unit.abstract_content }}</span>
        </div>
        <div class="keywords list_title">
            关键词：<span class="content1">{{ now_paper_unit.keywords }}</span>
        </div>
        <div class="album list_title">
            专辑：<span class="content1">{{ now_paper_unit.album}}</span>
        </div>
        <div class="topic list_title">
            专题：<span class="content1">{{ now_paper_unit.topic }}</span>
        </div>
        <div class="classify_number list_title">
            分类号：<span class="content1">{{ now_paper_unit.classify }}</span>
        </div>
        <div class="button_parent">
          <div class="read_online_button">在线阅读</div>
          <div class="download_button">PDF下载</div>
          <div class="file_classify_button">文献归档</div>
          <div class="download_number">下载量：{{ now_paper_unit.download_number }}</div>
          <div class="file_size">文件大小:{{ now_paper_unit.file_size }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { onMounted } from 'vue';

//选择对应的文献内容
onMounted(()=>{
  search_paper_unit(now_paper_id.value)
  console.log(now_paper_unit.value);

})

function search_paper_unit(paper_id:number){
    for(var i=0;i<paper_data_list.value.length;i++){
        if(paper_data_list.value[i].paper_id==paper_id){
            now_paper_unit.value=paper_data_list.value[i]
        }
    }
}
let now_paper_unit=ref({
        paper_id:0,
        title:'中医药创新发展的逻辑与策略探讨',
        author_list:['焦科兴','董美佳','李艺清','侯胜田'],
        search_place:'1.北京中医药大学管理学院   2.北京中医药大学国家中医药发展与战略研究院',
        abstract_content:'中医药事业发展正迎来前所未有的机遇，但也面临复杂严峻的挑战。突破中医药传承创新发展瓶颈逐渐成为中医药创新发展的关键一步。深入梳理分析中医药创新发展的内在逻辑，并提出中医药创新发展需要解放思想，摈弃路径依赖，切实落实中医药发展战略定位；促进中医医疗服务事业与中医药健康服务业共同发展；走出医院和药店，积极融入大健康产业；把握中医药健康旅游行业发展，推进中医药健康旅游目的地建设等创新发展策略。通过一系列战略行动实现中医药传承创新发展战略目标。',
        keywords:"中医药；创新发展；策略探讨",
        album:'医药卫生科技',
        topic:'中医学',
        classify:'R2-03',
        download_number:'121',
        file_size:'390K'


})
let now_paper_id=ref(0)

let paper_data_list=ref([
    {
        paper_id:0,
        title:'中医药创新发展的逻辑与策略探讨',
        author_list:['焦科兴','董美佳','李艺清','侯胜田'],
        search_place:'1.北京中医药大学管理学院   2.北京中医药大学国家中医药发展与战略研究院',
        abstract_content:'中医药事业发展正迎来前所未有的机遇，但也面临复杂严峻的挑战。突破中医药传承创新发展瓶颈逐渐成为中医药创新发展的关键一步。深入梳理分析中医药创新发展的内在逻辑，并提出中医药创新发展需要解放思想，摈弃路径依赖，切实落实中医药发展战略定位；促进中医医疗服务事业与中医药健康服务业共同发展；走出医院和药店，积极融入大健康产业；把握中医药健康旅游行业发展，推进中医药健康旅游目的地建设等创新发展策略。通过一系列战略行动实现中医药传承创新发展战略目标。',
        keywords:"中医药；创新发展；策略探讨",
        album:'医药卫生科技',
        topic:'中医学',
        classify:'R2-03',
        download_number:'121',
        file_size:'390K'
    }
])

</script>

<style scoped>
.paperView_body{
    width: 100%;
    /*background: #F5FAFF;*/
}

.title{
    position: absolute;
    left: 24vw;
    top: 5vh;
    font-family: 'Microsoft YaHei UI';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 48px;

    color: #000000;
}

.authors{
    position: absolute;
    left: 517px;
    top: 11vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #9B9595;
}

.authors span{
    margin-right: 75px;
}
.search_place{
    position: absolute;
    left: 464px;
    top: 191px;
    font-family: 'Microsoft YaHei UI';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    /*line-height: 25px;*/

    color: #676363;
}

.list_title{
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.045em;
    color: #000000;
}

.content1{
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 37px;
    letter-spacing: 0.045em;
    color:  rgba(88, 88, 88, 1);

}

.abstract,
.keywords,
.album,
.topic,
.classify_number,
.download_number,
.file_size
{
    position: absolute;
    left: 95px;
    top: 252px;
}
.keywords{
    top: 470px;
}

.album{
    top: 526px
}
.topic{
    top: 582px;
}
.classify_number{
    top: 638px;
}
@media(max-width: 500px){
  .authors{
    left: 19vw;
    top: 8vh;
  }
  .search_place{
    left: 9vw;
    top: 11vh;
    height: 4vh;
  }
  .abstract {
    width: 80vw;
    top: 16vh;
    left: 5vw;
  }
  .keywords {
    top: 40vh;
  }
  .album {
    top: 42vh;
  }
  .topic {
    top: 44vh;
  }
  .classify_number{
    top: 46vh;
  }
}
.download_number,
.file_size{
    font-family: 'Microsoft YaHei';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #BDBDBD;
}
.download_number{
    top: 778px;
}

.file_size{
    left: 225px;
    top: 778px;
}

/*icon们 */
.modify_icon,
.share_icon,
.collection_icon,
.tag_icon
{
    position: absolute;
    width: 30px;
    height: 30px;
    left: 1316px;
    top: 22px;
    background: url(../../images/modified_icon.png);
    background-size: contain;
    cursor: pointer;
}
.share_icon{
    left: 1360px;
    background-image: url(../../images/share_icon.png);

}
.collection_icon{
    left: 1412px;
    background-image: url(../../images/collection_icon.png);
}
.tag_icon{
    left: 1464px;
    background-image: url(../../images/tag_icon.png);
}
.button_parent {
  display: flex;
  flex-direction: row;
  position: relative;
  top: 65vh;
  left: 4vw;
}

/*三个按钮 */
.read_online_button,
.download_button,
.file_classify_button{
    position: relative;
    margin-left: 2vw;
    background: #EBF5FF;
    border-radius: 6px;
    font-family: 'Microsoft YaHei UI';
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 44px;
    /* identical to box height */
    color: #000000;
    cursor: pointer;
}
.read_online_button{
    background: #BDDFFF;
    /*left: 240px;*/
}

.download_button{
    background: #CFF4FF;
    /*left: 385px;*/
}

.file_classify_button{

}
</style>
