//声明了一个对象常量 xx
// 内存之中开辟了一块空间，里面存储了一个对象
// xx 取址
const xb = {
  name: '小白',
  age: 20,
  tall: 180,
  hometown: '上海',
  isSingle: true,
  sendFlower: function (girl) {
    console.log(xb.name + '给' + girl.name + '送了一束花')
    girl.receiveFlower(xb)
  }
}


const ns = {
  xq: 30, //心情
  name: '女神',
  room: '408',
  receiveFlower: function (sender) {
    console.log('收到了' + sender.name + '送的花')
    if (ns.xq > 90) {
      console.log('女神：小白,让我们在一起吧');
      return;
    } else {
      console.log('女神：你挺好的');

    }
  }
}
xb.sendFlower(ns)
//帮xx的 小美的闺蜜
const gm = {
  xq: 30, //心情
  name: '闺蜜',
  hometown: '上海',//老乡
  room: '408',
  //接口 interface
  receiveFlower: function (sender) {
    // if (sender.name === 'zx') {
    //  console.log('zx,让我们在一起吧');
    //   return;
    //   }
    setTimeout(() => {//定时器
      ns.xq = 98;
      ns.receiveFlower(sender)
    }, 3000)

  }
}
xb.sendFlower(gm)