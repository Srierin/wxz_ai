# 缓存
## URL 输入到页面显示
- 知识体系
- 多进程多线程架构是前提
- 输入网址并解析
    非结构字符串，搜索关键词
    有结构的字符串
    协议://域名:端口/路径?查询参数#哈希值
    http(s)
    web 默认端口 80 nginx proxy 3000 代理
    443 https 

- 浏览器解析协议、主机、端口、路径等，并**构造**一个http请求
  - 发送请求前，根据请求头的expires 和 cache-control 字段判断是否命中强缓存
     
     缓存文件 + 请求头在一起（文件的属性一样）
  - 强缓存
      Expiers 过期时间 属于http1.0 缺点是用户的时间可能不准
      通过响应头cache-control:max-age=3600 
      在过期时间范围内，不用请求，直接用本地缓存
      http1.1 新增了cache-control 字段，优先级高于expires

  - 协商缓存
      当强缓存过期后，浏览器会发送一个请求到服务器，询问缓存是否过期
      强缓存没有命中，这个资源在服务器端也不一定修改了
      


  看到URL 背后的 请求行、请求头、请求体
  同一主机的不同端口 对应的是不同的程序或服务
  dns -> ip 地址 80->http 443->https  3306->mysql
  - 补全url
  比如输入的是baidu.com 会补全成 https://www.baidu.com/
  - 当输入http://www.baidu.com 会触发重定向 不安全
  - 重定向 301 302 307 308 临时重定向 永久重定向 区别
  307 Temporary Redirect 临时跳转
  location: https://www.baidu.com/
  再请求一次

  301/302 只支持GET 哪怕你的请求不是GET，也会被改成GET
  307/308 支持所有的请求方法，不会被修改
  

  