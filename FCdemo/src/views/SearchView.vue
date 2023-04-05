<template>

  <body class="background">

    <el-row class="tac" v-if="now_content_box2_page==1">
    <el-col >


        <div
        :class='now_search_method_index==1?"active_item":"nomal_item"'
        @click="change_search_method_index(1)"
        >
          <!-- <el-icon><icon-menu /></el-icon> -->
          <div>文献文库</div>
        </div>

        <div
        :class='now_search_method_index==2?"active_item":"nomal_item"'
        @click="change_search_method_index(2)"
        >
          <!-- <el-icon><icon-menu /></el-icon> -->
          <div>批量导入</div>
        </div>

        <div
        :class='now_search_method_index==3?"active_item":"nomal_item"'
        @click="change_search_method_index(3)"
        >
          <!-- <el-icon><document /></el-icon> -->
          <div>历史浏览</div>
        </div>

        <div
        :class='now_search_method_index==4?"active_item":"nomal_item"'
        @click="change_search_method_index(4)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <div>我的下载</div>
        </div>

        <div
        :class='now_search_method_index==5?"active_item":"nomal_item"'
        @click="change_search_method_index(5)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <div>我的关注</div>
        </div>

        <div
        :class='now_search_method_index==6?"active_item":"nomal_item"'
        @click="change_search_method_index(6)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <div>我的收藏</div>
        </div>

        <div
        :class='now_search_method_index==7?"active_item":"nomal_item"'
        @click="change_search_method_index(7)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <div>我的订阅</div>
        </div>

        <div
        :class='now_search_method_index==8?"active_item":"nomal_item"'
        @click="change_search_method_index(8)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <div>回收站</div>
        </div>
    </el-col>

  </el-row>

    <div class="search_box" v-if="now_search_method_index!=2">
      <div class="search_input_box">
        <input type="text" class="input_text" v-if="now_search_method_index==1" v-model="input_text" placeholder="输入关键字搜索" >
        <input type="text" class="input_text" v-else-if="now_search_method_index==3" v-model="input_text" placeholder="搜索 历史记录" >
        <input type="text" class="input_text" v-else-if="now_search_method_index==4" v-model="input_text" placeholder="搜索 我的下载" >
        <input type="text" class="input_text" v-else-if="now_search_method_index==5" v-model="input_text" placeholder="搜索 我的关注" >
        <input type="text" class="input_text" v-else-if="now_search_method_index==6" v-model="input_text" placeholder="搜索 我的收藏" >
        <input type="text" class="input_text" v-else-if="now_search_method_index==7" v-model="input_text" placeholder="搜索 我的订阅" >
        <input type="text" class="input_text" v-else-if="now_search_method_index==8" v-model="input_text" placeholder="搜索 回收站" >

        <div class="search_icon" @click="Search()"></div>
      </div>
    </div>

    <div class="choose_time_box" v-if="now_search_method_index!=2">
      <div class="calendar_icon"></div>

      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="选择时间范围"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        popper-class="dataPicker"
      />

    </div>

    <div class="search_button" @click="Search()" v-if="now_search_method_index==1">
      查询

    </div>

    <div class="search_button" v-if="now_search_method_index==3"  @click="all_delete_index=2">全部清空</div>
    <div class="search_button" v-else-if="now_search_method_index==4" @click="all_delete_index=1">全部删除</div>
    <div class="search_button" v-else-if="now_search_method_index==8" @click="all_delete_index=2">全部清空</div>

    <div class="advance_search" v-if="now_search_method_index==1">高级检索<div @click=""></div></div>

    <!-- 通用-全部删除-遮罩层 -->
    <div class="container_gray_box" v-if="all_delete_index!=0">

    </div>

    <!--通用-全部删除界面 -->
    <div class="all_delete_box" v-if="all_delete_index!=0">
      <div class="up_box">
        <div class="back_image"></div>
        <div class="outside_fork">
          <div class="fork" @click="all_delete_index=0"></div>
        </div>

      </div>

      <div class="down_box">
        <div class="title1">确定要{{ all_delete_content[all_delete_index] }}吗</div>

      <div class="title2">之后你将无法恢复他们</div>
      <div class="tip">-请谨慎选择-</div>
      <div class="yes_delete" @click="yes_delete()">确认删除</div>
      <div class="cancel_delete" @click="all_delete_index=0">取消</div>
      </div>

    </div>

     <!-- 第一个界面 -->
    <div class="content_box1" v-if="now_search_method_index==1&&is_paperView_index==0">
      <div class="classify">
        <div class="classify_title">分类导航</div>
        <div class="classify_item_box">
        <div class="classify_item" v-for="(item,index) in classify_item_array" :key="item">{{ item }}</div>
        </div>
      </div>

      <!-- 推荐盒子 -->
      <div class="commend_box">
        <div class="commend_nav">
            <div :class="commend_nav_item==0?'commend_nav_active_item':'item1'" @click="commend_nav_items(0)">推荐文献</div>
            <div :class="commend_nav_item==1?'commend_nav_active_item':'item2'" @click="commend_nav_items(1)">关注</div>
        </div>
        <!-- 推荐文献内容 -->
        <div class="commend_content" v-if="commend_nav_item==0">

          <div class="commend_content_item" v-for="(item,index) in commend_paper_data_list" :key="item">
            <div class="commend_each_item_box">
            <div class="commend_each_type">{{ item.type }}</div>
            <div class="commend_each_icon"></div>
            <div class="commend_each_title">{{ item.title }}</div>
            <div class="commend_each_author">作者:{{ item.author }}</div>
            <div class="commend_each_name">刊名:{{ item.paper_name }}</div>
            <div class="commend_each_year">年份:{{ item.year }}</div>
            <div class="commend_each_content">{{ item.content }}</div>
          </div>
          </div>

        </div>

        <div class="comment_content" v-if="commend_nav_item==1">
          <div> 我是关注框框</div>


        </div>

      </div>

      <div class="commend_teams_box">
        <div class="title">推荐团队</div>
        <div class="magnify_glass"></div>
        <div class="commend_teams_item_box" >
          <div class="commend_teams_item" v-for="(item,index) in commend_teams_data_list" :key="item">
            <div class="commend_teams_item_inner">
              <div class="image_box">
<!--                <div class="image1"></div>-->
<!--                <div class="image2"></div>-->
<!--                <div class="image3"></div>-->
<!--                <div class="image4"></div>-->

              </div>
              <div class="team_name">{{ item.team_name }}</div>
              <div class="team_subhead">{{ item.subhead }}</div>
