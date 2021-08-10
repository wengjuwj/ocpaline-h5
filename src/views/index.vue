<template>
  <div class="h5-contain">
     <Classification :class-array="classifications"></Classification>
     <CardBoxCol title="今日直播" :card-list="card_box_today"></CardBoxCol>
     <CardBoxCol title="往期回播" :card-list="card_box_before"></CardBoxCol>
     <CardBoxLine title="直播预告" :card-list="card_box_before"></CardBoxLine>
  </div>
</template>

<script>
import Classification from '@/components/Classification'
import CardBoxCol from '@/components/CardBoxCol'
import CardBoxLine from '@/components/CardBoxLine'
import {getClassification,getLiveList} from '@/api/index'
import {parseTime} from '@/utils/util'
export default {
    name:'index',
    components:{
      Classification,
      CardBoxCol,
      CardBoxLine
    },
    data(){
      return{
        classifications:[],
        card_box_today:[],
        card_box_before:[],
        card_box_after:[],
        search_level_id1:'',
        search_level_id2:'',

      }
    },
    created(){
      this.getClassification()
      this.getList()
    },
    methods:{
      getClassification(){
        getClassification({}).then(response => {
          this.classifications=response.data.classifications;
          console.log('response', response)
        })
      },
      getList(){
        let params={
          level_one:this.search_level_id1,
          level_two:this.search_level_id2
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
            if(this.comptime(parseTime(item.tele_time,'{y}-{m}-{d}'),compareTime)==0){
              this.card_box_today.push(item)
            }
            if(this.comptime(parseTime(item.tele_time,'{y}-{m}-{d}'),compareTime)==1){
              this.card_box_before.push(item)
            }
            if(this.comptime(parseTime(item.tele_time,'{y}-{m}-{d}'),compareTime)==2){
              this.card_box_after.push(item)
            }
          });
          console.log(this.card_box_today,"this.card_box_today")
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
    }
}
</script>

<style lang="less" scoped>
  
</style>