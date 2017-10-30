<template>
  <div class="mock">
      <ul>
        <li v-for="(item,key) in data">{{item}}</li>
      </ul>
  </div>
</template>

<script>
  export default({
    name:"mock",
    data(){
      return{
        data:{},
      }
    },
    mounted:function(){
      this.$http.get('/api/data').then(res=>{
        this.data=res.data;
        console.log(this.data)
      })
    }
  })
</script>

<style>

</style>

