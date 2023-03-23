<template>
  
  <body class="background">

    <el-row class="tac">
    <el-col >
      
  
        <div
        :class='now_search_method_index==1?"active_item":"nomal_item"'
        @click="change_search_method_index(1)"
        >
          <!-- <el-icon><icon-menu /></el-icon> -->
          <span>文献文库</span>
        </div>
      
        <div 
        :class='now_search_method_index==2?"active_item":"nomal_item"'
        @click="change_search_method_index(2)"
        >
          <!-- <el-icon><icon-menu /></el-icon> -->
          <span>批量导入</span>
        </div>

        <div 
        :class='now_search_method_index==3?"active_item":"nomal_item"'
        @click="change_search_method_index(3)"
        >
          <!-- <el-icon><document /></el-icon> -->
          <span>历史浏览</span>
        </div>

        <div 
        :class='now_search_method_index==4?"active_item":"nomal_item"'
        @click="change_search_method_index(4)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <span>我的下载</span>
        </div>

        <div 
        :class='now_search_method_index==5?"active_item":"nomal_item"'
        @click="change_search_method_index(5)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <span>我的关注</span>
        </div>

        <div 
        :class='now_search_method_index==6?"active_item":"nomal_item"'
        @click="change_search_method_index(6)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <span>我的收藏</span>
        </div>

        <div 
        :class='now_search_method_index==7?"active_item":"nomal_item"'
        @click="change_search_method_index(7)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <span>我的订阅</span>
        </div>
 
        <div 
        :class='now_search_method_index==8?"active_item":"nomal_item"'
        @click="change_search_method_index(8)"
        >
          <!-- <el-icon><setting /></el-icon> -->
          <span>回收站</span>
        </div>
    </el-col>

  </el-row>

    <div class="search_box" v-if="now_search_method_index!=2">
      <div class="search_input_box">
        <input type="text" class="input_text" v-model="input_text" placeholder="请输入内容" >
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
        popper-class="date_picker"
        style="height:42px"
      />

    </div>

    <div class="search_button" v-if="now_search_method_index==1">
      查询
    </div>

    <div class="search_button" v-if="now_search_method_index>=3" @click="all_clear()">
      全部清空
    </div>

    <div class="advance_search" v-if="now_search_method_index==1">高级检索<span @click=""></span></div>
    

     <!-- 第一个界面 -->
    <div class="content_box1" v-if="now_search_method_index==1">
      <div class="classify">
        <div class="classify_title">分类导航</div>

      </div>

      <div class="commend_box">
        <div class="commend_nav">
            <div :class="commend_nav_item==0?'commend_nav_active_item':'item1'" @click="commend_nav_items(0)">推荐文献</div>
            <div :class="commend_nav_item==1?'commend_nav_active_item':'item2'" @click="commend_nav_items(1)">关注</div>
        </div>
        <div class="commend_content">
          <div class="comment_content_item" v-for="(index,item) in 10" :key="item"></div>

        </div>

      </div>

      <div class="commend_teams_box">
        <div class="title">推荐团队</div>
        <div class="magnify_glass"></div>
        <div class="commend_teams_item_box" >
          <div class="commend_teams_item" v-for="(index,item) in 3" :key="item"></div>
        </div>
        <div class="exchange">
          <div class="exchange_title">换一换</div>
          <div class="exchange_image"></div>
        </div>
      </div>

      <div class="commend_teams_users_box">
        <div class="title">推荐用户</div>
        <div class="magnify_glass"></div>
        <div class="commend_teams_item_box" >
          <div class="commend_teams_item" v-for="(index,item) in 3" :key="item">
            <div class="user_image"></div>
          
          </div>
        </div>
        <div class="exchange">
          <div class="exchange_title">换一换</div>
          <div class="exchange_image"></div>
        </div>
      </div>
    </div>


    <!-- 第二个界面 -->
    <div class="content_box2" v-if="now_search_method_index==2">
      <div class="content_box2_page1" v-if="now_content_box2_page==1">
      <div class="check_my_classify">查看我的<span @click="now_content_box2_pages(2)">文件归档</span></div>
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
      :limit="3"
      :on-exceed="handleExceed"
      list-type="picture"
  >
    <el-icon class="submit_file_image"></el-icon>
    <div class="submit_file_title">拖拽上传你的<span>浏览</span>文件</div>


    <template #tip>
		<div class="el-upload__tip">请上传格式为PDF文件</div>
		   
	  </template>

  </el-upload>

  </div>


    <div class="content_box2_page2" v-else>
      <div class="return_image"></div>
      <div class="page2_left_box">
          <div class="title">文件归档</div>
      </div>
      <div class="page2_right_box">
          <div class="title">上传列表</div>
          <div class="submit_list_box">
            <div class="submit_list_item">
            
            </div>
          </div>
      </div>

    </div>
    </div>

    <!-- 第三个界面历史记录 -->
    <div class="content_box3" v-if="now_search_method_index==3">


      <div class="all_records" >全部记录</div>
      <!-- 这里要修改参数的值 -->
      <div class="clear_cancel_block" v-if="delete_history_list.length!=0">
      <div class="already_chosen" >已经选中 <span>{{ delete_history_list.length }}</span>  项</div>
      <div class="delete_button" @click="mul_delete_history()">删除</div>
      <div class="cancel_button" @click="cancel_delete()">取消</div>
      </div>


      <div class="data_item_box3">
      <div class="each_item" v-for="(item,index) in history_array" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="history_choose_item(item)" >
        <div class="title">{{ item }}</div>
        
        <div class="each_delete_button" @click="delete_history(item)"></div>
      </div>
     </div>

    </div>


    <!-- 第四个界面 -->
    <div class="content_box4" v-if="now_search_method_index==4">
      <div class="all_records">全部记录</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <span>{{ store.state.choose_items_array.length-1 }}</span>  项</div>
        <div class="delete_button">删除</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box4">
      <div class="each_item" v-for="(item,index) in 20" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="choose_item(index)" >
        <div class="title">某医院血液科24种抗肿瘤药超说明书用药评价</div>
        <a href="" class="display_in_file"><div>在文件夹中显示</div></a>
        <div class="date">2023/11/15    13:15</div>
        <div class="each_delete_button" ></div>
      </div>
     </div>


    </div>


    <!-- 第五个界面 -->
    <div class="content_box5" v-if="now_search_method_index==5">
      <div class="all_records">我的关注</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <span>{{ store.state.choose_items_array.length-1 }}</span>  项</div>
        <div class="delete_button">删除</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box5">
      <div class="each_item" v-for="(item,index) in 5" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="choose_item(index)" >
        <div class="title">某医院血液科24种抗肿瘤药超说明书用药评价</div>
        <a href="" class="display_in_file"><div>在文件夹中显示</div></a>
        <div class="date">2023/11/15    13:15</div>
        <div class="each_delete_button" ></div>
      </div>
     </div>
    
    
    </div>

    <!-- 第六个界面 -->
    <div class="content_box6" v-if="now_search_method_index==6">
      <div class="all_records">我的收藏</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <span>{{ store.state.choose_items_array.length-1 }}</span>  项</div>
        <div class="delete_button">删除</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box6">
      <div class="each_item" v-for="(item,index) in 5" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="choose_item(index)" >
        <div class="title">某医院血液科24种抗肿瘤药超说明书用药评价</div>
        <a href="" class="display_in_file"><div>在文件夹中显示</div></a>
        <div class="date">2023/11/15    13:15</div>
        <div class="each_delete_button" ></div>
      </div>
     </div>
    
    
    </div>

    <!-- 第七个界面 -->
    <div class="content_box7" v-if="now_search_method_index==7">
      <div class="all_records">我的订阅</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <span>{{ store.state.choose_items_array.length-1 }}</span>  项</div>
        <div class="delete_button">删除</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box7">
      <div class="each_item" v-for="(item,index) in 5" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="choose_item(index)" >
        <div class="title">某医院血液科24种抗肿瘤药超说明书用药评价</div>
        <a href="" class="display_in_file"><div>在文件夹中显示</div></a>
        <div class="date">2023/11/15    13:15</div>
        <div class="each_delete_button" ></div>
      </div>
     </div>
    
    
    </div>

    <!-- 第八个界面 -->
    <div class="content_box8" v-if="now_search_method_index==8">
      <div class="all_records">回收站</div>
      <div class="clear_cancel_block" v-if="store.state.choose_items_array.length!=1">
        <div class="already_chosen" >已经选中 <span>{{ store.state.choose_items_array.length-1 }}</span>  项</div>
        <div class="delete_button">还原</div>
        <div class="cancel_button">取消</div>
      </div>

      <div class="data_item_box8">
      <div class="each_item" v-for="(item,index) in 5" >
        <input type="checkbox" name="" id=""  class="each_checkbox" @click="choose_item(index)" >
        <div class="title">某医院血液科24种抗肿瘤药超说明书用药评价</div>
      <div class="overdue_time"> {{ 30 }}天后过期</div>
        <div class="date">2023/11/15    13:15</div>
        <div class="each_delete_button" ></div>
      </div>
     </div>
    
    
    </div>
  </body>












  <body1 style="display: none;">
    <div class="search_box">
      <div class="search_input_box">
        <input type="text" class="input_text" v-model="input_text">
      </div>
      <div class="search_icon" @click="Search()"></div>
    </div>

    <el-col :span="8">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <div class="search_method_text">{{ now_search_method }}</div>
          <div class="line"></div>
          
        </span>
      
      </el-dropdown>
      <div class="arrow_down" @click="dropdown_display=!dropdown_display"></div>
    </el-col>
    <div class="search_method_box" v-if="dropdown_display==true">
        <div class="each_search_item" v-for="(item,index) in search_methods" :key="item" @click="now_search_method=item">
          {{ item }}
        </div>
       </div>
  </body1>
  
    
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ref,onMounted,reactive} from 'vue';
import {HistoryGetUser,searchWord,historyDel} from '../api/search_controller'
import { useStore } from 'vuex';
import { UploadProps, UploadUserFile, useId } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'

