# 图片懒加载

- <img src=""/>
  - 浏览器的下载线程
  - src  http 应用层
  - https://img.36krcdn.com/hsossms/20250313/v2_15ad8ef9eca34830b4a2e081bbc7f57a@000000_oswg172644oswg1536oswg722_img_000?x-oss-process=image/resize,m_mfit,w_960,h_400,limit_0/crop,w_960,h_400,g_center"
   ip 地址
  - 发送 网路带宽有限 (就像公路一样) 
    并发 同时请求下载多个css，img 支持的比较好的
    tcp/ip 三次握手 四次挥手
  - 网页（电商）太多了 50+
  - 滚动页面 加载
  - 一开始就src 全部加载，页面会崩溃打不开

## 懒加载
  - 只加载需要加载的
    - 可视区 
    - 滚动区域 scroll 
  - 不加载
    src 不能直接给， 可以用data-original?
    src？是img的功能函数 给一个占位图
  - 占位图
    - 加载src 应该设置 但不能请求原来的图片的地址(并发太多/图片太大)
    - 给个占位的图片 比较小 
      缓存 只会请求一次 
- 等页面加载完毕后
  img 太多会严重影响页面的打开速度，第一重要的
  data-original 中
  自定义属性 data-xxx 数据属性
  图片的原地址是img 数据属性
  original 原来的
- 性能问题
  - 解决了性能问题 首屏幕加载速度 (静态页面的渲染性能)
  - onScroll 滚动事件 触发太过频繁 (JS 执行性能)
  - forEach imgs 
  - getBoundingClientRect() 元素的位置信息 相对视口的位置信息 触发回流
- 防抖 节流
- IntersectionObserver 观察器
  - observer 观察 异步的，不是同步的 浏览器的后台 
  - intersection rect 和可视区的交叉
  - 不再需要onScroll 事件  不需要节流
