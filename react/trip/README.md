# react 旅游 APP 
README.md 很重要 可以方便了解项目
- 移动APP 
- 模仿 APP
    - 可以关注一些喜欢的、国外的
    - 需要有些改变和创新
- 会包含绝大多数的考点
     - 需要适用于任何APP

## 技术栈
- React全家桶
     React 组件开发
        组件的封装 
        第三方组件库 
        受控组件和非受控组件
        hooks编程 自定义hooks
     React-Router-DOM
        路由守卫
        路由懒加载
        SPA
     Zustand
- mock 接口模拟
- axios 请求拦截和代理
- jwt 登录 
- module css
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo 。。。
- css 预处理器 stylus 
    flex 布局
    transition 过渡
    transform 变换。。。
- LLM
    - chat
    - 生图
    - 语音
    - coze 工作流 联调
    - 流式输出
- 移动端适配
    rem 布局
- 单例模式 设计模式的理解
- git 提交等编程风格 

## 项目架构
- components 组件
- hooks 自定义hooks
- pages 页面
- store 状态管理
- api 接口
- mock 模拟接口


## 开发前的准备
- 安装的包
    react-router-dom  zustand  axios
    react-vant(UI组件库) lib-flexible(移动端适配)
    开发期间的依赖
    vite-plugin-mock jwt
- vite 配置
    - alias
    - mock 
    - .env.local  llm apikey
    - user-scalable=no 禁止用户缩放
    - css 预处理
         index.css  reset
         box-size font-family:-apply-system
         App.css   全局通用样式
         module.css 模块化样式
    - 移动端适配 rem
        不能使用px  用相对单位 rem 针对html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        设计稿 750px  1rem = 100px iphone 4 375pt *2 = 750
        让手机不同尺寸 htnl的font-size 等比例
        layout 
        flexible.js 在任何设备上
        1rem = 屏幕宽度/10
- lib-flexible
    阿里开源
    设置html的font-size=window.innerWidth/10
    css px 像素宽度=手机设备宽度= 375
    1px = 2发光点
    所以设计稿设计为750px 

- 设计稿上盒子的大小设计
    - 准确无误地还原设计稿
    - 设计稿中像素单位
    - /75 


## 项目亮点
- 移动端适配
    - lib-flexible 1rem = 屏幕宽度/10
    - 设计稿 尺寸是iPhone 标准尺寸 750px
    - 前端的职责是 还原设计稿
    - 频繁的单位 换算
    - 如何实现自动化 
        postcss + postcss-pxtorem
        postcss 是css 预编译器，很强大
        vite 会自动读取postcss.config.js 将css内容编译 
        插件 postcss-pxtorem  会将px 转换为rem
## git 提交规范
- 项目初始化
## 功能模块
- UI 组件库
    - react-vant  第三方组件库 70%的组件可以直接引用
    - 选择一个适合业务的UI组件库 或者公司内部的组件库 
- 配置路由及懒加载
    - 懒加载
    - 路由守卫
    - Layout 布局组件
        - 嵌套路由Outlet 分组路由配置
        - 网页有几个模板 Layout
              - Route 不加path 对应的路由自动选择
              - tabbar 底部导航栏
              - blank 空白布局
              - custom 自定义布局
              - 。。。
        - tabbar
            - react-vant +@react-vant/icons
            - value + onChange 响应式
            - 直接点击链接分享 active 的设置
- chatbot 模块
    - llm 模块 chat 封装
    - 迭代chat，支持任意模型 
- Search 
    - 防抖
    - api 接口
         Googlesuggest
    - localStorage 缓存
## 项目亮点和难点
- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣，升级为kimiChat,doubaoChat... 灵活
       性能、能力、性价比
       方便我们随便切换大模型，通过参数抽象
    - 文生图
        - 优化prompt设计，
- 原子css
     - App.css 里面添加了通用样式
     - 各自模块里module.css 不影响别的组件
     - lib-flexible 移动端适配
     - postcss  pxtorem 插件 快速还原设计稿
     - 原子类的css，
          一个元素按照功能逻辑拆分成多个类，和原子一样
          元素的样式就可以有这些原子类组合而成
          样式可以复用的更好，以后几乎可以不用写样式 
- 用户体验优化
    - 搜索建议，防抖+ useMemo 性能优化
    - 组件粒度划分 
         React.memo + useCallback 
    - 懒加载
    - 热门推荐 + 相关商品 （产品）
    - SPA
    - 骨架屏 skeleton 不用让用户等待
## 项目遇到过什么问题，怎么解决的
- chat messages 遇到message 覆盖问题 
- 闭包陷阱问题
     一次事件里面，两次setMessages()

- 自定义hooks
    - useTitle 保证页面跳转时标题一致（必要！！！）

- es6 特性使用
    tabbar 的高亮
    - arr.findIndex
    - str.startsWith
    - promise

- 项目迭代
    - 功能由浅入深
    - chatbot 功能 DeepSeek 简单chat
    - DeepSeek-r1 推理模型 
    - 流式输出
    - 上下文 LRU 
    - coze 工作流接口调用 

## 通用组件开发
- Lading 
   - 居中方案
        position: fixed +tlrb 0 + margin:auto
   - React.memo 无状态组件，不重新渲染
   - animation 



