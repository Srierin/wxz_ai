# 微信当家框架WEUI

## BEM 国际命名规范
- 块（block）
- 元素（element）
- 修饰符（modifier）
- 命名方式
    - 块：
        - 块名：小写字母，多个单词用连字符分隔
        - 块名：多个单词用连字符分隔
    - 元素：
        - 元素名：小写字母，多个单词用连字符分隔
- 项目 .weui-page 
   - button 页面
规范
- Block 概念：
     一块内容  项目代号 风格+可复用的代码
     项目代号 + 区块的作用或职责 page
     .weui-page  页面
     .tm-page  
- Element 概念：
    元素 
    块的组成部分  项目代号 + 区块的作用或职责 + 元素的作用或职责 page + button
    .weui-page__button  页面的按钮
    .tm-page__button
    同一块中概念不重叠
- UI 框架中button，input，cell，通用的组件
     重启BEM 命名
     .weui-btn 复用
     基础架构代码 学习WEUI 的源码

     几个block组合起来，页面就出来了，组件式开发
- Modifier 概念：
    修饰符  项目代号 + 区块的作用或职责 + 元素的作用或职责 + 修饰符的作用或职责 page + button + primary
    .weui-page__button--primary  页面的按钮  主要的
    .tm-page__button--primary
- BEM 规范让我们一起大厂协作
    - 页面由很多的block构成 .weui-{block}
    - 每个block由多个element构成 .weui-{block}__{element}
    - 每个element由多个modifier构成 .weui-{block}__{element}_{modifier}
