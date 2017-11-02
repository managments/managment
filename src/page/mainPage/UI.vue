<template>
  <div id="UI">
    <Pagination :total="total" :current-page='current' @pagechange="pagechange"></Pagination>
    <NextTick></NextTick>
    <Mock></Mock>
  </div>
</template>

<script>
import Mock from '../../components/mock'
import NextTick from '../../components/nextTick'
import Pagination  from '../../components/pagination'
export default {
  name: 'UI',
  data(){
    return {
      total: 150,     // 记录总条数
      display: 10,   // 每页显示条数
      current: 1,   // 当前的页数
    }
  },
  methods:{
    pagechange:function(currentPage){
       console.log(currentPage);
       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
       this.$http.get('/api/data').then(res=>{
        this.total=res.data.data.length;
        // console.log(this.total)
      })
     }
  },
  components:{
    Mock,NextTick,Pagination
  }
}
</script>

<style scoped>

</style>
