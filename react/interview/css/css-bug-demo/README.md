## css 模块化
- Button AnotherButton 按钮组件
    自己写的组件
    别人写的组件
    第三方的组件
    冲突
- 唯一的类名
    自己取名 很麻烦
    css 模块化的能力 
    不会影响外界
    不受外界影响
- style.module.css
    - react vite（工程化）
         确保唯一hash 值 加到原类名上
    - vue scoped 
    - 可读性会受到影响吗？ 
        不会 
        - 读的上源码 .button
        - 被模块化保护起来了 
        - npm run build
- dev/build/test/product
    开发的时候在dev阶段 要注意代码的可读性
    vite，react.jsx  babel preset-react
    style.module.css
    import styles from './style.module.css'
    styles js 对象 css 的每一个类名都可以面向对象 访问绑定

    npm run build 上线前打包
    npm run test 测试
    aliyun ngnix 放到阿里云服务器跑起来 dist/
    
        