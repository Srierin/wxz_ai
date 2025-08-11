需求：

api.github.io/users/Srierin/repos

- 有一堆的异步任务要执行
- 每一项是一个promise
- Promise.all 并发执行 本身也是一个promise
- 所有项都解决了，都成功，Promise.all 才会解决
    不然 只要有一项失败了，Promise.all 就会失败
- 如果都成功，每个promise结果 会按照原来的顺序 （下标）放到数组里
- Promise.all 是静态方法，不是实例方法，直接调用，不用new