<!--              <div class="team_paper_number">{{ item.paper_number }}篇资料</div>-->
<!--              <div class="team_member_number">{{ item.team_member_number }}名成员</div>-->
            </div>
          </div>
        </div>
        <div class="exchange" @click="exchange_commend_teams()">
          <div class="exchange_title">换一换</div>
          <div class="exchange_image"></div>
        </div>
      </div>

      <div class="commend_users_box">
        <div class="title">推荐用户</div>
        <div class="magnify_glass"></div>
          <div class="commend_users_outside_box">
          <div class="commend_users_item" v-for="(item,index) in commend_users_data_list" :key="item">
            <div class="commend_users_item_inner" >
               <div class="user_image"></div>
               <div class="user_name">{{ item.name }}</div>
               <div class="user_university">{{ item.university }}</div>
                <div class="user_major">{{ item.major }}</div>
                <div class="user_notice_button">+关注</div>
            </div>
          </div>
        </div>

        <div class="exchange" @click="exchange_commend_users()">
          <div class="exchange_title">换一换</div>
          <div class="exchange_image"></div>
        </div>
      </div>
    </div>
    <div class="content_box1" v-if="now_search_method_index==1&&is_paperView_index==1">
      <PaperView></PaperView>
    </div>

    <!-- 第二个界面-批量导入-文件归档 -->
    <div class="content_box2" v-if="now_search_method_index==2">
      <div class="content_box2_page1" v-if="now_content_box2_page==1">
      <div class="check_my_classify">查看我的<div @click="now_content_box2_pages(2)">文件归档</div></div>
      <div class="submit_title">上传文件</div>
      <!-- <div class="submit_file_box">
        <div class="submit_file_image"></div>

      </div> -->

      <el-upload
      v-model:file-list="fileList"
      class="submit_file_box"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :multiple="true"
      :on-exceed="handleExceed"
      list-type="picture"
  >
    <el-icon class="submit_file_image"></el-icon>
    <div class="submit_file_title">拖拽上传你的<div>浏览</div>文件</div>


    <template #tip>
		<div class="el-upload__tip">请上传格式为PDF文件</div>

	  </template>

  </el-upload>

  </div>

   <!-- 文件归档界面 -->
    <div class="content_box2_page2" v-else>
      <div class="line"></div>


          <div class="return_image" @click="to_box2_page1()"></div>
          <!-- 树形控件 -->
          <!-- <p>Using scoped slot</p>
        <el-tree
          :data="dataSource"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <template #default="{ node, data }">
            <div class="custom-tree-node">
              <div>{{ node.label }}</div>
              <div>
                <div @click="append(data)" class="tree_node_append"> </div>
                <div style="margin-left: 8px" @click="remove(node, data)" class="tree_node_delete"></div>
              </div>
            </div>
          </template>
        </el-tree> -->

        <div class="left_menu">
    <el-col >
      <el-menu

        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <div class="paper_image"></div>
            <div class="paper_title">文献库</div>
          </template>

          <el-sub-menu index="1-1">
            <template #title>

              分类1
            </template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-2">
            <template #title>分类2</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-3">
            <template #title>分类3</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-col>

  </div>

  <div class="page2_right_box">
        <div class="head_title">标题</div>
      <div class="head_modify_time">修改时间</div>
      <div class="head_capacity">文件大小</div>
      <div class="page2_left_box">
        <div class="title">文件归档</div>
        <div class="button_box">
          <div class="button1" @click="filing_operation_index=1">搜索添加</div>
          <div class="button1" @click="filing_operation_index=2">本地上传</div>
          <div class="button2" @click="filing_operation_index=3">导入库 </div>
        </div>


        <div class="item_box">
        <div class="each_item" v-for="(item,index) in filing_data_list" >
          <div class="each_item_inner">
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="history_choose_item(item)" >
        <div class="each_item_title">{{ item.title }}</div>
        <div class="each_time">{{ item.date }}</div>
        </div>
      </div>
     </div>
      </div>

    </div>
      </div>


    </div>

    <!-- 文件归档子界面 -->
    <!-- 检索添加界面 -->
    <div class="filing_page1" v-if="filing_operation_index==1">
      <div class="page1_box">
        <div class="page1_title">历史缓存</div>
        <div class="fork" @click="filing_operation_index=0"></div>
        <div class="data_item_box">
          <div class="each_item" v-for="(item,index) in filing_data_input_list" >
            <div class="each_inner_item">
          <input type="checkbox" name="" id=""  class="each_checkbox" @click="history_choose_item(item)" >
          <div class="title">{{ item.title }}</div>
          <div class="date">{{ item.date }}</div>
          <div class="upload_button" @click="load_to_filing_data_list(item)" >导入</div>
          </div>
        </div>
       </div>
      </div>
    </div>


    <!-- 第三个界面-历史记录 -->
    <div class="content_box3" v-if="now_search_method_index==3">


      <div class="all_records" >全部记录</div>
      <!-- 这里要修改参数的值 -->
      <div class="clear_cancel_block" v-if="delete_history_list.length!=0">
      <div class="already_chosen" >已经选中 <div>{{ delete_history_list.length }}</div>  项</div>
      <div class="delete_button" @click="mul_delete_history()">删除</div>
      <div class="cancel_button" @click="cancel_delete_history()">取消</div>
      </div>


      <div class="data_item_box3">
      <div class="each_item" v-for="(item,index) in history_array" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="history_choose_item(item)" >
        <div class="title">{{ item }}</div>

        <div class="each_delete_button" @click="delete_history(item)"></div>
      </div>
     </div>

    </div>


    <!-- 第四个界面-我的下载-->
    <div class="content_box4" v-if="now_search_method_index==4">
      <div class="all_records">全部记录</div>
      <div class="clear_cancel_block" v-if="download_delete_list.length!=0">
        <div class="already_chosen" >已经选中 <div>{{download_delete_list.length}}</div>  项</div>
        <div class="delete_button" @click="mul_delete_download()">删除</div>
        <div class="cancel_button" @click="download_cancel_delete()">取消</div>

      </div>

      <div class="data_item_box4">

        <div class="each_item" v-for="(item,index) in download_data_list" >
          <div class="each_item_inner">
          <input type="checkbox" name="" id=""  class="each_checkbox" @click="download_choose_item(item)" >
          <div class="title">{{ item.title }}</div>
          <div class="date">{{ item.date }}</div>

        </div>
        <div class="each_delete_button" @click="delete_download(item)"></div>

        </div>
     </div>


    </div>


    <!-- 第五个界面-我的关注-->
    <div class="content_box5" v-if="now_search_method_index==5">
      <div class="all_records">我的关注</div>

      <div class="data_item_box5">
      <div class="each_item" v-for="(item,index) in notice_persons_list" >
        <div class="each_inner">
        <div class="each_image"></div>
        <div class="each_name">{{ item.name }}</div>
        <div class="each_workplace">{{ item.workplace }}</div>
        <div class="each_major">{{ item.major }}</div>
        <div class="cancel_notice" @click="cancel_notice(item)">取消关注</div>
      </div>
      </div>
     </div>


    </div>

    <!-- 第六个界面-我的收藏 -->
    <div class="content_box6" v-if="now_search_method_index==6">
      <div class="all_records">我的收藏</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <div>{{ store.state.choose_items_array.length-1 }}</div>  项</div>
        <div class="delete_button">删除</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box6">
      <div class="collect_each_item" v-for="(item,index) in collect_data_list" >
        <div class="collect_each_inner">
          <div class="collect_user_image"></div>
          <div class="collect_icon" @click="delete_collection(item)"></div>
          <div class="collect_text" >收藏</div>
          <div class="collect_name">{{ item.name }}</div>
          <div class="collect_subhead">{{ item.subhead }}</div>
          <div class="collect_content">{{ item.content }}</div>

        </div>
      </div>
     </div>


    </div>

    <!-- 第七个界面-我的订阅 -->
    <div class="content_box7" v-if="now_search_method_index==7">
      <div class="all_records">我的订阅</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <div>{{ store.state.choose_items_array.length-1 }}</div>  项</div>
        <div class="delete_button">删除</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box7">
      <div class="notice_each_item" v-for="(item,index) in subscribe_data_list" >
        <div class="notice_each_inner">
          <div class="notice_image"></div>

          <div class="notice_name">{{ item.name }}</div>
          <div class="notice_content">{{ item.content }}</div>
          <div class="cancel_notice" @click="cancel_subscribe(item)">取消订阅</div>
          <div class="notice_member">{{ item.subscribe_number }}人订阅</div>
        </div>
      </div>
     </div>


    </div>

    <!-- 第八个界面-回收站 -->
    <div class="content_box8" v-if="now_search_method_index==8">
      <div class="all_records">回收站</div>
      <!-- 这里要修改参数的值 -->
      <div class="clear_cancel_block" v-if="delete_history_list.length!=0">
      <div class="already_chosen" >已经选中 <div>{{ delete_history_list.length }}</div>  项</div>
      <div class="delete_button" @click="mul_delete_trash()">还原</div>
      <div class="cancel_button" @click="trash_cancel_delete()">取消</div>
      </div>


      <div class="data_item_box8" v-if="trash_data_list.length==0">
        <div class="each_item" v-for="(item,index) in trash_data_list" >
          <div class="each_item_inner">
          <input type="checkbox" name="" id=""  class="each_checkbox" @click="trash_choose_item(item)" >
          <div class="each_title">{{ item.title }}</div>
          <div class="each_expire_time">{{ item.expire_time }}天后过期</div>
          <div class="each_date">{{ item.date }}</div>
          <div class="each_time">{{ item.modified_time }}</div>


        </div>
        </div>
     </div>

     <div class="trash_empty_box" v-else>
        <div class="trash_empty_image"></div>
        <div class="trash_empty_title">暂无内容</div>
     </div>

    </div>
  </body>


</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { UploadFilled } from '@element-plus/icons-vue'
import { ref,onMounted,reactive} from 'vue';
import {HistoryGetUser,searchWord,historyDel} from '../api/search_controller'
import { useStore } from 'vuex';
import { UploadProps, UploadUserFile, useId } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router';
import PaperView from './PaperView.vue';


var uid=localStorage.getItem('uid')??""

onMounted(()=>{
  localStorage.setItem('now_search_method_index','1')
  HistoryGetUser(uid).then((res)=>{
    console.log(uid,'uid');
  }).catch(res2=>{
    console.log(res2);
    history_array.value=res2
    console.log(history_array.value);
  })
})

const store=useStore();
let now_search_method_index=ref(parseInt(localStorage.getItem('now_search_method_index')??'1'))

// let now_search_method=ref('主题')
// let search_methods=ref(['主题','关键字','篇关摘','篇名','作者','第一作者','通讯作者','作者单位','参考文献','全文','摘要'])

let dropdown_display=ref(true)
let input_text=ref('')


/*通用 */
let all_delete_index=ref(0)
let all_delete_content=ref(['','删除文件','清空记录'])
function yes_delete(){
  if(now_search_method_index.value==3){
    history_all_clear()
  }
  else if(now_search_method_index.value==4){
    download_all_clear()
  }
  else if(now_search_method_index.value==8){
    trash_all_clear()
  }
}



//搜索
function Search(){

    searchWord(input_text.value,uid).then(res=>{
    console.log('searchWord',res);
    })


  localStorage.setItem('now_search_method_index','3')
  location.reload()
}


/*界面1-文献文库*/
let is_paperView_index=ref(1)
let commend_nav_item=ref(0)
function commend_nav_items(index:number){
  commend_nav_item.value=index
  console.log(commend_nav_item.value);

}

