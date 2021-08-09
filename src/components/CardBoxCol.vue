<template>
  <div class="box-col-wrapper">
      <div class="box-col-box">
        <!-- title部分 -->
        <div class="box-title-box">
          <div class="box-col-title">
            <div>{{title}}</div>
            <div class="more">{{more}}</div>
          </div>
        </div>
        <!-- 内容部分 -->
        <div class="box-col-card">
            <div class="box-card" v-for="item in 6" :key="item">
                <div class="box-card-top">
                  <!-- 封面图部分 -->
                  <img src="" alt="" srcset="">
                </div>
                <div class="box-card-bottom">
                  <div class="box-bottom-title">
                    慢性咳嗽与呼吸道感染诊治高峰论坛
                  </div>
                  <div class="box-bottom-info">
                      <div class="right-info">
                        <span>参会专家:</span>
                        <span>张晓涛</span>
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
    title: {
      type: String,
      default: '今日直播'
    },
    more: {
      type: String,
      default: '更多内容>>'
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
    margin-top: 15px;
    padding: 0 10px;
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
            }
            .box-bottom-info{
              display: flex;
              justify-content: flex-end;
              .right-info{
                margin-top: 10px;
                color: #999;
                span:first-child{
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
    }
    
  }
</style>