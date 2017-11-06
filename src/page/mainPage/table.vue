<template>
  <div class="table">
    <Base1></Base1>
    <Login1></Login1>
    <DemoA></DemoA>
    <DemoB></DemoB>

  </div>
</template>

<script>
import Base1 from '../../components/base64-md5'

import Login1 from '../../components/login1'
import DemoA from '../../components/demoA'
import DemoB from '../../components/demoB'
export default {
  name: 'table',
  components:{
    Base1,Login1,DemoA,DemoB
  }
}
</script>

<style>

</style>
