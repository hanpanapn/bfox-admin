import service from '@/utils/request'
// @Summary 用户登录 获取动态路由
// @Produce  application/json
// @Param 可以什么都不填 调一下即可
// @Router /menu/getMenu [post]
export const asyncMenu = () => {
  // return service({
  //   url: '/menu/getMenu',
  //   method: 'post'
  // })
  let res ={"code":0,"data":{"menus":[{"ID":1,"CreatedAt":"2022-03-29T11:33:02.034+08:00","UpdatedAt":"2022-03-29T11:33:02.034+08:00","parentId":"0","path":"dashboard","name":"dashboard","hidden":false,"component":"view/dashboard/index.vue","sort":1,"meta":{"keepAlive":false,"defaultMenu":false,"title":"仪表盘","icon":"odometer","closeTab":false},"authoritys":null,"menuBtn":null,"menuId":"1","children":null,"parameters":[],"btns":null},{"ID":3,"CreatedAt":"2022-03-29T11:33:02.034+08:00","UpdatedAt":"2022-03-29T11:33:02.034+08:00","parentId":"0","path":"admin","name":"superAdmin","hidden":false,"component":"view/superAdmin/index.vue","sort":3,"meta":{"keepAlive":false,"defaultMenu":false,"title":"超级管理员","icon":"user","closeTab":false},"authoritys":null,"menuBtn":null,"menuId":"3","children":[{"ID":19,"CreatedAt":"2022-03-29T11:33:02.034+08:00","UpdatedAt":"2022-03-29T11:33:02.034+08:00","parentId":"3","path":"dictionaryDetail/:id","name":"dictionaryDetail","hidden":true,"component":"view/superAdmin/dictionary/sysDictionaryDetail.vue","sort":1,"meta":{"keepAlive":false,"defaultMenu":false,"title":"字典详情","icon":"order","closeTab":false},"authoritys":null,"menuBtn":null,"menuId":"19","children":null,"parameters":[],"btns":null},{"ID":18,"CreatedAt":"2022-03-29T11:33:02.034+08:00","UpdatedAt":"2022-03-29T11:33:02.034+08:00","parentId":"3","path":"dictionary","name":"dictionary","hidden":false,"component":"view/superAdmin/dictionary/sysDictionary.vue","sort":5,"meta":{"keepAlive":false,"defaultMenu":false,"title":"字典管理","icon":"notebook","closeTab":false},"authoritys":null,"menuBtn":null,"menuId":"18","children":null,"parameters":[],"btns":null},],"parameters":[],"btns":null}]},"msg":"获取成功"}
  return new Promise((resolve,reject)=>{
    resolve(res)
  })
}

 

 
 

 