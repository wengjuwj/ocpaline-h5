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
        meta:{
          title:"直播"
        }
      },
      {
        path:'/advance',
        name: 'advance',
        component: () => import('@/views/Advance.vue') ,
        meta:{
          title:"直播预告"
        }
      },
      {
        path:'/advancedetail',
        name: 'advance',
        component: () => import('@/views/AdvanceDetail.vue') ,
        meta:{
          title:"直播预告"
        }
      },
    ]
  },
  
];

const router =new VueRouter({routes});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title;
  }
  next();
})

export default router

