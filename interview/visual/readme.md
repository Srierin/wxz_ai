# 数据可视化

- echarts
    给老板、客户看的数据报表
    开源的用于绘制柱状图、折线图、饼图等的图表库
- @types/echarts 
    echarts 类型声明文件，是单独的
    为什么react 不需要单独安装类型声明文件？
    因为react 是用typescript 开发的，typescript 会自动查找类型声明文件，不需要单独安装
    但是echarts 是原生js 开发的，需要单独安装类型声明文件，否则会报错，和类型声明文件是分开的

- 直观看出数据的价值
    echarts 2D
    three.js 3D 
    数据可视化

- echarts 流程
    - 安装echarts，@types/echarts
    - init 实例化
         要传给他一个图表的DOM 挂载点
         useRef<HTMLDivElement>(null)
         null | HTMLDivElement
         联合类型 因为useRef 是一个可变对象 ,所以需要联合类型
    - setOption(option) 设置配置项
        series 数据项