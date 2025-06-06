// parseInt num
['1','2','3'].map((num,index,array)=>{
  console.log(num,index,array);
  return num;
})
// 第二个参数是进制数
console.log(parseInt('1',0,['1','2','3']))
console.log(parseInt('2',1,['1','2','3']))
console.log(parseInt('3',2,['1','2','3']))
