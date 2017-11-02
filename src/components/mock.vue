<template>
  <div class="mock">
      <ul>
        <li class="row" v-for="(item,key) in data">
            <div class="col-md-8">
              <div class="name">{{item.author_name}}</div>
              <div class="time">{{item.date}}</div>
              <div class="title">{{item.title}}</div>
            </div>
            <div class="col-md-4">
              <img :src="item.thumbnail_pic_s" alt="">
            </div>
        </li>
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
        this.data=res.data.data;
        console.log(this.data)
      })
    },
    methods:{

    }
  })
</script>

<style scoped>
li{
  list-style: none;

}
</style>

