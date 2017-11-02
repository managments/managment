<template>
  <div id="UI">
    <!-- 分页器 -->
    <Pagination :total="total" :current-page='current' @pagechange="pagechange"></Pagination>
    <!-- NextTick函数 -->
    <NextTick></NextTick>
    <!-- 数据模拟 -->
    <!-- <Mock></Mock> -->
    <!-- 懒加载 -->
    <LazyLoad></LazyLoad>
  </div>
</template>

<script>
import Mock from '../../components/mock'
import NextTick from '../../components/nextTick'
import Pagination  from '../../components/pagination'
import LazyLoad  from '../../components/lazyload'
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
    Mock,NextTick,Pagination,LazyLoad
  }
}
</script>

<style scoped>
li{
  list-style: none
}
</style>
