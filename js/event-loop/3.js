console.log('Start');
// node 微任务
// process 是进程对象，nextTick 是一个方法，会将回调函数放入到微任务队列中

process.nextTick(() => {
  console.log('Process next tick');
})
// 微任务
Promise.resolve().then(() => {
  console.log('Promise resolved');
})

// 宏任务
setTimeout(() => {
  console.log('hhhh');
  Promise.resolve().then(() => {
    console.log('inner Promise');
  })
}, 0)
console.log('End');