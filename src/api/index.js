import request from "@/utils/request";

const TestApi = {
  ApiOne:"test/classification"
}

/**
 * @param parameter
 * @returns {*}
 */
export function getClassification () {
  return request({
    url: TestApi.ApiOne,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}