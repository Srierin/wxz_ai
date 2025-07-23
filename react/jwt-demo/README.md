# jwt 登录鉴权
- isLogin，user 全局状态 zustand
- mock 登录模拟
      - apifox api请求模拟
      不用写页面，就可以发送请求 

- 会话授权
  - 服务器知道我们是谁？
  - http 是无状态的 
       - 请求头 cookie 
       - server 种下一个 cookie 唯一的sid 值  sid 会有对应的 user 信息
       - 每次请求中 从cookie 读取sid 值
       - 服务器就知道我们是谁了 

  - 登录和用户鉴权方案JWT JSON Web TOKEN
      - 检测你的{id,username,...} user JSON格式的数据
      - 通过一种加密算法，生成一个hash字符串，这个字符串就是token
      - token 服务器令牌
      - 之后每次请求中，都带上这个token
      - decode 解码算法，还原出{id,username,...}
- jsonwebtoken
      jwt 鉴权的库
      sign 颁发一个token user , secret 私钥
      decode secret 验证一个token user
      - pnpm i jwt
      - import jwt from 'jsonwebtoken'
      - jwt.sign 
      - HTTP 请求头 Authorization 带上token
      - Cookie 每次需要自动动带上
      - token需要手动设置的 
      
- 加盐
     secret 私钥 加盐
     传递token 前面会加上Bearer ${token} 表示持有者
     通过 http headers Authorization 传递token

- 前端的用户权限状态 流程
      - zustand
          登录、user信息  useUserStore
      - 登录页面
          受控/非受控组件 
      - 路由守卫
      - api/ 