let classify_item_array=ref(['基础医学','临床医学','法医学','检验医学','预防医学','保健医学','康复医学','其他'])
// 推荐文献列表数据
let commend_paper_data_list=ref([
  {
    type:'【期刊】',
    title:'基于UNet的医学图像分割综述',
    author:'叶晓滨',
    paper_name:'中医研究',
    year:'2021',
    content:"麻黄源自麻黄科草麻黄、中麻黄或木贼麻黄的干燥草质茎,常用药对可以总结为同类相须（如麻黄-桂枝）、异类相使（如麻黄-附子）、升降相宜（如麻黄-苦杏仁）、寒热相制（如麻黄-生石膏）和散补兼施（如麻黄-甘草）5个方面。药对配伍后,化学成分发生了改变,如麻黄-桂枝配伍后,有效成分含量下降,并且产生..."
  },
  {
    type:'【期刊】',
    title:'基于UNet的医学图像分割综述',
    author:'叶晓滨',
    paper_name:'中医研究',
    year:'2021',
    content:"麻黄源自麻黄科草麻黄、中麻黄或木贼麻黄的干燥草质茎,常用药对可以总结为同类相须（如麻黄-桂枝）、异类相使（如麻黄-附子）、升降相宜（如麻黄-苦杏仁）、寒热相制（如麻黄-生石膏）和散补兼施（如麻黄-甘草）5个方面。药对配伍后,化学成分发生了改变,如麻黄-桂枝配伍后,有效成分含量下降,并且产生..."
  },
  {
    type:'【期刊】',
    title:'基于UNet的医学图像分割综述',
    author:'叶晓滨',
    paper_name:'中医研究',
    year:'2021',
    content:"麻黄源自麻黄科草麻黄、中麻黄或木贼麻黄的干燥草质茎,常用药对可以总结为同类相须（如麻黄-桂枝）、异类相使（如麻黄-附子）、升降相宜（如麻黄-苦杏仁）、寒热相制（如麻黄-生石膏）和散补兼施（如麻黄-甘草）5个方面。药对配伍后,化学成分发生了改变,如麻黄-桂枝配伍后,有效成分含量下降,并且产生..."
  },
  {
    type:'【期刊】',
    title:'基于UNet的医学图像分割综述',
    author:'叶晓滨',
    paper_name:'中医研究',
    year:'2021',
    content:"麻黄源自麻黄科草麻黄、中麻黄或木贼麻黄的干燥草质茎,常用药对可以总结为同类相须（如麻黄-桂枝）、异类相使（如麻黄-附子）、升降相宜（如麻黄-苦杏仁）、寒热相制（如麻黄-生石膏）和散补兼施（如麻黄-甘草）5个方面。药对配伍后,化学成分发生了改变,如麻黄-桂枝配伍后,有效成分含量下降,并且产生..."
  },
  {
    type:'【期刊】',
    title:'基于UNet的医学图像分割综述',
    author:'叶晓滨',
    paper_name:'中医研究',
    year:'2021',
    content:"麻黄源自麻黄科草麻黄、中麻黄或木贼麻黄的干燥草质茎,常用药对可以总结为同类相须（如麻黄-桂枝）、异类相使（如麻黄-附子）、升降相宜（如麻黄-苦杏仁）、寒热相制（如麻黄-生石膏）和散补兼施（如麻黄-甘草）5个方面。药对配伍后,化学成分发生了改变,如麻黄-桂枝配伍后,有效成分含量下降,并且产生..."
  },
  {
    type:'【期刊】',
    title:'基于UNet的医学图像分割综述',
    author:'叶晓滨',
    paper_name:'中医研究',
    year:'2021',
    content:"麻黄源自麻黄科草麻黄、中麻黄或木贼麻黄的干燥草质茎,常用药对可以总结为同类相须（如麻黄-桂枝）、异类相使（如麻黄-附子）、升降相宜（如麻黄-苦杏仁）、寒热相制（如麻黄-生石膏）和散补兼施（如麻黄-甘草）5个方面。药对配伍后,化学成分发生了改变,如麻黄-桂枝配伍后,有效成分含量下降,并且产生..."
  },
])

//推荐团队列表数据
let commend_teams_data_list=ref([
  {
    team_name:'中医药文献交流群',
    subhead:'湖南医疗文献交流群，欢迎有兴趣的朋友加入',
    paper_number:'1210',
    team_member_number:'529'
  },
  {
    team_name:'中医药文献交流群2',
    subhead:'湖南医疗文献交流群，欢迎有兴趣的朋友加入',
    paper_number:'1210',
    team_member_number:'529'
  },
  {
    team_name:'中医药文献交流群3',
    subhead:'湖南医疗文献交流群，欢迎有兴趣的朋友加入',
    paper_number:'1210',
    team_member_number:'529'
  },
  {
    team_name:'中医药文献交流群4',
    subhead:'湖南医疗文献交流群，欢迎有兴趣的朋友加入',
    paper_number:'1210',
    team_member_number:'529'
  },
  {
    team_name:'中医药文献交流群5',
    subhead:'湖南医疗文献交流群，欢迎有兴趣的朋友加入',
    paper_number:'1210',
    team_member_number:'529'
  },
])
function exchange_commend_teams(){
  commend_teams_data_list.value.sort(function () {
    return Math.random() - 0.5;   // 值为 -0.5 ~ 0.5 的随机数
  });
}

//推荐用户列表数据
let commend_users_data_list=ref([
  {
    name:'王乐鹏',
    university:'北京中医药大学',
    major:'中医学;外国语言文字;高等教育'
  },
  {
    name:'王乐鹏2',
    university:'北京中医药大学',
    major:'中医学;外国语言文字;高等教育'
  },
  {
    name:'王乐鹏3',
    university:'北京中医药大学',
    major:'中医学;外国语言文字;高等教育'
  },
  {
    name:'王乐鹏4',
    university:'北京中医药大学',
    major:'中医学;外国语言文字;高等教育'
  },
])

//切换推荐用户函数
function exchange_commend_users(){
  commend_users_data_list.value.sort(function () {
    return Math.random() - 0.5;   // 值为 -0.5 ~ 0.5 的随机数
  });
}


/*界面2 批量导入——文件归档 */

let now_content_box2_page=ref(1)
function now_content_box2_pages(index:number){
  now_content_box2_page.value=index
}



function change_search_method_index(index:number){
  now_search_method_index.value=index
}


//文件归档
function to_box2_page1(){
  now_content_box2_page.value=1
}

/*文件归档操作 */
let filing_operation_index=ref(0)

let filing_data_input_list=ref([
{
    title:'某医院血液科24种抗肿瘤药超说明书用药评价11111',
    date:'2023/11/15    13:15'
  },
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价22222',
    date:'2023/11/15    13:15'
  },
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价33333',
    date:'2023/11/15    13:15'
  }
])

let filing_data_list=ref([
{
    title:'某医院血液科24种抗肿瘤药超说明书用药评价1',
    date:'2023/11/15    13:15'
  },
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价2',
    date:'2023/11/15    13:15'
  },
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价3',
    date:'2023/11/15    13:15'
  }
])


function load_to_filing_data_list(item){
  for (var i = 0; i < filing_data_input_list.value.length; i++) {
    if (filing_data_input_list.value[i] === item) {
      filing_data_input_list.value.splice(i, 1);
      i--;
    }
  }
  filing_data_list.value.unshift(item)
}

// 树形控件
interface Tree {
  id: number
  label: string
  children?: Tree[]
}
let id = 1000

const append = (data: Tree) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node: Node, data: Tree) => {
  const parent = node.parent
  const children: Tree[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const renderContent = (
  h,
  {
    node,
    data,
    store,
  }: {
    node: Node
    data: Tree
    store: Node['store']
  }
) => {
  return h(
    'div',
    {
      class: 'custom-tree-node',
    },
    h('div', null, node.label),
    h(
      'div',
      null,
      h(
        'a',
        {
          onClick: () => append(data),
        },
        'Append '
      ),
      h(
        'a',
        {
          style: 'margin-left: 8px',
          onClick: () => remove(node, data),
        },
        'Delete'
      )
    )
  )
}

const dataSource = ref<Tree[]>([
  {
    id: 1,
    label: '文献库',
    children: [
      {
        id: 4,
        label: '分类1',
        children: [
          {
            id: 9,
            label: '1111',
          },
          {
            id: 10,
            label: '1111',
          },
        ],
      },
      {
        id: 4,
        label: '分类2',
        children: [
          {
            id: 9,
            label: '1111',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
      {
        id: 4,
        label: '分类3',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },


    ],


  },

])




const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}






/*上传文件 */


const fileList = ref<UploadUserFile[]>([
  {
    name: '文件1.pdf',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: '文件2.pdf',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },

])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile);
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfert of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}

/*文献归档菜单*/
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

/*第三个界面——历史记录 */

function history_choose_item(item:string){
  if(delete_history_list.value.indexOf(item)==-1){
    delete_history_list.value.unshift(item)
  }
  else{
    let index_pos=delete_history_list.value.indexOf(item);
    delete_history_list.value.splice(index_pos, 1);
  }

  console.log(item,"item");


}
let history_array=ref([])
let delete_history_list=ref([])

function mul_delete_history(){

  for (var i = 0; i < delete_history_list.value.length; i++){
    historyDel(delete_history_list.value[i],uid).then((res)=>{

    })

  }
  cancel_delete_history()

}


function delete_history(item:string){

  for (var i = 0; i < history_array.value.length; i++) {
    if (history_array.value[i] === item) {
      history_array.value.splice(i, 1);
      i--;
    }
  }
  historyDel(item,uid).then((res)=>{

  })
}


function cancel_delete_history(){
    delete_history_list.value=[]
    delete_history_list.value.length=0
    localStorage.setItem('now_search_method_index','3')
    location.reload()
}

// 清除全部历史记录
function history_all_clear(){
  all_delete_index.value=0
  for(var i=0;i<history_array.value.length;i++){
    delete_history_list.value[i]=history_array.value[i]
  }
  mul_delete_history()
}


/*第四个界面-我的下载 */
let download_data_list=ref([
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价1',
    date:'2023/11/15    13:15'
  },
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价2',
    date:'2023/11/15    13:15'
  },
  {
    title:'某医院血液科24种抗肿瘤药超说明书用药评价3',
    date:'2023/11/15    13:15'
  }
])

