// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    author: 'Wise Wrong',
    amsg: '',
  },
  actions,
  mutations,
  // mutations :{
  //   newAuthor(state,msg){
  //     state.author=msg;
  //   }
  // },
  getters:{
    amsg(state){
        console.log(state)
        return state.amsg
    },
    author(state){
      console.log(state)
      return state.author
    }
  }
})
export default store
