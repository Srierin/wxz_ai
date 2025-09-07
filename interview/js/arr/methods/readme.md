# 数组上的方法

## 分维度来回答，带上业务场景。

- 是否修改原数组，非纯函数，有副作用，要慎用
    push/pop/shift/unshift 栈/队操作
    shift/unshift 性能差，需要移动元素（数组上连续的）

    splice(删除/插入/替换)
    splice(start,deleteCount,item1,item2,...)
    sort 排序
- 不会修改原数组的方法，纯函数，推荐多用
    - forEach 无返回值
    - map 返回新数组
    - 查找类
        es5 提供了indexof，lastIndexOf
        es6 提供了 find 查找第一个符合条件的元素
            findIndex查找第一个符合条件的元素的索引
            includes 判断数组是否包含某个值，返回boolean
        在最新的版本中 es15 2023 findLastIndex
        (为什么不叫js6，因为JavaScript 是基于ECMAScript 脚本标准开发的)
        ES5 兼容性
        ES6 新特性
        ES6+ 对新特性持续在关注

    - 过滤和判定
        filter
        every
        some
        any
    - 拼接/裁剪
        concat
        slice
        splice
    - 扁平化
        flat
    - 迭代器 iterable
        keys() values() entries()
    - join/toString 拼接
    - 归约
        reduce 相加
    - 静态方法
        Array.isArray 判断是否是数组
        Array.from 类数组转数组
        Array.of 把一组值转换成数组
        Array.of(1,2,3) //[1,2,3]
- es6 新增方法
- 遍历/查找类/转换类/拼接类/统计类