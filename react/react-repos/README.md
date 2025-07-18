# react repos 项目开发
- api.github.io/users/Srierin/rpos
- 综合react开发全家桶、项目级别、大型的、性能 
- 页面级别组件由路由驱动，所以要先设计路由，再设计组件

## 路由设计
   - react-router-dom
   - /repos/:username
   - /repos/:id
   懒加载
   hash/history
   路由守卫
   useParams ；username
## 数据管理
    App 数据管理
    repos
    useContext + useReducer + hooks
    createContext + reducer + useRepos
## react
    组件的粒度要足够小
## api 
    fetch
    - axios  http请求库
    - 这是一个独立的模块，所有请求会从组件中分离到api目录下 

## 项目目录结构，项目架构
    - api
        应用中的所有接口请求
    - main.jsx
        应用的入口文件
        添加路由， SPA
        添加全局应用状态管理

- RepoList  功能模块
    - params 的解析
        - useParams 动态参数对象 
        - 不要放到useEffect中
        - 校验id是否合法
            - 遵守一个原则 不要相信用户的任何提交
        - navigate('/') 放到useEffect中
        
- 组件开发模式
    - UI 组件（JSX）
    - 自定义hooks useRepos 方便
    - 状态管理 应用全局（useContext + useReducer） 
       - repos loading error => context value
       - useReducer 提供reducer函数 
