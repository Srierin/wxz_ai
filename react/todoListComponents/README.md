## React 组件化

- vite 何为？
npm 包管理
     vite 工程化套件
     - 大型项目
     - 模板代码
     - 跑起来

- 何为组件
   组合了html,css,js 的开发单元
   App.jsx 根组件
   - 标签粒度太细，只是工作的一个环节，不利于表达业务单元的抽象 
   - TodoList 组件
   - 工作单位 
   - 功能单位 
- 组件如何划分  TodoList 为例
- 函数就是组件
    - return html  完成了模版 { 数据  }
    - return 之前 js 逻辑 数据....
    - 复用 
    - 以html标签的形式， 插入之 

## 开发目录
   - todoListComponent 项目目录
   - scr 开发目录
      - App.jsx 根组件
      - 组件放到components 目录下
      - css 放在src/
            相对路径 ../


## 模块化
    - 大型的多人协作的项目
    - 模块化文件分离
        - 函数 
        - 类
        - 文件分离 一个文件一个模块 (类，函数，组件)
        - import XXX from '../components/XXX'
        - export default XXX


## 组件化思想
- 现代前端开发框架的核心思想
- 低级的DOM树编程 -> 高级的组件树编程
- 开发的最小单元是组件
     html 只是沙子
     css 只是衣服
     js 是灵魂
     组件才是任务单元
- 组件组合一堆的html,css,js 完成一个任务单元，实现一个组合功能
    方便复用
- 组件组合在一起，完成页面的开发
    页面由组件构成，现代前端其实就是用组件搭积木

   