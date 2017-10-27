<template>
  <div id="silde">
    <ul class="list-group">
    <li class="list-group-item" ><a href="#/login">login</a></li>
    <li class="list-group-item"><a href="#/chart">chart</a></li>
    <li class="list-group-item"><a href="#/table">table</a></li>
    <li class="list-group-item"><a href="#/UI">UI{{msg}}</a></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'silde',
  data(){
    return{
      msg:"125",
      items:[
        {
          text:"首页",

        }
      ]
    }
  }

}
</script>

<style scoped>
li{
  cursor: pointer;
}
</style>
