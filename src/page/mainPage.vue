<template>
  <div id="mainPage">
    111
 <Heads></Heads>
        <div class="container-fluid">
          <div class="row" style="padding-top:52px;padding-bottom:70px">
            <div class="col-md-2" style="padding:0">
              <Silde></Silde>
            </div>
            <div class="col-md-10">
                <router-view></router-view>
            </div>
          </div>
        </div>
        <Foot1></Foot1>
  </div>
</template>

<script>
import Heads from '../components/heads'
import Silde from '../components/silde'
import Foot1 from '../components/foot1'
export default {
  name: 'mainPage',
components:{
    Heads,Silde,Foot1
  }
}
</script>

<style>

</style>