let download_delete_list=ref([])

function mul_delete_download(){
  for (var i = 0; i < download_delete_list.value.length; i++){
    // historyDel(delete_trash_list.value[i],uid).then((res)=>{

    // })

  }
  download_cancel_delete()
}

function download_cancel_delete(){
  download_delete_list.value=[]
  download_delete_list.value.length=0
  localStorage.setItem('now_search_method_index','4')
  location.reload()
}

function delete_download(item){

for (var i = 0; i < download_data_list.value.length; i++) {
  if (download_data_list.value[i] === item) {
    download_data_list.value.splice(i, 1);
    i--;
  }
}
// historyDel(item,uid).then((res)=>{

// })
}


function download_choose_item(item){
  if(download_delete_list.value.indexOf(item)==-1){
    download_delete_list.value.unshift(item)
  }
  else{
    let index_pos=download_delete_list.value.indexOf(item);
    download_delete_list.value.splice(index_pos, 1);
  }

  console.log(item,"item");

}

//清除全部-我的下载
function download_all_clear(){
  all_delete_index.value=1
  for(var i=0;i<download_data_list.value.length;i++){
    download_delete_list.value[i]=download_data_list.value[i]
  }
  mul_delete_download()
}


/*第五个界面——我的关注 */
let notice_persons_list=ref([
  {name:'吴高源',
   workplace:'福州大学',
   major:'自动化'
  },
  {name:'叶晓滨',
   workplace:'厦门市思明区筼筜街道社区卫生服务中心',
   major:'中药学;中医学;药学'
  },
  {name:'叶晓滨',
   workplace:'厦门市思明区筼筜街道社区卫生服务中心',
   major:'中药学;中医学;药学'
  },
  {name:'叶晓滨',
   workplace:'厦门市思明区筼筜街道社区卫生服务中心',
   major:'中药学;中医学;药学'
  },

])

function cancel_notice(item){
  for (var i = 0; i < notice_persons_list.value.length; i++) {
    if (notice_persons_list.value[i] === item) {
      notice_persons_list.value.splice(i, 1);
      i--;
    }
  }
}


// 第六个界面-我的收藏
let collect_data_list=ref([
  {
    name:'徐光宪    冯春    马飞',
    subhead:'基于UNet的医学图像分割综述',
    content:'UNet作为卷积神经网络（CNN）中最重要的语义分割框架之一，广泛地应用于医学图像的分类、分割和目标检测等图像处理任务。本文对UNet的结构原理进行了阐述，并对基于UNet网络及变体模型进行了全面综述，从...',
  },
  {
    name:'吴娜',
    subhead:'医学叙事能力中共情能力与文学阅读的审美路径',
    content:'共情能力是医学叙事能力的核心之一，相较于外感知与内感知，共情是理解陌生他者的关键方式，高层次共情能力可以借助后天的训练提升。文学除了可以提供共情资源外，审美移情与共情在对象的性质、主客间的关系、发......',
  },
  {
    name:'徐光宪    冯春    马飞',
    subhead:'基于UNet的医学图像分割综述',
    content:'UNet作为卷积神经网络（CNN）中最重要的语义分割框架之一，广泛地应用于医学图像的分类、分割和目标检测等图像处理任务。本文对UNet的结构原理进行了阐述，并对基于UNet网络及变体模型进行了全面综述，从...',
  },
  {
    name:'徐光宪    冯春    马飞',
    subhead:'基于UNet的医学图像分割综述',
    content:'UNet作为卷积神经网络（CNN）中最重要的语义分割框架之一，广泛地应用于医学图像的分类、分割和目标检测等图像处理任务。本文对UNet的结构原理进行了阐述，并对基于UNet网络及变体模型进行了全面综述，从...',
  },
  {
    name:'徐光宪    冯春    马飞',
    subhead:'基于UNet的医学图像分割综述',
    content:'UNet作为卷积神经网络（CNN）中最重要的语义分割框架之一，广泛地应用于医学图像的分类、分割和目标检测等图像处理任务。本文对UNet的结构原理进行了阐述，并对基于UNet网络及变体模型进行了全面综述，从...',
  },
  {
    name:'徐光宪    冯春    马飞',
    subhead:'基于UNet的医学图像分割综述',
    content:'UNet作为卷积神经网络（CNN）中最重要的语义分割框架之一，广泛地应用于医学图像的分类、分割和目标检测等图像处理任务。本文对UNet的结构原理进行了阐述，并对基于UNet网络及变体模型进行了全面综述，从...',
  },
])

function delete_collection(item){
  for (var i = 0; i < collect_data_list.value.length; i++) {
    if (collect_data_list.value[i] === item) {
      collect_data_list.value.splice(i, 1);
      i--;
    }
  }
}



//第七个界面-我的订阅
let subscribe_data_list=ref([
  {
    name:"中医药学研究111",
    content:'中药学是研究中药的基本理论和临床应用的学科，是中医药各专业的基础学科之一。内容包括中药、中药学的概念...',
    subscribe_number:'111'

  },
  {
    name:"中医药学研究222",
    content:'中药学是研究中药的基本理论和临床应用的学科，是中医药各专业的基础学科之一。内容包括中药、中药学的概念...',
    subscribe_number:'222'

  },
  {
    name:"中医药学研究333",
    content:'中药学是研究中药的基本理论和临床应用的学科，是中医药各专业的基础学科之一。内容包括中药、中药学的概念...',
    subscribe_number:'333'

  },

])

function cancel_subscribe(item){
  for (var i = 0; i < subscribe_data_list.value.length; i++) {
    if (subscribe_data_list.value[i] === item) {
      subscribe_data_list.value.splice(i, 1);
      i--;
    }
  }
}


// 第八个界面-回收站
let trash_data_list=ref([
  {
    title:'新医科背景下的康复医学教育改革思考',
    expire_time:'30',
    date:'2023/3/8',
    modified_time:'13:17',
  },
  {
    title:'新医科背景下的康复医学教育改革思考2',
    expire_time:'30',
    date:'2023/3/8',
    modified_time:'13:17',
  },
  {
    title:'新医科背景下的康复医学教育改革思考3',
    expire_time:'30',
    date:'2023/3/8',
    modified_time:'13:17',
  },
  {
    title:'新医科背景下的康复医学教育改革思考4',
    expire_time:'30',
    date:'2023/3/8',
    modified_time:'13:17',
  },

])

let delete_trash_list=ref([])

function trash_choose_item(item){
  if(trash_data_list.value.indexOf(item)==-1){
    delete_trash_list.value.unshift(item)
  }
  else{
    let index_pos=delete_trash_list.value.indexOf(item);
    delete_trash_list.value.splice(index_pos, 1);
  }

  console.log(item,"item");


}

function mul_delete_trash(){


  for (var i = 0; i < delete_trash_list.value.length; i++){
    // historyDel(delete_trash_list.value[i],uid).then((res)=>{

    // })

  }
  trash_cancel_delete()

}


function delete_trash(item){
  for (var i = 0; i < trash_data_list.value.length; i++) {
    if (trash_data_list.value[i] === item) {
      trash_data_list.value.splice(i, 1);
      i--;
    }
  }
  // historyDel(item,uid).then((res)=>{

  // })
}


function trash_cancel_delete(){
  delete_trash_list.value=[]
  delete_trash_list.value.length=0
  localStorage.setItem('now_search_method_index','8')
  location.reload()
}

//清空全部-回收站
function trash_all_clear(){
  all_delete_index.value=2
  for(var i=0;i<trash_data_list.value.length;i++){
    delete_trash_list.value[i]=trash_data_list.value[i]
  }
  mul_delete_trash()
}
</script>

<style scoped lang="less">
/*侧边栏 */
.left_box{
  position: absolute;
  width: 282px;
  height: 990px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
}

.left_each_item{
  position: absolute;
  width: 282px;
  height: 113px;
  left: 0px;
  top: 90px;

  background:#FFFFFF;
}

.tac{
  position: absolute;
  width: 17vw;
  max-width: 350px;
  height: 86vh;
  left: 0px;
  top: 86px;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  z-index: 3;
}

.nomal_item{
  position: relative;
  left: -6vw+4px;
  width: 20vw;
  max-width: 100%;
  height: 7vh;
  cursor: pointer;
  margin-top: 20px;
}

