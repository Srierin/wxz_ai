// 枚举类型
const STATUS = {
  READY:Symbol('ready'),// 准备好的状态
  RUNNING:Symbol('running'),// 运行中的状态
  DONE:Symbol('done'),// 完成的状态
}
let state = STATUS.READY;
if(state === STATUS.READY){
  console.log('开始');
}
