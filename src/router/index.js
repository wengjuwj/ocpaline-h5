import VueRouter from 'vue-router'
import Vue from 'vue'
import Layout from '@/layouts/Layout'


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
        component: () => import('@/views/Index.vue') ,
      }
    ]
  },
  
];

const router =new VueRouter({routes});

export default router