.active_item{
  position: relative;
  left: -6vw+4px;
  width: 20vw;
  max-width: 100%;
  height: 7vh;
  background: #EBF5FF;
  cursor: pointer;
  margin-top: 20px;

}


.active_item div,.nomal_item div{
  position: relative;
  top: 0;
  left: 1vw;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: #000000;
  height: 100%;
  line-height: 7vh;
  margin-left: 5vw;
}
@media (max-width:400px) {
  .active_item div,.nomal_item div{
    font-size: 50px;
  }
}
/*搜索框 */
.search_box{
  position: absolute;
  width: 90vw;
  height: 5vh;
  left: 15vw;
  top: 87px;
  background: #FFFFFF;

}

.search_input_box{
  box-sizing: border-box;
  position: absolute;
  width: 40vw;
  height: 4vh;
  left: 133px;
  top: 1.3vh;
  border: 1px solid #D9D9D9;
  border-radius: 6px;
  z-index: 3;
}
@media(max-width: 500px){
  .search_input_box{
    height: 3vh;
  }
}

.input_text{
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 747px;
  height: 3.6vh;
  left: 80px;
  top: 0px;
  border-radius: 6px;
  border: none;
  outline: none;
  overflow: hidden;
  z-index: 3;
  font-size: 28px;
  background-color: transparent;
}

.input_text::placeholder{
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}
@media(max-width: 500px){
  .search_input_box{
    .input_text{
      font-size: 50px;
    }
    .input_text::placeholder {
      font-size: 50px;
    }
  }


}
.search_icon{
  width: 31px;
  height: 31px;
  position: absolute;
  top:12px;
  left:27px;
  background-image: url(../../images/search_icon\ 2.png);
  background-size: contain;
  cursor: pointer;
  z-index: 3;
}


.choose_time_box{
  box-sizing: border-box;
  position: absolute;
  width: 418px;
  height: 3vh;
  left: 1285px;
  border-radius: 6px;
  z-index: 3;
}


.calendar_icon{
  position: absolute;
  width: 30px;
  height: 30px;
  left: -20px;
  top: -44px;

  background: url(../../images/calendar.png);
  background-size: contain;
  cursor: pointer;
  z-index: 2;
}

.search_button{
  position: absolute;
  width: 129px;
  height: 55px;
  left: 1604px;
  top: 106px;

  background: #013480;
  border-radius: 6px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 55px;
  /* identical to box height */

  text-align: center;
  color: #FFFFFF;
  cursor: pointer;

}



 ::v-deep .el-date-editor .el-input__icon:nth-child(1){
  display: none;

}
::v-deep .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date input{

    padding-left: 43px;
    background-color: transparent ;
    height: 42px;
    border: none;
    outline: none;
}


.el-dropdown{
  position: absolute;
  width: 171px;
  height: 72px;
  left: 147px;
  top: 100px;

}

.el-dropdown-link{
  width: 171px;
  height: 72px;
  position: absolute;
  top: 0px;
  left: -100px;

}

.search_method_text{
  position: absolute;
  width: 100px;
  height: 29px;
  left: 40px;
  top: 18px;
  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;


}
.line{
  position: absolute;
  width: 29px;
  height: 0px;
  left: 171px;
  top: 35px;

  border: 1px solid #B9B6B6;
  transform: rotate(90deg);
}

.arrow_down{
  position: absolute;
  top: 131px;
  left: 189px;
  width: 17px;
  height: 12px;
  background-image: url("../../images/Polygon\ 1.png");
  background-size: contain;
}



.search_method_box{
  width: 171px;

  position: absolute;
  left: 47px;
  top: 159px;
  background: #F8F8F8;
  border-radius: 11px;
}

.each_search_item{
  width: 171px;
  height: 43px;

  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* identical to box height */
  color: #9B9595;
  line-height: 43px;
  cursor: pointer;

}

.each_search_item:hover{
 background-color: #9AC1E4;
}


.advance_search{
  position: absolute;
  width: 125px;
  height: 20px;
  left: 1770px;
  top: 119px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
}

.advance_search div{
  position: absolute;
  width: 20px;
  height: 20px;
  left: 99px;
  top: 4px;
  background-image: url(../../images/right_arrow.png);
  background-size: contain;
  cursor: pointer;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
        position: absolute;;
        width: 744px;
        height: 581px;
        left: 726px;
        top: 500px;
    }
    100% {
        opacity: 1;
        position: absolute;
        width: 744px;
        height: 581px;
        left: 726px;
        top: 238px;
    }
}


/* 遮罩层 */
.container_gray_box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(151, 150, 150, 0.5);
    z-index: 3;
}

/* 全部删除界面 */
.all_delete_box{
  animation: fadeInAnimation ease 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  position: absolute;
  width: 744px;
  height: 581px;
  left: 726px;
  top: 238px;
  background: #F2F9FF;
  z-index: 4;
}

.all_delete_box .up_box{
  position: absolute;
  width: 745px;
  height: 309px;
  background: #D5EBFF;
}

.all_delete_box .back_image{
  position: absolute;
  width: 410px;
  height: 230px;
  left: 168px;
  top: 40px;

  background: url(../../images/all_delete_back.png);
  background-size: contain;
}

.all_delete_box .outside_fork{
  position: absolute;
  width: 80px;
  height: 76px;
  left: 664px;
  top: 1px;
  background-image: url(../../images/outside_fork.png);
  background-size: contain;
}

.all_delete_box .outside_fork .fork{
  position: absolute;
  width: 28px;
  height: 28px;
  left: 37px;
  top: 16px;

  background: url(../../images/fork2.png);
  background-size: contain;
  cursor: pointer;
}


.all_delete_box .down_box{
  width: 744px;
  height: 272px;
  position: absolute;
  top: 309px;
  left: 0;

}

.all_delete_box  .down_box .title1{
  position: absolute;
  width: 300px;
  height: 34px;
  left: 262px;
  top: 22px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  letter-spacing: 0.065em;

  color: #000000;
}

.all_delete_box  .down_box .title2{
  position: absolute;
  width: 300px;
  height: 34px;
  left: 234px;
  top: 70px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;
  letter-spacing: 0.065em;

  color: #000000;
}

.all_delete_box  .down_box .tip{
  position: absolute;
  width: 150px;
  height: 21px;
  left: 322px;
  top: 114px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.065em;

  color: #9AC1E4;
}

.all_delete_box  .down_box .yes_delete{
  box-sizing: border-box;

  position: absolute;
  width: 212px;
  height: 52px;
  left: 266px;
  top: 151px;
  text-align: center;
  background: #DCEEFF;
  border: 3px solid #1559DD;
  border-radius: 28.5px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 52px;
  letter-spacing: 0.065em;

  color: #013480;
  cursor: pointer;
}

.all_delete_box  .down_box .cancel_delete{
  position: absolute;
  width: 50px;
  height: 26px;
  left: 351px;
  top: 214px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.065em;
  text-align: center;
  color: #013480;
  cursor: pointer;
}

/*第一个界面 */

.content_box1 {
  position: relative;
  width: 80vw;
  height: 80vh;
  top: 4vh;
  left: 6vw;
  background-color: #EBF5FF;
}

.classify{
  position: relative;
  padding-top: 99px;
  width: 17vw;
  height: 80vh;
  left: 52px;
  top: 25px;

  background: #FFFFFF;
}

.classify_title{
  position: absolute;
  left: 42%;
  transform: translateX(-50%);
  width: fit-content;
  top: 20px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 149.98%;
  /* identical to box height, or 39px */


  color: #000000;
}

.classify_item_box{

}
.classify_item{
  float: left;
  width: 14vw;
  height: 5vh;
  text-align: center;
  vertical-align: center;
  line-height: 60px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #013480;
  cursor: pointer;
}

.classify_item:hover{
  background-color:  #67b5f5;
}

.commend_box{
  position: absolute;
  top: 25px;
  left: 326px;
  width: 902px;
  height: 853px;
  background-color: #fff;
}

.commend_nav{
  width: 902px;
  height: 86px;
  border-bottom: 1px solid #F0F0F0;

}

.commend_box .commend_nav .item1,
.commend_box .commend_nav .item2,
.commend_nav_active_item
{
  float: left;
  width: 13vw;
  height: 39px;
  margin-left: 39px;
  padding: 19px 0;
  margin-top: 4px;
  text-align: center;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 149.98%;
  /* identical to box height, or 39px */
  cursor: pointer;


}


.commend_nav_active_item{
  color: #1559DD;
  border-bottom: solid 5px #1559DD;
}

/* 推荐文献盒子 */
.commend_content{
  position: relative;
  width: 50vw;
  height: 70vh;
  padding: 18px;
  overflow: scroll;
}
.commend_content_item{

  width: 50vw;
  height: 24vh;
  background: #FAFAFA;
  margin-bottom: 16px;
  border-radius: 6px;

}

.commend_each_item_box{
  position: absolute;
  width: 863px;
  height: 205px;

}

.commend_each_type{
  position: absolute;
  width: 20vw;
  height: 29px;
  left: 39px;
  top: 27px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #000000;
}

.commend_each_icon{
  position: absolute;
  width: 23px;
  height: 23px;
  left: 136px;
  top: 32px;
  background-image: url(../../images/推荐文献icon.png);
  background-size: contain;
}


