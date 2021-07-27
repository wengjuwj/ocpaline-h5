import Mock from 'mockjs2'
import { builder } from '../util'

const testInfoData=options =>{
  console.log('options', options);
  const testData={
    testname:"testname",
    testid:"111",
    testreason:"测试一下模拟api数据"
  }
  return builder(testData)
}
Mock.mock(/\/api\/test\/info/, 'get', testInfoData)