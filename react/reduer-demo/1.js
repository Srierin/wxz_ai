// 纯函数 
// 相同的输入，永远会得到相同的输出,而且没有任何可观察的副作用 
// 不操作外部的变量 不发送请求 不改DOM
// 管理数据状态 纯函数去管，全局状态更正确
// 数据很重要 很多地方要用到它
// 修改值，也要遵循一定的规则 流程 
function add(a, b) {
    return a + b;
}

// 不是纯函数
let total = 0;
function addToTotal(a){
    total += a;
    return total;
}