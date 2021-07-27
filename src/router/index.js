import VueRouter from 'vue-router'
import Vue from 'vue'
import Layout from '@/layouts/layout'


Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    name:'layout',
    component:Layout,
    redirect: '/index',
    children:[
      {
        path:'/index',
        name: 'index',
        component: () => import('@/views/index.vue') ,
      }
    ]
  },
  
];

const router =new VueRouter({routes});

export default router

