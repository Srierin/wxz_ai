# useContext

- 组件层次太深，组件通信会比较机械化
- 创建上下文对象  适合解决**全局**状态共享问题 
- 使用流程
  - 创建一个上下文对象 
  - 用provider 全局申明
  - 在任何地方 useContext 使用这个状态 

## 数据状态共享，肯定不只有一种方式
- 组件单向数据流通信
- 创建上下文对象 
  - 在它Provider的内部、 用useContext 拿到这个状态
  ThemeContext.Provider 组件，react的一贯作风，将组件进行到底
  - 一般在全局使用