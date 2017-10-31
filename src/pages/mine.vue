<template>
  <div id="mine">
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
          name : '我是我的--axios',
          url:'http://h5.yztctech.net/api/axf/apihomehot.php',
          list:[]
      }
  },
//   网络请求一般放在钩子函数中
    created(){
        this.axios.get(this.url).then(res=>{
            this.list = res.data.data
            console.log(res.data.data)
        },err=>{
            console.log(err)
        })
    }
 

}
</script>
<style lang="css" scoped>
    #mine h1{
        color: powderblue;
    }
</style>



