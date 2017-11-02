<template>
  <div class="lazyLoad">
    <ul id="container">
      <li v-for="img in arr">
        <img v-lazy="img.thumbnail_pic_s">
      </li>
    </ul>
  </div>
</template>

<script>
  export default({
    name:"lazyLoad",
    data(){
      return{
        arr:[]
      }
    },
    mounted:function(){
      this.$http.get('/api/data').then(res=>{
        this.arr=res.data.data;
        console.log(this.data)
      })
    },
  })
</script>

<style scoped>
li{
  list-style: none
}
</style>

