# position

教科书的表达

- 五种属性值 准确，简洁
    - static 默认值，不定位 回到文档流
        让之前定位的元素，回到文档流，取消定位
    - relative 相对定位 相对于自己原来的位置偏移，不脱离文档流
    - absolute 绝对定位 相对于最近的非static 祖先定位元素偏移
      如果没有，那么就相对于body 定位
    - fixed 相对于视窗定位 
    - sticky 粘性定位 相对于视窗定位，但是会随着滚动条的滚动 是一种css定位方式，它让元素在滚动到特定阀值前表现得像相对定位，到达特定阀值后固定在视口中，实现类似吸顶或者吸附的效果

- 业务场景
    - 结合relative + absolute 消息提醒，在左上角。
    - absolute + transform 水平垂直居中 模态框
    - fixed 回到顶部 聊天客服图标
    - sticky 黏连式导航栏 不管页面多长，导航在超出阀值后，一直都在。
      table 表头黏连，距离其最近的具有滚动机制的祖先容器的
      IntersectionObserver 有点像

- 底层
    - 定位参照系统
    absolute 最近position 不为static 的祖先元素 || body 
    fixed 不一定相对于视窗
    sticky 依赖滚动容器
    - 独立图层渲染
    absolute + transform

- 适当使用transform: translate3d(0,0,0) 可以提高性能
  GPU 硬件加速，有利于css 页面性能优化
  但也不能乱用，过多的图层 会增加内存和管理开销。
  使用场景：登录弹窗，transform/opacity 动画
   
  will-change: 可以触发独立图层渲染

- position: fixed 如果在 transform: translateZ(0) 下，会失效
  原因：transform会有一个新的包含块 fixed不在相对于视口定位，而是相对于这个transform容器

- 就像打麻将 每道题都设置隐藏点
    面试是当面展示自己，可以准备好
  
## position 回答技巧
先干净利落得回答五种特性，再举出应用场景，提出底层实现原理，图层和fixed 失效的亮点
引入
- 页面的渲染过程 
- IntersectionObserver 
- 重绘重排