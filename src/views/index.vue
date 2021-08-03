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
      
    },
    methods:{
      
    }
}
</script>

<style lang="less" scoped>
  
</style>