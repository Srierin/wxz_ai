# reducer

- 组件通信
   单向数据流 
   - 父子组件 通过 props通信
   - 子父组件通信 通过 自定义事件props传递
   - 兄弟组件通信 通过 父组件中转
   跨层级通信 全局通信
   - useContext + useReducer
   - redux

- useContext + createContext 当需要打理复杂的全局跨层级共享
  会力不从心
- useReducer 全局状态管理
   - 不要俄罗斯套娃
   - 多状态
   - 制定制度 
       - reducer 纯函数
- 纯函数和规定

## useReducer
- useState 响应式状态 
- useReducer 响应式状态管理
- 