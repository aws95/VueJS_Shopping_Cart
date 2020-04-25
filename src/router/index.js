import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/product-list',
    name: 'Product List',
    component: () => import(/* webpackChunkName: "productList" */ '../views/ProductList.vue')
  }
  ,
  {
    path: '/product-description/:product',
    name: 'ProductDescription',
    component: () => import(/* webpackChunkName: "productdescription" */ '../views/ProductDescription.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    props: true
  }

]

const router = new VueRouter({
  routes
})

export default router
