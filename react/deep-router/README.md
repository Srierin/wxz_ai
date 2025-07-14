# deep router

- router
- 401 
- 301/302 重定向 
- 404 
- 性能优化 

- SPA 带来了优质的用户体验
    - 快速加载
    - 不会白屏，不依赖于http请求页面
- 前端首先加入路由 ，SPA 应用 
    前端三剑客新
      React
      ReactRouter
      Redux
- 导航，封装
- 路由懒加载
    lazyload 
    - / 只加载home组件
    - /about 只加载about组件
    只会加载当前需要的
    其他的不加载
    为了首页优化
- es6 module 引入模块并且会执行
- 懒加载的流程
    - 如果直接用import 会加载并执行太多非必要组件
        影响首页的加载速度，特别是页面多的时候
    - 导入lazy,Suspense
        lazy 是高阶函数（返回值是组件）
    - import ('./pages/Home') 会进行动态加载
    - 只有当<Route/> 匹配到了 才会动态加载相应的组件
    - Suspense 还未加载前 fallback 占位

        
