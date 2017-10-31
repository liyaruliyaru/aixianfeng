// 导入Vue模块
import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'
// 全局安装路由
Vue.use(VueRouter)
// 导入四个组件
import home from '../pages/home'
import mine from '../pages/mine'
import cart from '../pages/cart'
import market from '../pages/market'
// 导入详情页组件
import xiangqing from '../pages/xiangqing'
// 配置路由规则
const routes = [
    {path:'',component:home},
    {path:'/home',component:home},
    {path:'/mine',component:mine},
    {path:'/cart',component:cart},
    {path:'/market',component:market},
    // 配置详情页路由
    {path:'/xiangqing/:id',component:xiangqing}
]
// 创建路由实例
const router = new VueRouter({
    mode:'history',
    routes
})
// 导出路由实例
export default router