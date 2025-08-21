# 工程化

- 哪些问题？工程一揽子方案
    - web server 5173 端口 http 模块 express 框架
        index.html 首页
    - tsx -> js ->  babel 插件 编译成 js
    - styl -> css 文件
    。。。
    工程化做的是基础，后方工作 
- 怎么介绍vite
    - 兼容性问题
        IE 11 不支持ES module ， 不支持import 解析
    VITE是一个基于原生ES模块（import 解析，以前的Webpack,浏览器很多还不支持ES module）
    通过按需编译实现极速冷启动（快）与热更新的新一代前端构建工具。

    - 为什么快？
        - 基于原生ES模块，不需要打包所有文件，按需编译

    main.jsx 入口文件 模块的依赖
    main.jsx -> 依赖于App.jsx ->App.css + react + components + router + api + store +...
    整理这些模块之间的依赖关系（链条）


- webpack 打包工具
    由于要支持老旧浏览器，不使用ES module ，要打包
    当不用模块化时，对于 原本的依赖关系是
    a->b->c->d
    会先编译d 放到最上面
    然后编译c 放到d下面
    然后编译b 放到c下面
    然后编译a 放到b下面
    然后一起打包，成为一个文件


## webpack 和vite 的区别
- index.html 中没有type="module" 是怕浏览器不支持ES module
   需要整理依赖关系，打包文件，所以慢
- 适合大型项目，因为有着丰富的配置
    - 配置entry，output 这是核心
    - plugins
         html-webpack-plugin 指定html template 在哪
    - devServer
        http server 细节 
    web bundler 一切静态资源皆可打包
    vite 快，不需要打包，但是有兼容性，生态、定制性不如webpack
    webpack 虽然需要打包，慢一点，但是兼容性好，生态丰富，可为大型项目定制，有很长时间的业务验证。