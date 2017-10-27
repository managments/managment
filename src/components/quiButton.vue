<template>
  <div id="qui_button">
    <button @click="btnClickEvent">
      <slot name="icon"></slot><!--重点在这里-->
      <span>{{msg}}</span>
    </button>
  </div>
</template>
<script>
export default{
  name:"qui_button",
  props:{
    msg:{
      default:"下载"
    }
  },
  methods:{
  btnClickEvent:function(){
      alert(this.msg);
      this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
  }
  }
}
</script>

<style>

</style>

