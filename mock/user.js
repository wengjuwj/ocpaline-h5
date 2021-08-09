
const Mock = require('mockjs')

const List=[]
console.log('走进了mock', '')
for(let i=0;i<6;i++){
  List.push(
    Mock.mock(
      {
        id: i+1,
        timestamp: +Mock.Random.date('T'),
        name:"aaaa",
        url:"xxx.xxx.xxx",
        user_name:"专家"+(i+1),
        classification:"分类"+(i+1),
        status:"0",
        status_text:"未开始",
        visitors_num:900,
        visitors_multiple:2,
        comment_num:2000,
        telecase_time:"2021-08-10 18:00"
      }
    )
  )
}
module.exports = [
  // user login
  {
    url: '/test/classification',
    type: 'get',
    response: config => {
      console.log('走进了接口mock', '')
      return {
        code: 200,
        data: {
          total: List.length,
          data: List
        }
      }
    }
  },
]
