<template>
  <div class="h5-contain">
    <NavBar></NavBar>
    <van-tabs v-model="active">
      <van-tab title="直播预告">
        <CardBoxLine :title-show=boxTitleShow :card-list="card_box_before"></CardBoxLine>
      </van-tab>
      <van-tab title="往期回播">
        <CardBoxLine :title-show=boxTitleShow :card-list="card_box_before"></CardBoxLine>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CardBoxLine from '@/components/CardBoxLine'
import {getLiveList} from '@/api/index'
import {parseTime} from '@/utils/util'

export default {
  name:'',
  components:{
    NavBar,
    CardBoxLine
  },
  data(){
    return {
      boxTitleShow:false,
      active: 2,
      card_box_before:[],
      card_box_after:[],
    }
  },
  created(){
    this.getList()
  },
  methods: {
   getList(){
        let params={
          
        }
        getLiveList(params).then(response=>{
          let liveList=response.data.liveList;
          console.log('liveList', liveList)
          // 获取当前时间
          let date=new Date();
          let year=date.getFullYear();
          let month=date.getMonth()+1;
          let day=date.getDate();
          month<10?month='0'+month:'';
          day<10?day='0'+day:'';
          let compareTime=year+'-'+month+'-'+day;
          liveList.forEach((item,index)=>{
            if(this.comptime(parseTime(item.tele_time,'{y}-{m}-{d}'),compareTime)==1){
              this.card_box_before.push(item)
            }
            if(this.comptime(parseTime(item.tele_time,'{y}-{m}-{d}'),compareTime)==2){
              this.card_box_after.push(item)
            }
          });
          console.log(this.card_box_before,"this.card_box_before")
          console.log(this.card_box_after,"this.card_box_after")
        })
      },
       comptime(beginTime,nowTime) {
          console.log('beginTime', beginTime)
          console.log('nowTime', nowTime)
          let begin= beginTime.replace(/\-/g,'/')
          let now= nowTime.replace(/\-/g,'/')
          if(now<begin){//未播
            return 2
          }
          if(now>begin){//已播
            return 1
          }
          if(now==begin){//当前
            return 0
          }
      }
  },
}
</script>

<style>

</style>