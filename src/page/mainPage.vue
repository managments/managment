<template>
  <div id="mainPage">
    111
 <Heads></Heads>
        <div class="container-fluid">
          <div class="row" style="padding-top:52px">
            <div class="col-md-2" style="padding:0">
              <Silde></Silde>
            </div>
            <div class="col-md-10">
                <router-view></router-view>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import Heads from '../components/heads'
import Silde from '../components/silde'
export default {
  name: 'mainPage',
components:{
    Heads,Silde
  }
}
</script>

<style>

</style>