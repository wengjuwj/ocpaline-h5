import request from "@/utils/request";
/**
 * @param parameter
 * @returns {*}
 */
export function getClassification (query) {
  return request({
    url: "/test/classification",
    method: 'get',
    params: query
  })
}