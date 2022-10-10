import service from '@/utils/request'
// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const login = (data) => {
  // return service({
  //   url: '/base/login',
  //   method: 'post',
  //   data: data
  // })
  let res = {"code":0,"data":{"user":{"ID":1,"CreatedAt":"2022-03-29T11:33:01.611+08:00","UpdatedAt":"2022-07-13T17:41:53.58+08:00","uuid":"4588031d-72c3-47bd-a69c-f5a869d90847","userName":"admin","nickName":"超级管理员","sideMode":"dark","headerImg":"http://43.154.193.22:8032/assets/logo.852d45f9.jpg","baseColor":"#fff","activeColor":"#1890ff","authorityId":"888","authority":{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-07-07T15:10:08.949+08:00","DeletedAt":null,"authorityId":"888","authorityName":"super管理员","parentId":"0","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"},"authorities":[{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-07-07T15:10:08.949+08:00","DeletedAt":null,"authorityId":"888","authorityName":"super管理员","parentId":"0","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"},{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-07-13T17:40:32.618+08:00","DeletedAt":null,"authorityId":"8881","authorityName":"普通用户子角色","parentId":"888","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"},{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-03-29T11:33:02.228+08:00","DeletedAt":null,"authorityId":"9528","authorityName":"测试角色","parentId":"0","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"}],"phone":"17611111111","email":"333333333@qq.com"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiNDU4ODAzMWQtNzJjMy00N2JkLWE2OWMtZjVhODY5ZDkwODQ3IiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjoiODg4IiwiQnVmZmVyVGltZSI6ODY0MDAsImV4cCI6MTY2NTk5NzYzNiwiaXNzIjoicW1QbHVzIiwibmJmIjoxNjY1MzkxODM2fQ.J8iSjN6KHY8XSTM7c61vlOebyWWhe6L0wzTknljYO3I","expiresAt":1665997636000},"msg":"登录成功"}
  return new Promise((resolve,reject)=>{
    resolve(res)
  })
}

// @Summary 获取验证码
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/captcha [post]
export const captcha = (data) => {
  // return service({
  //   url: '/base/captcha',
  //   method: 'post',
  //   data: data
  // })
 

  let res = {"code":0,"data":{"captchaId":"vCUdBTUNR21NQ4gH6Qxe","picPath":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABQCAMAAAAQlwhOAAAA81BMVEUAAAByDwHFYlThfnB4FQe1UkTxjoCBHhDif3HZdmi8WUv4lYfee22vTD7FYlS2U0XQbV+3VEbohXeWMyX8mYt2EwXffG6dOiytSjynRDb8mYuJJhiaNynHZFb1koSZNijMaVudOiz2k4Xdemx5FgjlgnTBXlCwTT+7WErUcWOHJBatSjyAHQ+HJBa/XE7TcGJ3FAZ0EQOFIhTad2nBXlB1EgTVcmSPLB6PLB5/HA7LaFqBHhChPjC5Vkj7mIp0EQOyT0HIZVelQjTceWvriHqbOCq6V0mSLyH8mYt6FwmiPzGaNymJJhirSDrbeGp2EwXGY1UM2Z5WAAAAAXRSTlMAQObYZgAABoFJREFUeJzsm9tO3DwQgD2w2lJopVRqQVwtpYeLqqoqVBaQEFtxtcvy/s/zKwcnc3RsJ1n2Rx1UNXF8mM9jj8dO1v2Tf1LL1UsrMKo89ua4unpNxI+PEcRG+udQoadcjaaWfl5LPn8OED89BYh/ZLf5spJr4R8/UonPE/PvmyTznmNiACj/lTKyXvsjiLeihPYmi3r/B8w7f1HixVj4JlQbHTBuD8fJu3cVcU2LH0ANLwrc3ISJWR2jKTpMoP6DxsIS12dTkoO8soJa8hes4VKj4nFLuB5I3mwLnZI7HJJscqvMFCBSQyGuh4cHkT2jldPT07aCsoMR72a3xBQXKuuSDA+8QJ6ZT5vWqgYvmpYqmZC3ECmdD67+lrpf4mVynW1Z+UHJe3Gxk5W9KAonHG/b1wCwXC5jWHJVLVs7ODhwpYV3E8sU1H6AB1ZNHKmEoex3u8Sh944H3bhKUT1LeCMcP14HUAfC9+8m8eHhoSPrAGvNO8vI9mOVpET0tkjyRgaxXeCQIco7h+fXCKIEiPimKIrqqfRrRnWJivHmgfYvOLJUdKXEWEho0q1sJcEVVb2lX4utLkGLBuSSpnQ3c8DRD4gMkdhkjgCsViurSNdQLG9vWAzsDpy7vLykDfqb+XxeBbPdGtlBs5kfaA93SV2LzeuyJk88caO0bmEAmIPQu/nvCFUA+pLYDg5uYWtQgDK9ufxWiUJF6BQV1RNzODZ4O1MeHR3RQs5xR9BFE6QPbQfYuseA/P6NiT9GEutnB2sODAye9M6Ro421yHjKcwvXl5YVTePiHRzh/YiIA5PKP6UNr9drtub6y8Z+WuejIYgnO97oYWXAu3edFvTg2D5U/ogrMIG7XSZtes06ATsmJbsTIWEz5Euvj4YuGzJqNQ53k0IcYMGaBB/rJhO8DvlgkV04oCah9Prt8KCrt6YaoPMq0hm/bIKVZApPftDnEnB7gIi7uKKK17fWdW0hd9jClPjXL5N4tUomVlcHySs14zXIThD7oO46YGEnY9gkC0eEXBpxpdXGeqoEWTyXWKF6aiFdMCRg7fPVyIXwpM1m49fcmShBYwjFotTZavaUwR7w4pkSPAIhTqn1wtXlxrPMZjOil7JrZeo3BZt+1NYgPgekUtm8QV8NbI1A49NPXnAwY0FwdblsU0wNwQwUBS9zAQN3oXZ5vgC1EQkNtMAHR521lsulf26HR11vhIANBzZELGLN2Yj52A3Qck+HLXzi/Gi0B6EaVFFeMeV4AX4yGyHg4I2RLhSkrZ2TmKDcw7bPT05OAhXhR8Y64HCIy3RAt/zsPUrgzRudWKyXNKV+26ZZ2DUWbqsJOgplz1VfKR5V1JXBWxKbexNlPenk3CuGvbhej9WyRtxtKiRv7ssEUY+WCNJ9+PsztYbWwteyIr3dbuFqEYmFwyoNELUeXD0NIM7OBHFdoKhyXF8zYnslaHqq3UeQbWOcmuNJu+ZIFSze5iAx0cLdZWPh93rufOAPWttWC8ouxdSnMCeHWYbe1rzvNWLQdqtx8uGDQqzqg+0bsbeKXdJxurLuOJV3iL+K5HWdhSO6NqCPXtzgNZ3ztBMYtcSHpHqeEtIHFgELK4nouseLTSaE15+YiZjeUmmxWMBcq1U99EOBFnmpUSV/HYSRKZ4Xtn6syyiMygLmc0lcFjpTLUyWBkAu5OtXi/jvEKJI2W63yIkHfQo4hRcA5IIOHJT6EJP37wTEV1y1LbOEWVJ/WllYSUOcsQ6zz8JZHy2LD8KFYrYY3okdZvBBPNqL9uBHy7bID8K7k/EevXR/rJ5wHneTeDwZ97P0fs3Wmv6gnnAeHx9nK3KRXXJkWa/XiomVM/yyWwbwXuwPsXrWDHz3eT9wFE/D+zOvmDQxSwF3f38/ULcp5OfPNOIujEB/zRM+yPeRN93CMoyAdtOPif2b3NmIujol3plcDGAeqvh39fhVxnDRItqpRQMGZcv4aizslDm8y41eigR/cfUK5Sb0m7pMuR29xvGk5zcvWXJ7m0b8ZXQNQjI+b6qFv3zZLfFu5Fvg2avk/RYi/p/LUkt8Ud51Yv60dd1/GeAWic1MJvXXlPGSGrl53sX+ECfmT4/cKje0H7zb/KJvo3Pu0UKz3eYQVx8nv32bQJzRyLjy7C+yeOvPz+N5h8hdTKZPfRmen5+HKKH9wGAiubuLIP70qZ84vsk/8VmnkHEsnCB//rww8c7llfL+FwAA///GFEPn1r1+uwAAAABJRU5ErkJggg==","captchaLength":6},"msg":"验证码获取成功"}
  return new Promise((resolve,reject)=>{
    resolve(res)
  })
}
// @Tags User
// @Summary 获取用户信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /user/getUserInfo [get]
export const getUserInfo = () => {
  // return service({
  //   url: '/user/getUserInfo',
  //   method: 'get'
  // })
let res = {"code":0,"data":{"userInfo":{"ID":1,"CreatedAt":"2022-03-29T11:33:01.611+08:00","UpdatedAt":"2022-07-13T17:41:53.58+08:00","uuid":"4588031d-72c3-47bd-a69c-f5a869d90847","userName":"admin","nickName":"超级管理员","sideMode":"dark","headerImg":"http://43.154.193.22:8032/assets/logo.852d45f9.jpg","baseColor":"#fff","activeColor":"#1890ff","authorityId":"888","authority":{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-07-07T15:10:08.949+08:00","DeletedAt":null,"authorityId":"888","authorityName":"super管理员","parentId":"0","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"},"authorities":[{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-07-07T15:10:08.949+08:00","DeletedAt":null,"authorityId":"888","authorityName":"super管理员","parentId":"0","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"},{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-07-13T17:40:32.618+08:00","DeletedAt":null,"authorityId":"8881","authorityName":"普通用户子角色","parentId":"888","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"},{"CreatedAt":"2022-03-29T11:33:02.228+08:00","UpdatedAt":"2022-03-29T11:33:02.228+08:00","DeletedAt":null,"authorityId":"9528","authorityName":"测试角色","parentId":"0","dataAuthorityId":null,"children":null,"menus":null,"defaultRouter":"dashboard"}],"phone":"17611111111","email":"333333333@qq.com"}},"msg":"获取成功"}
  return new Promise((resolve,reject)=>{
    resolve(res)
  })
}

 