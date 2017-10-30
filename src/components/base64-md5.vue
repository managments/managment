<template>
  <div class="base">
    <p>Base64编译:{{arr1}}</p>
    <p>Base64解码:{{arr2}}</p>
    <p>MD5加密:{{arr3}}</p>
    <p>MD5加密:{{arr4}}</p>
  </div>
</template>

<script>
// 引入
import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;
  export default({
    name:"base",
    data(){
      return{
        arr1:Base64.encode('dankogai'),
        arr2:Base64.decode('ZGFua29nYWk='),
        arr3:md5('The quick brown fox jumps over the lazy dog'),
        arr4:md5('中文'),
      }
    },
    mounted(){
      console.log(Base64.encode('dankogai'))
    }
  })
</script>

<style scoped>

</style>