.commend_each_title{
  position: absolute;
  width: 40vw;
  height: 129px;
  left: 169px;
  top: 27px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;

}
@media(max-width: 500px){
  .commend_each_title{
    top: 3vh;
    left: 27px;
  }
}
.commend_each_author{
  position: absolute;
  width: 15vw;
  height: 21px;
  left: 45px;
  top: 5.5vh;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #878686;


}

.commend_each_name{
  position: absolute;
  width: 20vw;
  height: 21px;
  left: 20vw;
  top: 5.5vh;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #878686;

}

.commend_each_year{
  position: absolute;
  width: 20vw;
  height: 21px;
  left: 20vw;
  top: 7.9vh;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #878686;
}

.commend_each_content{
  position: absolute;
  width: 747px;
  height: 13vh;
  left: 53px;
  top: 10vh;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 2vh;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:5;
  color: #878686;

}



/* 推荐团队盒子 */
.commend_teams_box{
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 20vw;
  height: 35vh;
  left: 1253px;
  top: 25px;

  background: #FFFFFF;
  border-radius: 9px;

}
@media(max-width: 800px){
  .commend_teams_box {
    display: none;
  }
  .commend_users_box {
    display: none;
  }
}
.commend_teams_box .title{
  position: absolute;
  width: fit-content;
  height: 39px;
  left: 45px;
  top: 23px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 149.98%;
  /* identical to box height, or 39px */


  color: #000000;
}

.commend_teams_box .magnify_glass{
  position: absolute;
  width: 26px;
  height: 26px;
  left: 279px;
  top: 29px;

  background: url(../../images/search_icon\ 2.png);
  background-size: contain;
}


.commend_teams_box .commend_teams_item{
  width: 20vw;
  height: 30vh;
  border-bottom: 1px solid #F0F0F0;

}
.commend_teams_box .commend_teams_item_box{

  position: absolute;
  left: 0;
  top: 55px;
  width: 342px;
  height: 333px;
  overflow: hidden;

}

.commend_teams_box .commend_teams_item{
  width: 342px;
  height: 110px;
}

.commend_teams_box .commend_teams_item_inner{
  position: relative;
  width: 20vw;
  height: 4vh;
}

.commend_teams_box .image_box{
  position: absolute;
  left: 38px;
  top: 44px;
  width: 60px;
  height: 60px;
}

.commend_teams_box .image_box .image1,
.commend_teams_box .image_box .image2,
.commend_teams_box .image_box .image3,
.commend_teams_box .image_box .image4
{
  float: left;
  margin-right: 2px;
  margin-bottom: 2px;
  width: 27.37px;
  height: 27.37px;
  background-image: url(../../images/头像.png);
  background-size: contain;
}
.commend_teams_box .image_box .image2{

}
.commend_teams_box .image_box .image3{

}
.commend_teams_box .image_box .image4{

}


.commend_teams_box .team_name{
  position: absolute;
  width: 22vw;
  height: 21px;
  left: 2vw;
  top: 1vh;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 149.98%;
  /* identical to box height, or 21px */


  color: #000000;
}

.commend_teams_box .team_subhead{
  position: absolute;
  width: 200px;
  height: 5vh;
  left: 2vw;
  top: 4vh;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 149.98%;
  overflow: hidden;
  /* identical to box height, or 15px */


  color: rgba(0, 0, 0, 0.68);
}

.commend_teams_box .team_paper_number{
  position: absolute;
  width:140px;
  height: 12px;
  left: 121px;
  top: 77px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 149.98%;
  /* identical to box height, or 12px */


  color: #B4AEAE;
}

.commend_teams_box .team_member_number{
  position: absolute;
  width: 100px;
  height: 12px;
  left: 172px;
  top: 77px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 149.98%;
  /* identical to box height, or 12px */


  color: #B4AEAE;
}



.commend_teams_box .exchange{
  position: absolute;
  top: 386px;
  width: 342px;
  height: 55px;
  cursor: pointer;
}

.commend_teams_box .exchange_title{
  position: absolute;
  width: 60px;
  height: 24px;
  top: 14px;
  left: 172px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 149.98%;
  /* identical to box height, or 24px */

  letter-spacing: 0.07em;

  color: #9B9595;
}

.commend_teams_box .exchange_image{
  position: absolute;
  width: 23px;
  height: 23px;
  left: 122px;
  top: 15px;
  background: url(../../images/换一换.png);
  background-size: contain;
  cursor: pointer;
}


/*teams_uesrs 推荐用户 */


.commend_users_box{
  position: absolute;
  width: 342px;
  height: 390px;
  left: 1253px;
  top: 488px;

  background: #FFFFFF;
  border-radius: 9px;
}

.commend_users_box .title{
  position: absolute;
  //width: 104px;
  width: fit-content;
  height: 39px;
  left: 45px;
  top: 23px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 149.98%;
  /* identical to box height, or 39px */


  color: #000000;
}
.commend_users_box .magnify_glass{
  position: absolute;
  width: 26px;
  height: 26px;
  left: 279px;
  top: 29px;

  background: url(../../images/search_icon\ 2.png);
  background-size: contain;
}


.commend_users_box .commend_users_outside_box{
  width: 342px;
  height: 275px;
  position: absolute;
  top: 70px;
  left: 0px;
  overflow: hidden;
}


.commend_users_box  .commend_users_item {
  width: 342px;
  height: 90px;
  border-bottom: 1px solid #F0F0F0;


}

.commend_users_box .commend_users_item .commend_users_item_inner{
  width: 342px;
  height: 90px;
  position: relative;

}
.commend_users_box .commend_users_item  .user_image{
  position: absolute;
  left: 43px;
  top: 15px;
  width: 60px;
  height: 60px;
  background-image: url(../../images/头像.png);
  background-size: contain;
}

.commend_users_box .commend_users_item  .user_name{
  position: absolute;
  width: 148px;
  height: 24px;
  left: 123px;
  top: 17px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 149.98%;
  /* identical to box height, or 24px */


  color: #000000;
}

.commend_users_box .commend_users_item  .user_university{
  position: absolute;
  width: 180px;
  height: 15px;
  left: 123px;
  top: 41px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 149.98%;
  /* identical to box height, or 15px */


  color: rgba(0, 0, 0, 0.68);


}

.commend_users_box .commend_users_item  .user_major{
  position: absolute;
  left: 123px;
  top: 58px;
  width: 192px;
  height: 12px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 149.98%;
  /* identical to box height, or 12px */


  color: #B4AEAE;
}
.commend_users_box .commend_users_item  .user_notice_button{
  position: absolute;
  width: 45px;
  height: 19px;
  left: 262px;
  top: 36px;

  background: #EBF5FF;

  border-radius: 9.5px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 19px;
  /* identical to box height, or 12px */
  text-align: center;
  color: #013480;
  cursor: pointer;
}

.commend_users_box .exchange{
  position: absolute;
  top: 343px;
  width: 342px;
  height: 55px;
  cursor: pointer;
}

.commend_users_box .exchange_title{
  position: absolute;
  width: 60px;
  height: 24px;
  top: 12px;
  left: 172px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 24px */

  letter-spacing: 0.07em;

  color: #9B9595;

}

.commend_users_box .exchange_image{
  position: absolute;
  width: 23px;
  height: 23px;
  left: 122px;
  top: 13px;
  background: url(../../images/换一换.png);
  background-size: contain;

}


/*第二个界面 */


.content_box2{
  position: absolute;
  width: 1643px;
  // height: 990px;
  left: 282px;
}
.submit_title{
  position: absolute;
  width: 20vw;
  height: 48px;
  left: 750px;
  top: 81px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  /* identical to box height */


  color: #000000;
}

.content_box2_page1 .check_my_classify{
  position: absolute;
  width: 30vw;
  height: 33px;
  left: 1275px;
  top: 109px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 149.48%;
  /* identical to box height, or 33px */
  letter-spacing: 0.11em;
  color: #000000;
}
@media(max-width: 500px){
  .content_box2_page1 .check_my_classify{
    top: 19px;
  }
}
.content_box2_page1 .check_my_classify div{
  color: #1559DD;
  font-weight: 700;
  cursor: pointer;
}



.submit_file_box{
  padding: 0;
  margin: 0;
  position: absolute;
  width: 1293px;
  height: 373px;
  top: 184px;
  left: 175px;
  background: rgba(235, 245, 255, 0.4);
  border: 1px dashed #9B9595;
}

.submit_file_image{
  padding: 0;
  margin: 0;
  position: absolute;
  width: 108px;
  height: 106px;
  top: 88px;
  left: 587px;
  background-image: url(../../images/submit_file.png);
  background-size: contain;
}


.submit_file_title{
  position: absolute;
  width: 32vw;
  height: 39px;
  left: 504px;
  top: 256px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 149.48%;
  /* identical to box height, or 39px */

  letter-spacing: 0.11em;

  color: #000000;
}
@media(max-width: 500px){
  .submit_file_title{
    top: 224px;
    left: 345px;
  }
}
.submit_file_title div{
  display: inline;
  color: #3a81ed;
  font-weight: 700;
  border-bottom: 3px solid;
}
::v-deep  .el-upload{
  padding: 0;
  margin: 0;
  width: 1293px;
  height: 373px;
  border: 1px dashed #9B9595;

}
::v-deep .el-upload .el-upload-dragger{
  width: 100%;
  height: 373px;
  background: rgba(235, 245, 255, 0.4);
}

