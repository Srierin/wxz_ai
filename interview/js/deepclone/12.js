let arr1 = [
  {
    name: 'zhangsan',
    hobbies: ['reading', 'swimming']
  },
  function () {
    console.log('函数拷贝不了')
  }
]
let arr2 = JSON.parse(JSON.stringify(arr1)) // 深拷贝
arr2[0].name = 'lisi'
arr2[0].hobbies.push('running')
console.log(arr2, arr1);
