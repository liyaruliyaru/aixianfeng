<template>
  <div class="tabbar">
    <router-link to = '/home'>首页</router-link>
    <router-link to = '/market'>超市</router-link>
    <router-link to = '/cart'>购物车</router-link>
    <router-link to = '/mine'>我的</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  line-height: 80px;
}

.tabbar a{
  color: blue;
}
</style>
