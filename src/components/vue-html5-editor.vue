<template>
  <div class="html5_editor">
    <vue-html5-editor @change="updateData" :content="content" :height="500"></vue-html5-editor>
  </div>
</template>
<script>
export default {
  name:"html5_editor",
  data(){
    return{
      content: "<h3>vue html5 editor</h3>",
    }
  },
  methods:{
    updateData: function (data) {
        this.content = data;
        console.log(this.content);
    },
  }
}
</script>

