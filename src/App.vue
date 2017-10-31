<template>
  <div id="app">
   <tab-bar></tab-bar>
   <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/TabBar'

export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
