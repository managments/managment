// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    author: 'Wise Wrong'
  },
  mutations :{
    newAuthor(state,msg){
      state.author=msg;
    }
  },
  actions : {}
})
export default store
