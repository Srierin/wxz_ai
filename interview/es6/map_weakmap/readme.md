# map weakmap

- es6 新增的数据结构 作为企业级大型语言需要的
    内置数据结构
- key 可以是任意值，包括函数、对象、基本类型
- map(强),weakmap(弱)

## 垃圾回收
- 也是一套程序，也是语言底层的关键机制
- 内存的动态分配 由操作系统管理
- 引用计数 不为0 就不会被回收
- map 是强引用
- key = null，map = null 实现释放内存
- 然后通过global.gc() 手动触发垃圾回收
    运行要用 node --expose-gc 文件名.js

- Map,Set 需要手动去考虑内存的开销
    WeakMap,WeakSet 弱引用自动实现释放内存
    global.gc() 手动触发垃圾回收