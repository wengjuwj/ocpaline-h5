<template>
  <div class="pc-layout">
      <Header></Header>
      <div class="container">
        <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
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
  .pc-layout{}
</style>