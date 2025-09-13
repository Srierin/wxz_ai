let a: any = 1;// any 任何类型
a = "1"; // 不能滥用,要学会用泛型
// function getFirstElement(arr: any[]): any {
//   return arr[0];
// }
// // 为了提升复用性
// const numbers = [1,2,3];
// const firstNum = getFirstElement(numbers);


// const strings = ["a","b","c"];
// const firstStr = getFirstElement(strings);

// 复用这个函数的同时，传入类型参数

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const strings = ["a","b","c"];
const firstStr = getFirstElement<string>(strings);

// const numbers = [1,2,3];
// const firstNum = getFirstElement<number>(numbers);
// firstNum?.toFixed(2); 