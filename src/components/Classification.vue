<template>
  <div class="">
     <div class="one-level">
       <van-tabs v-model="one_level" sticky 
       :color=tabsColor 
       :title-active-color=tabsColor 
       line-width="20px">
          <van-tab v-for="(item,index) in one_level_tabs" :key="index">
             <template #title>{{item.name}}</template>
          </van-tab>
        </van-tabs>
     </div>
     <div class="two-level" v-if="one_level!=0">
       <van-tabs v-model="two_level" sticky
       :color=tabsColor 
       :title-active-color=tabsColor 
       line-width="20px">
          <van-tab v-for="(item2,index2) in two_level_tabs" :key="index2">
             <template #title>{{item2.name}}</template>
          </van-tab>
        </van-tabs>
     </div>
  </div>
</template>

<script>
export default {
    name:'classification',
    components:{
      
    },
    data(){
      return{
      one_level_tabs:[
        {name:"全部",id:0,level:0},
        {name:"外科",id:1,level:0},
        {name:"内科",id:2,level:0},
        {name:"妇产科",id:3,level:0},
        {name:"妇产科",id:3,level:0},
      ],
      two_level_tabs:[
        {name:"全部",id:0,level:1},
        {name:"普外科",id:1,level:1},
        {name:"肠胃外科",id:2,level:1},
        {name:"肝脏外科",id:3,level:1},
        {name:"肝脏外科",id:3,level:1},
      ],
      one_level:1,
      two_level:1,
      tabsColor:'#1B97EE'
      }
    },
    created(){
      
    },
    methods:{
      
    }
}
</script>

<style lang="less" scoped>
  .one-level{
    background: #fff;
    /deep/.van-tab__text{
      font-size: 16px;
    }
  }
  .two-level{
    background: #fff;
    padding: 0 15px;
    /deep/.van-tab__text{
      font-size: 14px;
    }
  }
  // /deep/.van-tabs__line{
  //   width: 20px;
  // }
</style>