var uid=localStorage.getItem('uid')??""

onMounted(()=>{
 
  HistoryGetUser(uid).then((res)=>{
    console.log(uid,'uid'); 
  }).catch(res2=>{
    console.log(res2);
    history_array.value=res2
    console.log(history_array.value);
  })
}) 
const store=useStore();
let now_search_method_index=ref(3)
// let now_search_method=ref('主题')
// let search_methods=ref(['主题','关键字','篇关摘','篇名','作者','第一作者','通讯作者','作者单位','参考文献','全文','摘要'])

let dropdown_display=ref(true)
let input_text=ref('')


/*通用 */
// 全部清除
function all_clear(){
  // 清除全部历史记录
  if(now_search_method_index.value==3){
    for(var i=0;i<history_array.value.length;i++){
      delete_history_list.value[i]=history_array.value[i]
    }
    
    mul_delete_history() 
  }
}



//搜索
function Search(){
  
  searchWord(input_text.value,uid).then(res=>{
    
    console.log('searchWord',res);
  })
  location.reload()
}


/*界面1 */
let commend_nav_item=ref(0)
function commend_nav_items(index:number){
  commend_nav_item.value=index
  console.log(commend_nav_item.value);
  
}


//

/*界面2 */
let now_content_box2_page=ref(1)
function now_content_box2_pages(index:number){
  now_content_box2_page.value=index
}



