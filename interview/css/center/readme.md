# 居中
 **9**
- 明确要的是哪种居中方案
     - 水平垂直居中
- 方式不是关键，区别和优劣
     - 水平居中 text-align:center
     - 单行文本垂直居中 line-height:height  padding
     - 固定宽高块级盒子水平垂直居中 定位absolute + 负 margin
     absolute + margin:auto（重要）
     absolute + calc(50% - 盒子宽度的一半)(css calc 计算函数) 缺点是性能差，很少用 需要计算
          缺点需要知道盒子宽高
        

     - 不固定宽高块级盒子水平垂直居中
         使用 absolute + transform 
         line-height + vertical-align 
         方法三: **writing-mode**: vertical-lr  文字垂直 

