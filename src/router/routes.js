// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由
import GroupOrder from '@/pages/Center/groupOrder'
import MyOrder from '@/pages/Center/myOrder'

export default [
  {
    path: '/home',
    component: Home,
    meta: { show: true },
  },
  // 搜索页
  {
    // 如何让params可传可不传————加上?
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search',
    // 路由组件的可以通过props传递参数（很少用，不能简写）
    props: ($route) => {
      return { keyword: $route.params.keyword }
    },
  },
  // 登录页面
  {
    path: '/login',
    component: Login,
    meta: { show: false },
  },
  // 注册页面
  {
    path: '/register',
    component: Register,
    meta: { show: false },
  },
  // 商品详情页
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true },
  },
  // 添加购物车成功
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true },
  },
  // 购物车详情
  {
    path: '/shopcart',
    component: ShopCart,
    meta: { show: true },
  },
  // 交易结算页面
  {
    path: '/trade',
    component: Trade,
    meta: { show: true },
  },
  // 提交订单
  {
    path: '/pay',
    component: Pay,
    meta: { show: true },
  },
  // 支付成功
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true },
  },
  // 订单中心
  {
    path: '/center',
    component: Center,
    children: [
      {
        // path: '/center/myorder',
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'grouporder',
        component: GroupOrder,
      },
      {
        path: '',
        redirect: 'myorder',
      },
    ],
  },
  // 重定向：设置默认访问的路由地址
  {
    path: '*',
    redirect: 'home',
  },
]
