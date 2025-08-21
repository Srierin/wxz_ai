// 红绿灯
// 红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
// - 同步阻塞
// 编写一个sleep函数，让程序暂停指定时间
// - 显示时间
// - 轮询

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  (async () => {
    console.log('start');
    // 异步变成同步
    await sleep(1000);
    console.log('end');
  })()