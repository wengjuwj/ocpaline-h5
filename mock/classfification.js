
const Mock = require('mockjs')

const List={
  classifications:[
    {
      name:"全部",
      id:1,
      level:1,
      classifications_level2:[
        {name:"全部",id:121,level:2},
        {name:"外科",id:122,level:2},
        {name:"内科",id:123,level:2},
        {name:"妇产科",id:124,level:2},
        {name:"专病专科",id:125,level:2},
      ]
    },
    {
      name:"外科",
      id:2,
      level:1,
      classifications_level2:[
        {name:"全部",id:221,level:2},
        {name:"普外科",id:222,level:2},
        {name:"心外科",id:223,level:2},
        {name:"胸外科",id:224,level:2},
        {name:"整形外科",id:225,level:2},
      ]
    },
    {
      name:"内科",
      id:2,
      level:1,
      classifications_level2:[
        {name:"全部",id:221,level:2},
        {name:"消化科",id:222,level:2},
        {name:"内分泌科",id:223,level:2},
        {name:"内科",id:224,level:2},
        {name:"神经内科",id:225,level:2},
      ]
    },
    {
      name:"妇产科",
      id:2,
      level:1,
      classifications_level2:[
        {name:"全部",id:221,level:2},
        {name:"产科",id:222,level:2},
        {name:"妇产科",id:223,level:2},
        {name:"妇科肿瘤",id:224,level:2},
      ]
    },
    {
      name:"专病专科",
      id:2,
      level:1,
      classifications_level2:[
        {name:"全部",id:221,level:2},
        {name:"感染病科",id:222,level:2},
        {name:"放疗科",id:223,level:2},
        {name:"皮肤科",id:224,level:2},
        {name:"心理医学科",id:225,level:2},
      ]
    },
  ],
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
        data: List
      }
    }
  },
]
