import request from "@/utils/request";

// 获取分类列表
export function getClassification (query) {
  return request({
    url: "/test/classification",
    method: 'get',
    params: query
  })
}

// 获取直播列表
export function getLiveList (query) {
  return request({
    url: "/test/livelist",
    method: 'get',
    params: query
  })
}