::v-deep .el-upload-list.el-upload-list--picture{
		/* display: none!important; */

    /* //这里设置原有的缩略图视图影藏 */
	}



::v-deep  .el-upload-list--picture .el-upload-list__item{
  width: 1268px;
  height: 86px;
}
::v-deep  .el-upload-list--picture .el-upload-list__item-thumbnail{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    z-index: 3;
    content: url(../../images/pdf1.png);
    /* background-size: contain; */
    /* border: #989494 3px solid; */

}




::v-deep .el-upload-list__item-file-name{
  position: absolute;
  width: 388px;
  height: 2vh;
  top: 10px;
  left: 70px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 113.48%;
  /* identical to box height, or 23px */
  z-index: -1;
  letter-spacing: 0.07em;

  color: #000000;

}

/*界面2 页面2——文件归档 */
.content_box2_page2{
  position: absolute;
  width: 1920px;
  height: 1080px;
  /* top: 100px; */
  left: -282px;

}
.content_box2_page2 .line{
  position: absolute;
  left: 283px;
  top: 247px;
  width: 1683px;

  background-image: url(../../images/line.png);
  background-size: contain;
  transform: rotate(0deg);
  z-index: 2;
}

.content_box2_page2 .head_title,
.content_box2_page2 .head_modify_time,
.content_box2_page2 .head_capacity
{
  position: absolute;

  left: 215px;
  top: 218px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}

.content_box2_page2 .head_modify_time{
  left: 859px;
}

.content_box2_page2 .head_capacity{
  left: 1227px;
}

.content_box2_page2 .page2_left_box{
  position: absolute;
  width: 282px;
  height: 990px;
  left: 0px;
  top: 0;
  border-right: 1px solid #E6E6E6;

}
.content_box2_page2 .return_image{
  position: absolute;
  width: 30px;
  height: 30px;
  left: 30px;
  top: 21px;
  background: url(../../images/返回.png);
  background-size: contain;
  cursor: pointer;
}



.content_box2_page2 .page2_left_box .title{
  position: absolute;
  width: 144px;
  height: 48px;
  left: 114px;
  top: 81px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  /* identical to box height */
  color: #000000;

}


/* 下拉菜单 */

.left_menu{
  width: 282px;
  position: absolute;
  top: 90px;
  left: 0px;
}

.el-sub-menu {
  margin: 0;
  padding: 0;
  color: #9B9595;
}
.el-sub-menu {
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */
  color: #9B9595;
}

.el-menu-item{
  margin:0;
  padding:0;
  width: 282px;
}

.el-menu-item.is-active{
  background-color:transparent;
  border: none;
  outline: none;
}
.el-sub-menu:hover{
  font-weight: 700;
  color: #000000;
}
.paper_image{
  width: 27px;
  height: 27px;
  background-image: url(../../images/文献库.png);
  background-size: contain;
  margin-left: 46px;
  margin-top: 18px;
}

.paper_title{
  margin-left:24px;
  margin-top: 18px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */


  color: #013480;
}
.content_box2_page2 .page2_right_box{
  position: absolute;
  width: 1638px;
  height: 990px;
  top: 0;
  left: 282px;


}

.content_box2_page2 .page2_right_box .title{
  position: absolute;
  width: 144px;
  height: 48px;
  left:114px;
  top: 45px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  /* identical to box height */
  color: #000000;
}

.content_box2 .page2_right_box .button_box{
  position: absolute;
  top: 112px;
  left: 114px;
  width: 800px;
  height: 200px;

}
.content_box2 .page2_right_box .button1{
  float: left;
  box-sizing: border-box;
  width: 117px;
  height: 44px;
  margin-right: 14px;
  border: 1px solid #1559DD;
  border-radius: 8px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
  text-align: center;

  color: #1559DD;
  cursor: pointer;
}

.content_box2 .page2_right_box .button2{
  float: left;
  box-sizing: border-box;
  width: 117px;
  height: 44px;
  background: #1559DD;
  border-radius: 8px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}



.content_box2 .page2_right_box .item_box{
  position: absolute;
  top: 257px;
  width: 1637px;
  height: 990px;

}


.page2_right_box  .item_box .each_item{
  width: 1637px;
  height: 61px;
  background: #ffffff;
  border-bottom: 1px solid #F4F4F4;

}

.page2_right_box  .item_box .each_item_inner{
  position: relative;
  width: 1637px;
  height: 61px;

}

.page2_right_box  .item_box .each_item:hover{
  background: #EBF5FF;
}

