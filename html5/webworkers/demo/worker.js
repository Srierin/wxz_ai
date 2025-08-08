
// 不上js 单线程
// 是Worker线程 用来做复杂或耗性能的计算
// 这个能力来自于浏览器 
// js 还是单线程，只不过在复杂计算的时候用worker 线程
// 不可以使用document 等dom 方法 this不是原来的this
// 线程间的通信 通过消息机制
// console.log(this)
// console.log(this,document.getElementById('box'));
self.onmessage = function (e) {
    console.log(e.data);
    self.postMessage('hello from worker');

}


