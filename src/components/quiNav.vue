<template>
  <div id="qui_nav">
    <a v-for="(item, index) in items" v-on:click="navClickEvent(items,index)" :class="[commonClass,item.active ? activeClass : '']">
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name:"qui_nav",
    data:function(){
      return {
        commonClass:'nav-item',
        activeClass:'active',
        items:[
          {
            text: '首页',
            active : true
          },
          {
            text: '列表',
            active : false
          },
          {
            text: '关于',
            active : false
          },
          {
            text: '招聘',
            active : false
          }
        ]
      }
    },
    methods:{
        navClickEvent:function(items,index){
            items.forEach(function(element) {
                element.active=false;
            }, this);
            items[index].active=true;
            // this.$emit("navClickEvent",items,index);
        }
    }
  }
</script>

<style scoped>
.nav-item{
  display: inline-block;
  width: 100px;
}
.active{
  background: yellow;
}
</style>

