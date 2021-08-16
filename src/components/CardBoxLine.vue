<template>
  <div class="box-line-wrapper">
     <div class="box-line-box">
       <!-- title部分 -->
       <div class="box-title-box" v-if="titleShow">
          <div class="box-line-title">
            <div>{{title}}</div>
            <div class="more">{{more}}</div>
          </div>
        </div>
        <!-- 内容部分 -->
        <div class="box-line-card">
            <div class="box-card" v-for="(item,index) in cardList " :key="index">
                <!-- 左封面 -->
                <div class="box-card-left">
                    <!-- 存放封面图片部分 -->
                    <img :src="item.back_img" alt="" srcset="">
                    <!-- 左上角角标部分 -->
                    <div class="mark">
                        <div>直播预告</div>
                    </div>
                </div>
                <!-- 右内容 -->
                <div class="box-card-right">
                  <div class="box-right-title">
                      {{item.name}}
                  </div>
                  <div class="info">
                      <div class="info-item">
                          <div class="info-short" @click="item.view=!item.view">
                            <span class="info-label">参会专家&nbsp;:&nbsp;</span>
                            <span>{{item.professors[0].name}}</span>
                            <van-icon  class="arrow" name="arrow-down" v-if="!item.view" />
                            <van-icon class="arrow" name="arrow-up" v-if="item.view" />
                          </div>
                          <div class="info-detail" v-if="item.view">
                              <div class="info-detail-item" v-for="(item1,index1) in item.professors" :key="index1">
                                <span class="hospital">{{item1.hospital}}</span>
                                <span class="name">{{item1.name}}</span>
                                <span class="title">{{item1.title}}</span>
                              </div>
                          </div>
                      </div>
                      <div class="info-item">
                        <div class="info-short">
                          <span>直播时间&nbsp;:&nbsp;</span>
                          <span>2021-07-24 09:20</span>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'boxLine',
    props:{
    titleShow:{
      type:String,
      default:true
    },
    title: {
      type: String,
      default: '直播预告'
    },
    more: {
      type: String,
      default: '更多>'
    },
    cardList: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    },
    components:{
      
    },
    data(){
      return{
        view:false

      }
    },
    created(){
      
    },
    methods:{
  
    }
}
</script>

<style lang="less" scoped>
  .box-line-wrapper{
    margin-top: 5px;
    padding: 10px 10px 0 10px;
    background: #fff;
    .box-line-box{
      // title 部分
      .box-title-box{
        padding: 10px 0;
        .box-line-title{
        padding-left: 10px;
        font-size: 16px;
        border-left: 4px solid #1678D3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .more{
          font-size: 14px;
          color: #999;
          cursor: pointer;
        }
      }
      }
      // 内容部分
      .box-line-card{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .box-card{
          width: 100%;
          display: flex;
          // align-items: center;
          margin-bottom: 10px;
          .box-card-left{
            width: 41%;
            height: 100px;
            box-sizing: border-box;
            border: 1px solid#cacaca;
            display: flex;
            align-items: center;
            position: relative;
            img{
              width: 100%;
            }
            .mark{
              position: absolute;
              top: 0;
              left: 0;
              width: 80px;
              height: 25px;
              border-radius: 4px 0 4px 0;
              background: rgba(0, 0, 0, 0.6);
              color: #fff;
              justify-content: center;
              display: flex;
              align-items: center;
            }
          }
          .box-card-right{
            flex: 1;
            margin-left: 15px;
            .box-right-title{
              // height: 40px;
              font-size: 14px;
              color: #000;
              line-height: 18px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .info{
              color: #999;
              .info-item{
                margin: 5px 5px 5px 0 ;
                font-size: 12px;
                .info-short{
                  display: flex;
                  align-items: center;
                  .arrow{
                    margin-left: 3px;
                    color: #899AB4;
                  }
                }
                .info-label{
                  margin-right:5px;
                } 
                .info-detail{
                  .info-detail-item{
                    &:first-child{
                      margin-top: 5px;
                    }
                    margin-bottom: 6px;
                    display: flex;
                    align-items: center;
                    .hospital{
                      flex: 2;
                      line-height: 16px;
                    }
                    .name{
                      flex: 1;
                    }
                    .title{
                      flex: 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
  }
</style>