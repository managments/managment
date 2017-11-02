<template>
  <div id="mainLogin">
    <h3  class="col-sm-offset-2 col-sm-10">火星黑洞</h3>
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">邮箱：</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">密码：</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default btn-success"><router-link :to="{path:'/mainPage'}">登陆</router-link></button>
    </div>
  </div>
</form>
  </div>
</template>

<script>
export default {
  name: 'mainLogin',
}
</script>

<style scoped="scoped">
#mainLogin{
  width: 500px;
  height: 400px;
  margin: 200px auto;
}
</style>
