const target = {
    a: 1,

}
const source = {
    b:{
      name:'zhangsan',
      age:18,
      sex:'男',
      hobby:['吃饭','睡觉','打豆豆']
    },
    c:1,

}

Object.assign(target, source);
target.b.age = 20;
target.b.hobby.push ('学习');
target.c=2;
console.log(source.b.age,source.b.hobby,source.c);
console.log(target);