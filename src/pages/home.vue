<template>
  <div id="home">
      <h1>{{name}}</h1>
      <ul>
          <li v-for="item in productList" :key = 'item.id'>
              <router-link :to="/xiangqing/ + item.productId">{{ item.productName }}</router-link>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return{
          name : '我是首页=====声明式传值',
          productList: [
            { productId: 1001, productName: '小浣熊', prodcutPrice: 3.5 },
            { productId: 1002, productName: '小当家', prodcutPrice: 2.5 },
            { productId: 1003, productName: '康师傅', prodcutPrice: 4.5 },
            { productId: 1004, productName: '统一', prodcutPrice: 5.5 },
            { productId: 1005, productName: '今麦郎', prodcutPrice: 6.5 }
        ]
      }
  }
}
</script>
<style lang="css" scoped>
    #home h1{
        color:purple;
    }
</style>



