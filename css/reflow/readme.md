# 回流重绘
- 布局的难点 列式布局和理解BFC/FFC 
  - html 根元素 最外层的第一个BFC 元素 
    Block Formatting Context 块级格式化上下文 从上到下，行内从左到右
    有了文档流
  - float overflow:hidden flex 绝对定位
  - 有没有什么标签 可以做列式布局table 不推荐

  - 为什么不用？
   - 触发太多的回流和重绘
   - 语义不和 table数据表
     tr row 行
     td column 列
   - 不够灵活

## 回流和重绘
- 回流 重排reflow
  当RenderTree(渲染树) 中部分或全部元素的尺寸，结构，或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
  每个页面至少需要一次回流，就是在页面第一次加载的时候。
  回流必将引起重绘，重绘不一定会引起回流。
  回流比重绘的成本比重绘高的多。
  table 不适合，table中局部的改变，会触发整个table的回流重排
  火烧赤壁一般 牵一发动全身
  display: none 隐藏 不参与回流重绘 性能优化的一种方案
  - 触发回流(重排 reflow)的方式
  1. 页面首次渲染 严格意义不是， 0 -> 有 最耗时的 
  2. 浏览器窗口的大小发生改变  
  3. 元素的尺寸，结构，位置或某些属性发生改变  (transition + transform /opacity 新图层除外) 
  4. 内容发生变化 比如文本内容，图片大小等
     appendChild removeChild 
  5. display：none block
  6. 字体大小的变化
  7. 激活css的伪类 ：hover ：active ：focus 
     如果在hover中改变color 也会触发回流 因为浏览器需要重新计算元素的样式和布局 
  8. 查询某些属性或调用某些方法 比如
     - getComputedStyle()  getBoundingClientRect()  scrollTop/Left/Width/Height clientWidth/Height offsetWidth/Height
     - img.getBoundingClientRect() 触发回流
     ret {
      
     }
- 重绘 repaint
  当RenderTree(渲染树) 中元素的样式发生改变，但没有改变布局，影响它在文档流中的位置，重新把元素外观绘制出来的过程称为重绘。
  color  background-color visibility hidden show
  重绘不一定会引起回流，回流必将引起重绘。
  重绘比重绘的成本比重绘高的多。

## 页面是怎么渲染的？
- 输入url
- 下载html 
  - 下载字节
  - html 字符 UTF-8 编码
  - 解析html 根据开关标签属性解析 
  - 形成一个节点对象
  - 构建DOM树 （DOM Tree）
- 先遇到link css 下载css 
  - 下载字节码 Content-Type text/html text/css
  - 编码utf-8 得到 css 文本
  - token 词法分析 
  - css rule 节点 
  - cssOM 树
  - RenderTree
  - Layout树 
    布局，盒模型，大小 确定元素在文档流中的位置和大小
  - 图层
    - z-index 层叠上下文
    - position :fixed 弹窗
    - transtion + transform /opacity 
      animation 动画
    - translate(50%,50%,50%)(3d) Z GPU加速
    1个图层 主要文档流图层 = DOM树 + cssOM树 -> RenderTree <-> LayoutTree
    2个图层 = DOM树 + cssOM树 -> RenderTree <-> LayoutTree
    .... 
  - 图层的合并 
  - 浏览器的渲染引擎 绘制平面 像素点绘制
 
