<template>
  <div class="box-col-wrapper">
      <div class="box-col-box">
        <!-- title部分 -->
        <div class="box-title-box" v-if="titleShow">
          <div class="box-col-title">
            <div>{{title}}</div>
            <div class="more">{{more}}</div>
          </div>
        </div>
        <!-- 内容部分 -->
        <div class="box-col-card">
            <div class="box-card" v-for="(item,index) in cardList" :key="index">
                <div class="box-card-top">
                  <!-- 封面图部分 -->
                  <img :src="item.back_img" alt="" srcset="">
                </div>
                <div class="box-card-bottom">
                  <div class="box-bottom-title">
                    {{item.name}}
                  </div>
                  <div class="box-bottom-info">
                    <div class="info-short">
                      <div class="right-info">
                            <span class="info-label">参会专家&nbsp;:&nbsp;</span>
                            <span>{{item.professors[0].name}}</span>
                            <!-- <van-icon  class="arrow" name="arrow-down" v-if="!item.view" />
                            <van-icon class="arrow" name="arrow-up" v-if="item.view" /> -->
                      </div>
                    </div> 
                    <div class="info-detail" v-if="item.view">
                        <div class="info-detail-item" v-for="(item1,index1) in item.professors" :key="index1">
                          <span class="hospital">{{item1.hospital}}</span>
                          <span class="name">{{item1.name}}</span>
                          <span class="title">{{item1.title}}</span>
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
    name:'cardBox',
    props:{
    titleShow:{
      type:String,
      default:true
    },
    title: {
      type: String,
      default: '今日直播'
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
        

      }
    },
    created(){
      
    },
    methods:{
      
    }
}
</script>

<style lang="less" scoped>
  .box-col-wrapper{
    margin-top: 5px;
    padding: 10px 10px 0 10px;
    background: #fff;
    .box-col-box{
      // title 部分
      .box-title-box{
        padding: 10px 0;
        .box-col-title{
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
      .box-col-card{
        display: flex;
        flex-wrap: wrap;
        .box-card{
          width: 48.5%;
          margin-right: 3%;
          &:nth-child(2n){
            margin-right: 0;
          }
          .box-card-top{
            width: 100%;
            height: 100px;
            box-sizing: border-box;
            border: 1px solid#cacaca;
            display: flex;
            align-items: center;
            img{
              width: 100%;
            }
          }
          .box-card-bottom{
            padding:8px;
            .box-bottom-title{
              font-size: 14px;
              color: #000;
              line-height: 18px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              height: 36px;
            }
            .box-bottom-info{
              .info-short{
                display: flex;
                justify-content: flex-end;
                .info-label{
                  margin-right:5px;
                } 
              }
              .right-info{
                margin-top: 10px;
                color: #999;
                display: flex;
                align-items: center;
              }
              .info-detail{
                  color: #999;
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
</style>