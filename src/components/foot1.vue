<template>
  <div class="foot1 navbar-fixed-bottom">
    <ul>
      <li v-for="lis in ul">{{lis.li}}</li>
    </ul>
    <p>
      Copyright&nbsp;&copy;&nbsp;author:{{author}} - 2016 All rights reserved
    </p>
  </div>
</template>
<script>
export default {
  name: "foot1",
  data() {
    return {
      ul: [
        { li: "琉璃之金" },
        { li: "朦胧之森" },
        { li: "缥缈之滔" },
        { li: "逍遥之火" },
        { li: "璀璨之沙" }
      ]
    };
  },
  computed: {
    author() {
      return this.$store.state.author;
    }
  }
};
</script>
<style scoped>
.foot1{
  background: rgba(52, 52, 52, 1);
color:#fff;
}
ul{
  display:flex;
  justify-content:center;
  padding-left: 0px;
}
li{
  list-style: none;
  padding:5px;

}
</style>