function change_search_method_index(index:number){
  now_search_method_index.value=index
}

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


/*数据库 */




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
  console.log(uploadFile)
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
  for (var i = 0; i < delete_history_list.value.length; i++) {
    let index_pos=history_array.value.indexOf(delete_history_list.value[i]);
    if (index_pos!=-1) {
      history_array.value.splice(index_pos, 1);
      index_pos--;
    }
  }
  
  for (var i = 0; i < delete_history_list.value.length; i++){
    historyDel(delete_history_list.value[i],uid).then((res)=>{
     
    })
    
  }

 
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


function cancel_delete(){
    delete_history_list.value=[]
    delete_history_list.value.length=0
    location.reload()
}
</script>

<style scoped>


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
  width: 282px;
  height: 1080px;
  left: 0px;
  top: 88px;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
}

.nomal_item{

  width: 282px;
  height: 113px;
  cursor: pointer;
}

.active_item{

  width: 282px;
  height: 113px;
  
  background: #EBF5FF;
  cursor: pointer;
  
}

.active_item span,.nomal_item span{
  font-family: 'Microsoft YaHei';
  width: 282px;
  height: 113px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: #000000;

  line-height: 113px;
  margin-left: 89px;
}


.search_box{
  position: absolute;
  width: 1638px;
  height: 86px;
  left: 283px;
  top: 88px;
  background: #FFFFFF;
  
}