.page2_right_box  .item_box .each_checkbox{
  position: absolute;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  left: 132px;
  top: 13px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.page2_right_box  .item_box .each_item .each_item_title{
  position: absolute;
  top: 15px;
  left: 215px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.045em;

  color: #3C3C3C;

}


.page2_right_box  .item_box .each_item .each_time{
  position: absolute;
  width: 263px;
  height: 26px;
  /* float: left; */
  top: 14px;
  left: 859px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}


/* 文件归档子界面 */
/* 检索添加界面 */
.filing_page1{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(151, 150, 150, 0.5);
    z-index: 3;
}

.filing_page1 .page1_box{
  position: absolute;
  width: 1218px;
  height: 693px;
  left: 351px;
  top: 194px;
  background: #FFFFFF;
}

.filing_page1 .page1_box .page1_title{
  position: absolute;
  width: 112px;
  height: 37px;
  left: 61px;
  top: 21px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 37px;
  /* identical to box height */


  color: #000000;
}

.filing_page1 .page1_box .fork{
  width: 25px;
  height: 25px;
  background-image: url(../../images/fork.png);
  background-size: contain;
  position: absolute;
  left: 1150px;
  top: 30px;
  cursor: pointer;
}
.filing_page1 .page1_box .data_item_box{
  position: absolute;
  width: 1218px;
  height: 635px;
  left: 0px;
  top: 58px;
  overflow: scroll;
}

.filing_page1 .page1_box .each_item{
  width: 1218px;
  height: 50px;
  margin:6px auto
}

.filing_page1 .page1_box .each_inner_item{
  width: 1218px;
  height: 50px;
  position: relative;
}

.filing_page1 .page1_box .each_checkbox{
  box-sizing: border-box;

  position: absolute;
  width: 30px;
  height: 30px;
  left: 68px;
  top: 14px;

  border: 1px solid #000000;
  border-radius: 6px;
}


.filing_page1 .page1_box .title{
  position: absolute;
  width: 1000px;
  height: 26px;
  left: 146px;
  top: 14px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.045em;

  color: #3C3C3C;
}

.filing_page1 .page1_box .date{
  position: absolute;
  width: 300px;
  height: 26px;
  left: 790px;
  top: 14px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}

.filing_page1 .page1_box .upload_button{
  position: absolute;
  width: 67px;
  height: 24px;
  left: 1056px;
  top: 14px;
  background: #EBF5FF;
  border-radius: 4px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.045em;

  color: #013480;
  cursor: pointer;
}
/*第三个界面 */

.content_box3,
.content_box4,
.content_box5,
.content_box6,
.content_box7,
.content_box8
{
  position: absolute;
  width: 1643px;
  // height: 1080px;
  left: 282px;
  top: 100px;
  z-index: -1;
}


.all_records{
  position: absolute;
  width: 112px;
  height: 37px;
  left: 133px;
  top: 130px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 37px;
  /* identical to box height */


  color: #000000;
}

.already_chosen{
  position: absolute;
  width: 160px;
  height: 29px;
  left: 1088px;
  top: 141px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  color: #000000;
}


.already_chosen div{
  font-weight: 700;
  color: #1559DD;
}

.delete_button{
  position: absolute;
  width: 69px;
  height: 44px;
  left: 1323px;
  top: 134px;

  background: #013480;
  border-radius: 6px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 44px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
}

.cancel_button{
  position: absolute;
  width: 69px;
  height: 44px;
  left: 1397px;
  top: 134px;
  background: #D9D9D9;
  border-radius: 6px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 44px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
}

.data_item_box3{
  position: absolute;
  width: 1288px;
  height: 832px;
  top: 197px;
  left: 178px;
  z-index: -1;
  overflow-x: scroll;
}

.data_item_box3 .each_item{
  width: 1288px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #EBF5FF;
  border-radius: 6px;
  margin-bottom: 16px;

}

.data_item_box3 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box3 .each_checkbox{
  float: left;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box3 .each_item .title{
  float: left;
  margin-left: 101px;
  margin-top: 14px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.045em;

  color: #3C3C3C;
}


.data_item_box3 .each_item .date{
  width: 263px;
  height: 26px;
  /* float: left; */
  margin-top: 14px;
  margin-left: 745px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}

.data_item_box3 .each_item .each_delete_button{
  float: right;
  margin-top: 15px;
  margin-right: 25px;
  width: 23px;
  height: 23px;
  background-image: url(../../images/fork.png);
  background-size: contain;
  cursor:pointer;
}


/* 第四个界面 */
.data_item_box4{
  position: absolute;
  width: 1288px;
  height: 832px;
  top: 197px;
  left: 178px;
  z-index: -1;
  overflow-x: scroll;
}

.data_item_box4 .each_item{
  width: 1288px;
  height: 98px;
  background: transparent;
  border: 1px solid #EBF5FF;
  border-radius: 6px;
  margin-bottom: 18px;

}

.data_item_box4 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box4 .each_checkbox{
  float: left;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box4 .each_item .title{
  float: left;
  margin-left: 101px;
  margin-top: 14px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.045em;

  color: #3C3C3C;
}

.data_item_box4 .display_in_file{
  float: left;
  margin-left: -422px;
  margin-top: 60px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.045em;

}

.data_item_box4 .each_item .date{
  width: 263px;
  height: 26px;
  /* float: left; */
  margin-top: 14px;
  margin-left: 745px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}

.data_item_box4 .each_item .each_delete_button{
  float: right;
  margin-top: -25px;
  margin-right: 16px;
  width: 23px;
  height: 23px;
  background-image: url(../../images/fork.png);
  background-size: contain;
}

/* 第五个界面 */
.data_item_box5{
  position: absolute;
  width: 1288px;
  height: 832px;
  top: 197px;
  left: 178px;
  z-index: -1;
  overflow-x: scroll;

}

.data_item_box5 .each_item{
  float: left;
  width: 631.55px;
  height: 106.32px;

  border-radius: 6px;
  margin-bottom: 18px;
  margin-right: 10px;
}

.data_item_box5 .each_inner{
  position: relative;
  width: 631.55px;
  height: 106.32px;

}


.data_item_box5 .each_item .each_image{
  width: 106.32px;
  height: 106.32px;

  background: url(../../images/头像.png);
  background-size: contain;
}


.data_item_box5 .each_item .each_name{
  width: 80px;
  height: 35px;
  position: absolute;
  top: 10px;
  left: 134px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;

  color: #000000;
}

.data_item_box5 .each_item .each_workplace{
  position: absolute;
  top: 43px;
  left: 134px;
  width: 324px;
  height: 24px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */


  color: #000000;
}

.data_item_box5 .each_item .each_major{
  position: absolute;
  top: 71px;
  left: 134px;
  width: 153px;
  height: 24px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */
  color: #000000;
}

.data_item_box5 .cancel_notice{
  width: 122px;
  height: 42px;
  position: absolute;
  left: 509px;
  top: 35px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 42px;
  /* identical to box height */


  color: #013480;

  background: #EBF5FF;
  border-radius: 21px;
  cursor: pointer;

}



/* 第六个界面-我的收藏 */
.data_item_box6{
  position: absolute;
  width: 1387px;
  height: 832px;
  top: 191px;
  left: 128px;
  z-index: -1;
  overflow-x: scroll;

}

.data_item_box6 .collect_each_item{
  float: left;
  width: 673px;
  height: 180px;
  margin-bottom: 41px;
  background: #F7FBFF;
  border-radius: 10px;
}
.data_item_box6 .collect_each_item:nth-child(2n+1){
  margin-right: 41px;
}

.data_item_box6 .collect_each_inner{
  position: relative;
  width: 673px;
  height: 180px;
}

.data_item_box6 .collect_each_item:hover{
  background: #EBF5FF;
}

.data_item_box6 .collect_user_image{
  position: absolute;
  width: 60px;
  height: 60px;
  left: 40px;
  top: 23px;
  background-image: url(../../images/头像.png);
  background-size: contain;

}

.data_item_box6 .collect_icon{
  position: absolute;
  width: 27px;
  height: 27px;
  left: 580px;
  top: 21px;
  background: url(../../images/收藏.png);

  background-size: contain;
  cursor: pointer;
}

.data_item_box6 .collect_text{
  position: absolute;
  width: 525px;
  height: 63px;
  left: 617px;
  top: 24px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #9B9595;

}

.data_item_box6 .collect_name{
  position: absolute;
  width: 214px;
  height: 24px;
  left: 124px;
  top: 24px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;

  color: #000000;


}

.data_item_box6 .collect_subhead{
  position: absolute;
  width: 500px;
  height: 24px;
  left: 124px;
  top: 58px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */


  color: #000000;

}

.data_item_box6 .collect_content{
  position: absolute;
  width: 525px;
  height: 63px;
  left: 124px;
  top: 91px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #9B9595;

}


/* 第七个界面-我的订阅 */
.data_item_box7{
  position: absolute;
  width: 1387px;
  height: 832px;
  top: 191px;
  left: 128px;
  z-index: -1;
  overflow-x: scroll;

}

.data_item_box7 .notice_each_item{
  float: left;
  width: 604px;
  height: 180px;
  margin-bottom: 41px;

  border-radius: 10px;
}
.data_item_box7 .notice_each_item:nth-child(2n+1){
  margin-right: 166px;
}

.data_item_box7 .notice_each_inner{
  position: relative;
  width: 673px;
  height: 180px;
}

.data_item_box7 .notice_each_item:hover{
  background: #EBF5FF;
}

.data_item_box7 .notice_image{
  position: absolute;
  width: 263px;
  height: 171px;
  border-radius: 10px;
  background-image: url(data:image/jpeg;base64,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);
  background-size: contain;

}

.data_item_box7 .collect_icon{
  position: absolute;
  width: 27px;
  height: 27px;
  left: 580px;
  top: 21px;
  background: url(../../images/收藏.png);
  background-size: contain;
}

.data_item_box7 .collect_text{
  position: absolute;
  width: 525px;
  height: 63px;
  left: 617px;
  top: 24px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #9B9595;

}

.data_item_box7 .notice_name{
  position: absolute;
  width: 214px;
  height: 24px;
  left: 291px;
  top: 0px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;

  color: #000000;


}

.data_item_box7 .notice_content{
  position: absolute;
  width: 306px;
  height: 72px;
  left: 291px;
  top: 40px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  overflow: scroll;
  color: #9B9595;

}


.data_item_box7 .cancel_notice{
  position: absolute;
  width: 64px;
  height: 22px;
  left: 536px;
  top: 124px;
  background: #EBF5FF;
  border-radius: 11px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
  text-align: 22px;
  color: #013480;
  cursor: pointer;
}

.data_item_box7 .notice_member{
  position: absolute;
  width: 100px;
  height: 13px;
  left: 385px;
  top: 128px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;

  color: #D9D9D9;

}

/* 第八个界面——回收站 */
.data_item_box8{
  position: absolute;
  width: 1288px;
  height: 832px;
  top: 197px;
  left: 178px;
  z-index: -1;
  overflow-x: scroll;
}

.data_item_box8 .each_item{
  width: 1288px;
  height: 98px;
  background: #ffffff;
  border: 1px solid #EBF5FF;
  border-radius: 6px;
  margin-bottom: 18px;

}

.data_item_box8 .each_item_inner{
  position: relative;
  width: 1288px;
  height: 98px;

}
.data_item_box8 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box8 .each_checkbox{
  position: absolute;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  top: 12px;
  left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box8 .each_item .each_title{
  position: absolute;
  left: 101px;
  top: 14px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.045em;

  color: #3C3C3C;
}

.data_item_box8 .each_expire_time{
  position: absolute;
  width: 100px;
  height: 21px;
  left: 101px;
  top: 60px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.045em;

  color: #7382A0;
}

.data_item_box8 .each_item .each_date{
  position: absolute;
  width: 163px;
  height: 26px;
  left: 745px;
  top: 14px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}
.data_item_box8 .each_item .each_time{
  position: absolute;
  width: 163px;
  height: 26px;
  left: 900px;
  top: 14px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #9B9595;
}


.trash_empty_image{
  position: absolute;
  width: 605px;
  height: 378px;
  left: 539px;
  top: 172px;

  background: url(../../images/trash_empty.png);
  background-size: contain;
}


.trash_empty_title{
  position: absolute;
  width: 300px;
  height: 50px;
  left: 759px;
  top: 614px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 50px;
  letter-spacing: 0.11em;

  color: #74ADFD;
}




::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}

::v-deep .el-input__wrapper {
  font-size: 12px;
  max-width: 100px;
  position: relative;
  top: -23px;
  left: -19px;
  background-color: #FFFFFF;
  color:#9B9595;
  height: 3.6vh;
}
::v-deep .el-input__inner {
  //background-color: transparent !important;
  height: 30px;
}
@media (prefers-color-scheme: dark) {
  .input_text {
    color: white;
  }

  .search_box {
    background-color: #121212;
  }
  .all_records {
    color: white;
  }

  .left_box {
    background: #121212;
  }
  .tac {
    background: #121212;
  }
  .active_item {
    background: #003260;
  }
  .active_item div{
    color: #5B93FF;
  }
  .nomal_item div {

    color: #FFFFFF;
  }
  .content_box3 {
    background: #121212;
  }
  .data_item_box3 .each_item {
    border: 1px solid white;
  }
  .data_item_box3 .each_item .title {
    color: #FFFFFF;
  }
  .data_item_box3 .each_item:hover{
    background: #3c3c3c;
  }
  .content_box4 {
    background-color: #121212;
  }
  .data_item_box4 .each_item:hover{
    background: #003260;
  }
  ::v-deep .el-input__wrapper {
    background-color: #000000;
  }
}



</style>
