// key:value 
// 对象字面量是第一种重要的数据结构
// 第二种重要的数据结构是 链表、队列、栈
// 
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(5).fill(undefined);
console.log(arr2);
arr2[8]=undefined; // 稀疏数组
console.log(arr2);
for (const key in arr2) {
  console.log(key);
}

