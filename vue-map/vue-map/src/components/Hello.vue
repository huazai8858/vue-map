<template lang="html">
<div class="">
    <h1>{{msg}}</h1>
    <ul>
      <li><router-link to="/hello/world">子路由</router-link></li>
      <li><router-link to="/hello/ajax">数据</router-link></li>
    </ul>
    <router-view></router-view>

</div>

</template>

<script type="text-javaScript">
export default {
  data(){
    return{
      msg:'路由'
    }
  }

}
</script>

<style lang="css">
</style>