.search_input_box{
box-sizing: border-box;

position: absolute;
width: 829px;
height: 55px;
left: 133px;
top: 16px;

border: 1px solid #D9D9D9;
border-radius: 6px;

}

.input_text{
  box-sizing: border-box;
  position: absolute;
  width: 747px;
  height: 53px;
  left: 80px;
  top: 0px;
  border-radius: 6px;
  border: none;
  outline: none;
  overflow: hidden;
  z-index: 3;
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
  width: 318px;
  height: 55px;
  left: 1285px;
  top: 106px;

  border-radius: 6px;
  z-index: 3;
}


.calendar_icon{
  position: absolute;
  width: 30px;
  height: 30px;
  left: 15px;
  top: 12px;

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
    background-color: transparent !important;
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
 background-color: #9AC1E4;;
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

.advance_search span{
  position: absolute;
  width: 20px;
  height: 20px;
  left: 99px;
  top: 4px;
  background-image: url(../../images/right_arrow.png);
  background-size: contain;
  cursor: pointer;
}

/*第一个界面 */

.content_box1 {
  position: absolute;
  width: 1643px;
  height: 990px;
  top: 176px;
  left: 282px;
  background-color: #EBF5FF;
}

.classify{
  position: absolute;
  width: 271px;
  height: 853px;
  left: 30px;
  top: 25px;

  background: #FFFFFF;
}

.classify_title{
  position: absolute;
  left: 78px;
  top: 20px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 149.98%;
  /* identical to box height, or 39px */


  color: #000000;
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
  width: 104px;
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


.commend_content{
  width: 902px;
  height: 766px;
  padding: 18px;
  overflow: scroll;
}
.comment_content_item{

width: 863px;
height: 205px;
background: #D9D9D9;
margin-bottom: 16px;
border-radius: 6px;
}
.commend_teams_box{
  position: absolute;
  width: 342px;
  height: 438px;
  left: 1253px;
  top: 25px;

  background: #FFFFFF;
  border-radius: 9px;

}

.commend_teams_box .title{
  position: absolute;
  width: 104px;
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




.commend_teams_box .commend_teams_item_box{
  margin-top: 47px;
}

.commend_teams_box .commend_teams_item{
  width: 342px;
  height: 110px;
  border-bottom: 1px solid #F0F0F0;
}

.commend_teams_box .exchange{
  position: absolute;
  top: 382px;
  width: 342px;
  height: 55px;
  
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
  cursor: pointer;
}


/*teams_uesrs */


.commend_teams_users_box{
  position: absolute;
  width: 342px;
  height: 390px;
  left: 1253px;
  top: 488px;

  background: #FFFFFF;
  border-radius: 9px;
}

.commend_teams_users_box .title{
  position: absolute;
  width: 104px;
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
.commend_teams_users_box .magnify_glass{
  position: absolute;
  width: 26px;
  height: 26px;
  left: 279px;
  top: 29px;

  background: url(../../images/search_icon\ 2.png);
  background-size: contain;
}


.commend_teams_users_box .commend_teams_item_box{
  margin-top: 67px;

}


.commend_teams_users_box  .commend_teams_item_box .commend_teams_item{
  width: 342px;
  height: 90px;
  border-bottom: 1px solid #F0F0F0;
}

.commend_teams_users_box .commend_teams_item_box .commend_teams_item .user_image{

  margin-left: 43px;
  width: 60px;
  height: 60px;
  background-image: url(../../images/头像.png);
  background-size: contain;
}


.commend_teams_users_box .exchange{
  position: absolute;
  top: 339px;
  width: 342px;
  height: 55px;
  
}

.commend_teams_users_box .exchange_title{
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

.commend_teams_users_box .exchange_image{
  position: absolute;
  width: 23px;
  height: 23px;
  left: 122px;
  top: 15px;
  background: url(../../images/换一换.png);
  cursor: pointer;
}
/*第二个界面 */


.content_box2{
  position: absolute;
  width: 1643px;
  height: 990px;
  top: 178px;
  left: 282px;
}
.submit_title{
  position: absolute;
  width: 144px;
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
  width: 196px;
  height: 33px;
  left: 1275px;
  top: 119px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 149.48%;
  /* identical to box height, or 33px */

  letter-spacing: 0.11em;

  color: #000000;
}

.content_box2_page1 .check_my_classify span{
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
  width: 300px;
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

.submit_file_title span{
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
  height: 23px;
  top: 10px;
  left: 70px;
  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 113.48%;
  /* identical to box height, or 23px */

  letter-spacing: 0.07em;
  
  color: #000000;

}

/*界面2 页面2 */
.content_box2_page2{
  
}

.content_box2_page2 .return_image{
  position: absolute;
  width: 30px;
  height: 30px;
  left: 39px;
  top: 18px;

  background: url(../../images/return.png);
}

.content_box2_page2 .page2_left_box{
  float: left;
  width: 959px;
  height: 990px;
 
  border-right: 1px solid #E6E6E6
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

.content_box2_page2 .page2_right_box{
 float: left;
  width: 679px;
  height: 990px;
 
  
}

.content_box2_page2 .page2_right_box .title{
  position: absolute;
  width: 144px;
  height: 48px;
  left: 999px;
  top: 81px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  /* identical to box height */


  color: #000000;
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
  height: 990px;
  top: 178px;
  left: 282px;
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


.already_chosen span{
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
  background: #ffffff;
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
  width: 1288px;
  height: 98px;
  background: #ffffff;
  border: 1px solid #EBF5FF;
  border-radius: 6px;
  margin-bottom: 18px;

}

.data_item_box5 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box5 .each_checkbox{
  float: left;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box5 .each_item .title{
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

.data_item_box5 .display_in_file{
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

.data_item_box5 .each_item .date{
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

.data_item_box5 .each_item .each_delete_button{
  float: right;
  margin-top: -25px;
  margin-right: 16px;
  width: 23px;
  height: 23px;
  background-image: url(../../images/fork.png);
  background-size: contain;
}


/* 第六个界面-我的收藏 */
.data_item_box6{
  position: absolute;
  width: 1288px;
  height: 832px;
  top: 197px;
  left: 178px;
  z-index: -1;
  overflow-x: scroll;

}

.data_item_box6 .each_item{
  width: 1288px;
  height: 98px;
  background: #ffffff;
  border: 1px solid #EBF5FF;
  border-radius: 6px;
  margin-bottom: 18px;

}

.data_item_box6 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box6 .each_checkbox{
  float: left;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box6 .each_item .title{
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

.data_item_box6 .display_in_file{
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

.data_item_box6 .each_item .date{
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

.data_item_box6 .each_item .each_delete_button{
  float: right;
  margin-top: -25px;
  margin-right: 16px;
  width: 23px;
  height: 23px;
  background-image: url(../../images/fork.png);
  background-size: contain;
}

/* 第七个界面-我的订阅 */
.data_item_box7{
  position: absolute;
  width: 1288px;
  height: 832px;
  top: 197px;
  left: 178px;
  z-index: -1;
  overflow-x: scroll;

}

.data_item_box7 .each_item{
  width: 1288px;
  height: 98px;
  background: #ffffff;
  border: 1px solid #EBF5FF;
  border-radius: 6px;
  margin-bottom: 18px;

}

.data_item_box7 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box7 .each_checkbox{
  float: left;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box7 .each_item .title{
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

.data_item_box7 .display_in_file{
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

.data_item_box7 .each_item .date{
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

.data_item_box7 .each_item .each_delete_button{
  float: right;
  margin-top: -25px;
  margin-right: 16px;
  width: 23px;
  height: 23px;
  background-image: url(../../images/fork.png);
  background-size: contain;
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

.data_item_box8 .each_item:hover{
  background: #EBF5FF;
}

.data_item_box8 .each_checkbox{
  float: left;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 18px;
  border: 1px solid #000000;
  border-radius: 6px;
}


.data_item_box8 .each_item .title{
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

.data_item_box8 .overdue_time{
  float: left;
  margin-left: -422px;
  margin-top: 60px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.045em;
  color: #7382A0;
}

.data_item_box8 .each_item .date{
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

.data_item_box8 .each_item .each_delete_button{
  float: right;
  margin-top: -25px;
  margin-right: 16px;
  width: 23px;
  height: 23px;
  background-image: url(../../images/fork.png);
  background-size: contain;
}

::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}




</style>