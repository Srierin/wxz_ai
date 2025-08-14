# vue 中的hooks 
- 你的react 是什么版本
     react 19
     react 16.8 划时代的更新 函数式组件，hooks 2019年左右
     在这之前 都是类组件 Component 基类 
     也有函数组件 不过一般用来做子组件+父组件通过props传递数据 无状态组件
     UI 展示为主 Stateless 简单，性能好
     函数组件+ useState + useEffect.. hooks 类组件就没有必要了

- 类组件
    在早期和函数组件都有，各司其职
    - 类组件比较固守于类的格式，繁琐
    - this 丢失问题 事件处理
    - 生命周期钩子函数 由useEffect 副作用代替
    - 开销大些 函数组件结合memo,useMemo 更好的性能优化

    - Vue 抄袭了React 
       hooks 函数式编程思想

- vue 和 react 相同点和区别
- ahooks 


- hooks 表达总线的思想
    - 什么是hooks
    能够在不编写 class 的情况下，使用 React 的状态（state）和生命周期等特性。
    Hooks 提供了一种更直观、更灵活的方式来组织和复用组件中的逻辑和响应式业务。
    react 内置的hooks useState, useEffect 副作用等，挺好用的。
    - 内置的hooks
         useState,useEffect,useRef,useCallback,useMemo
         useContext,useReducer,

         useLayoutEffect 是 React Hooks 中的一个函数，它在 DOM 更新后、浏览器绘制前同步执行，适合用于需要读取 DOM 布局并同步更新的场景，以避免视觉闪烁。

         useImperativeHandle 是 React Hooks 中的一个函数，它允许你在函数组件中暴露一些内部函数或值，以便在父组件中调用或使用。
    - 自定义的hooks
           useTitle,useTodos,useMouse,useRepos ....
           响应式业务/响应式场景封装到hooks中，方便复用
           保证UI组件的干净
    - ahooks 第三方hooks/vueuse 库
         useToggle  切换、useRequest（所有的请求 data，loading，error） 我在业务中经常使用
