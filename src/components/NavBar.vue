<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    right-text="搜索"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #title>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name:'',
  components:{
    
  },
  data(){
    return {

    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style>

</style>