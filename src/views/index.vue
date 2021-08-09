<template>
  <div class="h5-contain">
     <Classification></Classification>
     <CardBoxCol></CardBoxCol>
     <CardBoxCol title="往期回播"></CardBoxCol>
     <CardBoxLine></CardBoxLine>
  </div>
</template>

<script>
import Classification from '@/components/Classification'
import CardBoxCol from '@/components/CardBoxCol'
import CardBoxLine from '@/components/CardBoxLine'
import {getClassification} from '@/api/index'
export default {
    name:'index',
    components:{
      Classification,
      CardBoxCol,
      CardBoxLine
    },
    data(){
      return{
        

      }
    },
    created(){
      this.getList()
    },
    methods:{
      getList(){
        getClassification({}).then(response => {
          console.log('response', response)
        })
      }
    }
}
</script>

<style lang="less" scoped>
  
</style>