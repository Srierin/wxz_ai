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
// 开发中常用的深拷贝方法
const newObj = JSON.parse(JSON.stringify(source));
console.log(newObj);
newObj.b.age = 20;
newObj.b.hobby.push('学习');
newObj.c=2;
console.log(newObj);
console.log(source);
