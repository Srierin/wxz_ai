# reducer and context
- useReducer 的核心 
    - 响应式的状态管理
    - reducer 纯函数 状态生产 状态改变定规矩
    - initValue 初始化值 
    - dispatch 触发状态改变 派发一个action
        {type:'',payload:''}
- useContext 上下文
    createContext  创建上下文
    Context.Provider  提供上下文
    useContext  消费上下文
- useContext(通信) + useReducer(响应式状态管理)
   将拥有一个跨层级 全局 -> 应用（theme/login/todos/。。。）状态管理  

- 自定义hook 
    组件(渲染为主) + 自定义hook(状态管理)

- hooks + useContext 
    提供了全局应用级别响应式状态
- hooks + useContext + useReducer
    全局应用级别响应式状态管理
