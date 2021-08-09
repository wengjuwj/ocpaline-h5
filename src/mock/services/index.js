import Mock from 'mockjs2'
import { builder } from '../util'

const classificationData=() =>{
  let testData={
    one_level_tabs:[
      {name:"全部",id:0,level:0},
      {name:"外科",id:1,level:0},
      {name:"内科",id:2,level:0},
      {name:"妇产科",id:3,level:0},
      {name:"妇产科",id:3,level:0},
    ],
    two_level_tabs:[
      {name:"全部",id:0,level:1},
      {name:"普外科",id:1,level:1},
      {name:"肠胃外科",id:2,level:1},
      {name:"肝脏外科",id:3,level:1},
      {name:"肝脏外科",id:3,level:1},
    ],
  };
  return builder(testData)
}
Mock.mock(/\/api\/test\/classification/, 'get', classificationData)