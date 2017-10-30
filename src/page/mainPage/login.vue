<template>
  <div id="login">
<qui_editor></qui_editor>
<qui_nav></qui_nav>
<qui_button ></qui_button>
<qui_button v-on:btnClickEvent="doSth1" msg="登出">
  <img slot="icon" src="../../assets/logo1.png"/>
</qui_button>
<qui_button v-on:btnClickEvent="doSth2" msg="登入"></qui_button>
<!-- 自定义指令 -->
<input v-focus>
<!-- 钩子函数 -->
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
<!-- render函数 -->
<anchored-heading :level="1">Hello world!</anchored-heading>
<!-- 过滤器 -->
<p>{{message|capitalize}}</p>
  </div>
</template>

<script>
import qui_button from "../../components/quiButton"
import qui_nav from "../../components/quiNav"
import qui_editor from "../../components/vue-html5-editor"


export default {
  name: 'login',
  data(){
    return {
      message:"absd"
    }
  },
  components:{
    qui_button,
    qui_nav,
    qui_editor
  },
  methods:{
    doSth1:function(){
        alert('1111');
    },
    doSth2:function(){
        alert('2222');
    }
  },
  //注册局部自定义指令
  directives:{
    focus:{
      //指令的定义
      inserted:function(el){
          el.focus()
      }
    }
  },
  // 过滤器
  filters:{
      capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created:function(){
      // this.message="我是"
  }
}
</script>

<style>

</style>
