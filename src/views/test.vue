<template>
  <div>
     <button @click="test" style="background:green;color:#fff">测试vue链接</button>
  </div>
</template>

<script>
import {getTestInfo} from '@/api/test.js'
export default {
  data(){
    return{

    }
  },
  methods:{
    test(){
      return new Promise((resolve, reject) => {
        getTestInfo().then(response => {
          // const result = response.result

          // if (result.role && result.role.permissions.length > 0) {
          //   const role = result.role
          //   role.permissions = result.role.permissions
          //   role.permissions.map(per => {
          //     if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
          //       const action = per.actionEntitySet.map(action => { return action.action })
          //       per.actionList = action
          //     }
          //   })
          //   role.permissionList = role.permissions.map(permission => { return permission.permissionId })
          //   commit('SET_ROLES', result.role)
          //   commit('SET_INFO', result)
          // } else {
          //   reject(new Error('getInfo: roles must be a non-null array !'))
          // }

          // commit('SET_NAME', { name: result.name, welcome: welcome() })
          // commit('SET_AVATAR', result.avatar)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }

}
</script>

<style scoped>

</style>