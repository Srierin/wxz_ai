- JSX ?
   - JSX 不能独立运行 
   - vite 工程化
      jsx -> React.createElement 
   - React 环境中运行

- babel
    Make JavaScript Great Again!
    大胆使用JS 最新语法，不用等待 
    es6 有了promise -> es8 有了 async await
    let -> var
    () => {} -> function(){}

- 编译的流程
    - pnpm i @babel/cli @babel/core -D 安装babel
       @babel/cli 这是babel的命令行工具
       @babel/core 这是babel的核心库，提供了babel的编译功能
       babel 负责JS 转码
       -D 开发阶段安装的依赖 dev 
       上线后是不用的 
    - ./node_modules/.bin/babel
       转换的规则 
       react -> IOS 代码 
       es6+ -> es5
       JSX -> React.createElement