<template>
<div class="h5-contain">
  <div class="video-wrap">

  </div>
  <div class="tab-wrap">
    <van-tabs v-model="active" 
    :color=tabsColor 
    :title-active-color=tabsColor>
      <van-tab title="相关视频">相关视频</van-tab>
      <van-tab title="简介">
        <div class="detail-wrap">
          <div class="detail-title">
              慢性咳嗽与户籍到感染诊治
          </div>
          <div class="detail-introduction">直播时间：2021年7月27日 19:00</div>
          <div class="detail-title">
              参会专家
          </div>
          <div class="card-list">
            <div class="card-img">
              <img src="" alt="">
            </div>
            <div class="card-detail">
              <div class="card-title">肖春华</div>
              <div class="card-content">
                <p>浙江大学医学院附属妇产科医院 生殖中心</p>
                <p>主任医师</p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="card-list">
            <div class="card-img">
              <img src="" alt="">
            </div>
            <div class="card-detail">
              <div class="card-title">肖春华</div>
              <div class="card-content">
                <p>浙江大学医学院附属妇产科医院 生殖中心</p>
                <p>主任医师</p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="detail-title">
              直播详情
          </div>
          <div class="live-datail">

          </div>
          <!-- 底部弹框 -->
          <div class="bottom-layer">
              <div class="time-layer">
                <div><span>距离开播：</span></div>
                <div class="time-content"><span>00</span>天 <span>09</span>时<span>11</span>秒</div>
              </div>
              <div class="buttom-layer">
                <van-button plain  type="info">邀请好友一起看</van-button>
                <van-button type="info">直播提醒</van-button>
              </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="聊天室">
        <div>
          <div class="dialog-room">
            <!-- 客服 -->
            <div class="dialog-wrap dialog-robot">
              <div class="avatar">
                <img src="" alt="">
              </div>
              <div class="pop">
                <div class="message2">
                  <div>是肖春华医生的讲解吗</div>
                </div>
              </div>
            </div>
            <!-- 机器人 -->
            <div class="dialog-wrap dialog-user">
              <div class="pop">
                <div class="message2">
                  <div>是的，请问有什么可以帮您的</div>
                </div>
              </div>
              <div class="avatar">
                <img src="" alt="">
              </div>
            </div>
          </div>
          <!-- 底部输入框 -->
          <div class="dialog-input-box">
              <van-search
                v-model="value"
                show-action
                placeholder="我要评价~"
                @search="onSearch"
              >
              <template #left-icon>
                <div>
                  <van-icon name="edit" />
                </div>
              </template>
                <template #action>
                  <div class="add">
                    <van-icon name="add-o" size="24"/>
                  </div>
                </template>
              </van-search>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
  
</div> 
</template>

<script>
export default {
  name:'',
  components:{

  },
  data(){
    return{
      active:1,
      tabsColor:'#1B97EE',
      value:""
    }
  },
  methods:{
     
  }

}
</script>

<style scoped lang="less">
  .video-wrap{
    width: 100%;
    height: 180px;
    background: #fff;
    // border-bottom: 1px solid #cacaca;
  }
  .tab-wrap{

  }
  .detail-wrap{
    background: #fff;
    margin-top: 10px;
    padding:0 15px;
    
  }
  .detail-title{
      padding: 5px 0;
      color: #333;
      font-size: 18px;
  }
  .detail-introduction{
    font-size: 14px;
    color: #AFB4B8;
    margin: 10px 0;
  }
  .card-list{
    width: 100%;
    display: flex;
    align-items: center;
    .card-img{
      width: 55px;
      height: 55px;
      img{
        width: 100%;
        height: 100%;

      }
    }
    .card-detail{
      flex: 1;
      margin-left: 20px;
      padding: 10px 0;
      .card-title{
        font-size: 16px;
        color: #333;
      }
      .card-content{
        color: #AFB4B8;
        p{
          margin: 5px 0;
        }
      }
    }
  }
  // 直播详情
  .live-datail{
    width: 100%;
    height: 200px;
    padding-bottom: 180px;
  }
  .bottom-layer{
    position: fixed;
    bottom: 0;
    padding: 25px;
    left: 0;
    right: 0;
    border-top: 1px solid #dbe6ef;
    .time-layer{
      display: flex;
      justify-content: center;
      align-items: center;
      .time-content{
        color:#AFB4B8 ;
        span{
          color: #333;
          font-size: 18px;
          margin:0 5px;
        }
      }
    }
    .buttom-layer{
      padding: 20px  35px;
      display: flex;
      justify-content: space-between;
      /deep/ .van-button{
        border-radius:20px;
        // &:first-child{
        //   margin-right: 20px;
        // }
      }
    }
  }
  // 聊天室
  .dialog-room{
    padding:20px 15px 50px 15px;
    .dialog-wrap{
      display: flex;
      width: 100%;
      margin-top: 10px;
      &.dialog-robot{
        .message2{
          color: #333;
          background-color: #fff;
          border-bottom-color:#fff;/*为了给after伪元素自动继承*/
        }
        .message2::before{
          left: -16px;
          border-color: transparent #fff transparent transparent;
        }
      }
       &.dialog-user{
         .pop{
           justify-content: flex-end;
         }
        .message2{
          color: #fff;
          background-color: #1B97EE;
          border-bottom-color:#1B97EE;/*为了给after伪元素自动继承*/
          margin-right: 10px;
        }
        .message2::before{
          right: -16px;
          border-color: transparent transparent transparent #1B97EE;
        }
      }
      .avatar{
        width: 28px;
        height: 28px;
        border: 1px solid #AFB4B8;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .pop{
          flex: 1;
          display: flex;
        }
    }

  }
  .dialog-input-box{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #dbe6ef;
    .add{
      display: flex;
      align-items: center;
    }

  }
.message2 {
    max-width: 60%;
    background-color: green;
    border-bottom-color:green;/*为了给after伪元素自动继承*/
    font-size: 12px;
    font-family: Arial;
    line-height: 18px;
    padding: 5px 12px 5px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
    word-break: break-all;
}
.message2::before {
    content: '';
    position: absolute;
    top: 50%;
    // left: -16px;
    width: 0px;
    height: 0px;
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent green transparent transparent;
}
</style>