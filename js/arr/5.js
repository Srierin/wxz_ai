// 消灭一个数组，留下一个
// reduce 函数负责在繁杂的case 下只有唯一的对的状态产生
// 新的状态基于上一个状态
console.log([1, 2, 3, 4, 5].reduce((prev, cur) => {
    console.log(prev, cur);
    return prev + cur;
}, 0))
