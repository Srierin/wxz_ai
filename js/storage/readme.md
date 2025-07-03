# Storage 存储
  - 前端存储
    - localStorage
    - sessionStorage
    - cookie
    存储什么 
      - 登录状态
      - 购物车 
    - indexDB
  - 后端存储
    - MySQL 
    - NOSQL MongoDB
  - 缓存

## 首页



 - B/S 架构软件 http 协议
 - http 0.9 版本 没有身份
 - http 是无状态协议
   请求一次和1000次，拿到的内容都是一致的
   身份状态
 - http 1.0 正式版
   header 请求头
   Content-Type:
   Authorization
   Cookie uid=124324245
   用户带上，服务器端解析 你的身份
   http 协议还是无状态的 ，请求头 可以携带身份信息
 - 界面有哪些状态 
   未登录 已登录 用户身份 时间 过期 主动登录和退出

- 前后端联调
  - 前端表单
    阻止默认行为
    收集表单数据
    fetch 请求 await 等待服务器端响应请求 
    POST /login api 地址  前后端接口

    后端
    构建路由 /login
    用户名和密码的校验 
    通过设置一个cookie 在请求头 响应头 Set-Cookie 
    服务器端的返回 http 一起回到请求端
    前端存储里 Cookie 有了内容


## Cookie
Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户。
- 每次http的时候，会自动带上cookie信息
- cookie 小饼干(内容小) 只负责关键的身份信息 ，存储在浏览器中(位置) 
- http 协议是无状态的 ，每次请求都是独立的，没有上下文关系 他是通过在请求头中携带cookie 信息，实现身份认证。



