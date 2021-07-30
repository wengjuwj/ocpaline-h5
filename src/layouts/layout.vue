<template>
  <div class="h5-layout">
      <Header></Header>
      <div class="container">
        <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name:"layout",
  components:{
    Header,
    Footer
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .h5-layout{}
</style>