export default [
  {
    url: '/api/login',
    method:'post',
    response: ({body})=>{
      const {username,password} = body;
      if(username === 'admin' && password === '123456'){
        return {
          code:200,
          message: '登录成功',
          data:{
            token: 'admin-token',
            username,
            password
          }
        }
      }
      return {
        code:400,
        message: '登录失败',
      }
    }
  }
]