<template>
  <div id="xiangqing">
      <h2>{{name}}</h2>
      <h2>商品Id：{{ product.productId }}</h2>
        <h2>商品Name：{{ product.productName }}</h2>
        <h2>商品Price：{{ product.prodcutPrice }}</h2>
  </div>
</template>
<script>
export default {
  data(){
      return{
          name:'商品详情页',
          productList: [
            { productId: 1001, productName: '小浣熊', prodcutPrice: 3.5 },
            { productId: 1002, productName: '小当家', prodcutPrice: 2.5 },
            { productId: 1003, productName: '康师傅', prodcutPrice: 4.5 },
            { productId: 1004, productName: '统一', prodcutPrice: 5.5 },
            { productId: 1005, productName: '今麦郎', prodcutPrice: 6.5 }
        ]
      }
  },
  computed:{
      product(){
          console.log(this.$route.params.id)
          for(var item of this.productList){
              if(this.$route.params.id == item.productId){
                  return item
              }
          }
      }
    }
}
</script>

