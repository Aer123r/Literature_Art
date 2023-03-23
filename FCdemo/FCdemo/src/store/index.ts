import {createStore} from "vuex"
const store =createStore({
    state:{
        login_form:{
          phone_number: "",
          password: "",
          verification_code:""
        },
        choose_items_array:[-1]
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
        
      }
    },
    actions:{
      change_choose_items_array(temp,index){
        temp.commit("change_choose_items_array",index);
      }
    }
})
export default store;