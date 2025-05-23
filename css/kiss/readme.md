# css animation

- html
  div


- css
  
  border-redius
  animation 世界


- html结构快捷输入方式
  div#l-ball.ball emmet 语法  基于css 选择器  快速生成html结构
- id 唯一
- class 类名多个
- .container
  盒子 页面居中
  水平垂直居中
- .container>l-ball.ball+r-ball.ball
  > 子元素选择器
  + 兄弟元素选择器


- display  属性
  div block
  span, i a em  inline
  display 切换行内块级的格式化上下文能力
  inline-block 行内块级 可以设置宽高 在一行
  inline 行内 不可以设置宽高
  block 块级 独占一行

- 面向对象的css 
  多态
  复用 多类名
- 定位
 - position 定位
   static 静态定位 默认值 不定位 没有定位能力
 - relative 相对定位
     - 子元素相对定位 
     - 相对于自身而言
 - absolute 绝对定位
   离他最近的position 不为static的元素定位
   直到body 为止

   absolute 相对于最近的position 不为static的属性定位
   直到body 为止
   .container absolute body
