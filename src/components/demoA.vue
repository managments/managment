<template>
  <div class="demoA">
    我是组件A
     <input type="button" value="把A数据给B" @click="send">
  </div>
</template>

<script>
export default {
  name: "demoA",
  data() {
    return {
      a: "我是aaaaaaaa"
    };
  },
  mounted() {},
  methods: {
    send() {
      this.$store.dispatch("sendA", this.a);
    }
  }
};
</script>

<style>

</style>

