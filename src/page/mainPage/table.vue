<template>
  <div class="table">
    <Base1></Base1>
    <Login1></Login1>
  </div>
</template>

<script>
import Base1 from '../../components/base64-md5'
import Login1 from '../../components/login1'
export default {
  name: 'table',
  components:{
    Base1,Login1
  }
}
</script>

<style>

</style>
