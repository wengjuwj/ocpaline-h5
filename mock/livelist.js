
const Mock = require('mockjs')
const liveArr=["慢性咳嗽与呼吸道感染诊治高峰论坛","上海麻醉医学发展专题片","智启梦想高校行大咖金句——王志萍教授","智启梦想高校行大咖金句——曾因明教授","智启梦想高校行大咖金句——董海龙教授"]

const List={
    liveList:[]
}

module.exports = [
  // user login
  {
    url: '/test/livelist',
    type: 'get',
    response: config => {
      let mockList=mockData()
      return {
        code: 200,
        data: mockList
      }
    }
  },
]
function mockData(){
      let livelist=[];
      let maxLen=Mock.mock({
        "number|6-20": 1
      }).number;
      for(let j=0;j<maxLen;j++){
        let mockTime=Mock.Random.datetime();
        if(j%2==0){
          mockTime=Mock.Random.now('second');
        }
        let liveItem={
          name:liveArr[Mock.mock({
            "number|0-4": 1
          }).number],
          professors:Mock.mock({
            "array|1-10": [
              {
                "name|+1": [
                  "张晓涛",
                  "沈婉婷",
                  "王宗琦"
                ],
                "hospital|+1": [
                  "上海交大第二附属医院",
                  "复旦大学附属华山医院",
                  "中山医院"
                ],
                "title|+1": [
                  "主任",
                  "院长",
                  "副院长"
                ],
              }
            ]
          }).array,
          back_img:Mock.Random.image('200x100','#50B347', '#FFF', 'Mock'),
          tele_time:mockTime,
          view:false

        }
        livelist.push(liveItem)
      }
      List.liveList=livelist

  return List
}
