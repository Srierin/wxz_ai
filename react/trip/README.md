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
## git 提交规范



