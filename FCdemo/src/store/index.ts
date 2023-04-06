import {createStore} from "vuex"
const store =createStore({
    state:{
        login_form:{
          phone_number: "",
          password: "",
          verification_code:""
        },
        choose_items_array:[-1],
        //文献文库界面中的paper_index值，用于切换界面
        now_paper_index:1,
        //批量导入界面中的paper_index值，用于切换界面
        now_content_box2_page:1,
        //当前搜索方式
        now_search_method_index:1,

    },
    mutations:{
      change_choose_items_array(state,index){
        if(state.choose_items_array.indexOf(index)==-1){
          console.log(state.choose_items_array.push(index))
          console.log(store.state.choose_items_array,"array");
          return ;
        }
        else{
          for (let i = 0; i < state.choose_items_array.length; i++) {
            if (state.choose_items_array[i] == index) {
              state.choose_items_array.splice(i, 1);
            }
            }
            console.log(store.state.choose_items_array,"array");
            return ;
        }
        
      },
      change_now_paper_index(state,index){
        state.now_paper_index=index
      },
      change_now_content_box2_page(state,index){
        state.now_content_box2_page=index
      },
      change_now_search_method_index(state,index){
        state.now_search_method_index=index
      }
    },
    actions:{
      change_choose_items_array(temp,index){
        temp.commit("change_choose_items_array",index);
      },
      change_now_paper_index(temp,index){
        temp.commit('change_now_paper_index',index)
      },
      change_now_content_box2_page(temp,index){
        temp.commit('change_now_content_box2_page',index)
      },
      change_now_search_method_index(temp,index){
        temp.commit('change_now_search_method_index',index)
      }

    }
})
export default store;