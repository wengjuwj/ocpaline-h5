import request from "@/utils/request";

const TestApi = {
  ApiOne:"test/info"
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function getTestInfo () {
  return request({
    url: TestApi.ApiOne,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}