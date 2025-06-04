#  react 业务
friends 是数据
想要开发一个App
就需要挂载点
页面的显示
- 原生JS
 DOM 编程
 底层API 不够高效
 聚焦于业务
 前端切图崽(html，css，+一点js) -> 前端开发工程师(微博，美团) JS框架 (vue/react)-> node 全栈开发 (node + 数据库) -> react native Android + ios App -> AIGC AI应用 -> 全干工程师  

 Web 应用(www.baidu.com)  移动应用(Android,ios)
 Node (server)服务端  AI 统领一切 JS AI全干工程师 

 ## 项目的创建
- npm 是什么？ node package manager
  node 包管理器 安装react package App开发能力
- npm init vite
  按vite 模板初始化项目 init
  vite vue/react 项目模板和工程化
- 选择一些配置
  - react
  - js 
  项目模板，基于它开始开发 
- cd 项目名称
- npm install 安装依赖包
  node_modules 依赖包
- npm run dev 启动项目
  3000 端口启动项目


# 5 w
- what Web App
- how npm init vite 初始化项目并得到一个项目模板
- 安装依赖
- 启动项目 http 5173 端口  拥有了react 技术栈 Web App
远离JS 底层API编程 专注于业务开发

## 响应式业务
## TODOS 任务列表
   - 数据 ['吃饭','睡觉','学习']
     数据在页面上渲染 react 会提供什么 支持这个业务 



## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html,css,js 
- 组件是一个函数
- 返回一段html 
- 函数体里面 return 之前可以申明各种数据和业务逻辑
- {} js 表达式  不需要写DOM API 


## 响应式数据
- 数据是会发生改变的，数据状态 state
- [todos,setTodos] = useState(初始值) 函数  可以定义响应式数据 使用数据的状态 返回一个数组
  数组里面第一个元素 数据本身
  数组里面第二个元素 修改数据的方法

