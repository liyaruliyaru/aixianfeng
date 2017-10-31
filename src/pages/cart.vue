<template>
  <div id="cart">
      <h1>{{name}}</h1>
      <ul>
         <li v-for="item in list" :key="item.id">
             {{item.name}}
             <img :src="item.img" alt="">
         </li>
     </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
          name : '我是购物车',
          url:'http://h5.yztctech.net/api/axf/apihomehot.php',
          list:[]
      }
  },
  created(){
      this.$http.get(this.url).then(res=>{
          console.log(JSON.parse(res.data))
          this.list = JSON.parse(res.data).data
      },err=>{
          console.log(err)
      })
  }
}
</script>
<style lang="css" scoped>
    #cart h1{
        color: red;
    }
</style>


