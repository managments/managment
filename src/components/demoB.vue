<template>
  <div class="demoB">
    我是组件B{{amsg}}
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "demoB",
  data() {
    return {};
  },
  computed: {
    // ...mapState({
    //     a:state =>state.a,
    //     b:state =>state.b
    // }),
    ...mapGetters(["amsg"])
  }
};
</script>

<style>

</style>

