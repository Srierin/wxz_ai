# 深浅拷贝
- Object.assign() 浅拷贝 开始
    简单 功能强大
- Object.assign() 方法用于将一个或多个源对象的所有**可枚举**属性复制到目标对象，
  并返回修改后的目标对象，常用于对象的浅拷贝或属性合并。
- 返回的是新对象吗？
    不会返回新对象
- Object.assign()不支持深拷贝 
     深拷贝要考虑安全问题，对象比较深，值也是对象 不管他有多深 都可以一直拷贝 不会影响源对象
- 怎么支持深拷贝？

- 面试官的想法
- 深拷贝、浅拷贝是必考内容
- 以Object.assign()开场
    - 表演时间 面试是当面展示自己的
    API细节 -> 业务场景（怎么用） -> 赋值 + 引用浅拷贝 -> 底层原理

    JSON.parse(JSON.stringify()) 解决深拷贝最简单的方法，但是有一些问题
    不会拷贝函数(不知道怎么序列化)、symbol、undefined、循环引用

    - 首先讲赋值和引用式赋值的概念  
         简单数据类型和复杂数据类型 内存分配不一样 

- 如何拷贝，看业务
    - 如果是简单数据类型，= 就可以了 是一个赋值
    - 如果是浅的对象或数组
        Object.assign()
        Array.prototype.slice()
        Array.prototype.concat()
    - 否则用 Object.parse(Object.stringify)
         JSON.stringify() 序列化规则
         undefined、symbol、function 会被忽略 不是合法的 JSON值
    - 如果无法实现 就手写实现 高级的深拷贝
         - JSON.stringify() 没办法拷贝的
         - 拷贝，简单，遍历，复制
         - 深度，递归