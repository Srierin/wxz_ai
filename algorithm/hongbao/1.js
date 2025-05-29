/**
 * 
 * @param {number} total 
 * @param {number} num
 * @returns {number[]} 
 */

function hongbao(total,num) {
  const arr=[];
  let restAmount=total;//剩余金额
  let restNum=num;//剩余人数
  for(let i=0;i<num-1;i++) {
    //Math.random() 随机生成0-1之间的小数  包含0 不包含1
    //.toFixed(2) 保留两位小数 包装类
    let amount =(Math.random()*(restAmount/restNum*2)).toFixed(2);
    // console.log(amount);
    restAmount-=amount;
    restNum--;
    arr.push(amount);

  }
  arr.push(restAmount.toFixed(2));//最后一个人拿到剩余的金额
  return arr;

}
console.log(hongbao(20,20));