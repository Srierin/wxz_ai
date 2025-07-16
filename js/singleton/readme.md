# 单例模式

## 实现Storage，使得该对象为**单例**，基于localStorage 进行封装。实现方法 
setItem(key,value) getItem(key) removeItem clear。
- 分析题目
实现Storage 类
- 设计模式 design pattern
- 封装 
      getItem
      setItem

## 单例
单例是一种设计模式(static getInstance), 高级程序的交流语言
一个类只能实例化一次
- static 属性 instance 持有唯一的一次实例
- static getInstance 方法判断 instance 返回这个实例
  实例的时候一定要这样 
- 性能特别好，好管理

## 单例模式

- 实现一个登录弹窗
     - 体验
     不用跳转路由，盖在页面上
     - 性能
     90%的用户都没有登录
     在一个登录界面Model html css js 比较多
     推迟到第一次用的时候再加载 单例
     要可以复用