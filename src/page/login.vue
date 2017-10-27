<template>
  <div id="login">
login
<qui_editor></qui_editor>
<qui_nav></qui_nav>
<qui_button ></qui_button>
<qui_button v-on:btnClickEvent="doSth1" msg="登出">
  <img slot="icon" src="../assets/logo1.png" />
</qui_button>
<qui_button v-on:btnClickEvent="doSth2" msg="登入"></qui_button>
  </div>
</template>

<script>
import qui_button from "../components/quiButton"
import qui_nav from "../components/quiNav"
import qui_editor from "../components/vue-html5-editor"
export default {
  name: 'login',
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
  }
}
</script>

<style>

</style>
