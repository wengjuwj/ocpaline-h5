<template>
  <div class="">
    <div>
        <div class="one-level">
          <van-tabs v-model="one_level" sticky 
          :color=tabsColor 
          :title-active-color=tabsColor 
          line-width="20px">
              <van-tab v-for="(item,index) in classArray" :key="index">
                <template #title>{{item.name}}</template>
              </van-tab>
          </van-tabs>
        </div>
        <div class="two-level" v-if="classArray.length!=0&&classArray[one_level].classifications_level2">
          <van-tabs v-model="two_level" sticky
          :color=tabsColor 
          :title-active-color=tabsColor 
          line-width="20px">
              <van-tab v-for="(item2,index2) in classArray[one_level].classifications_level2" :key="index2">
                <template #title>{{item2.name}}</template>
              </van-tab>
            </van-tabs>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'classification',
    props:{
      classArray:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    components:{
      
    },
    data(){
      return{
        one_level:0,
        two_level:0,
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