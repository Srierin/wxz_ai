import React from 'react'

// 如何约束函数的返回值为ReactNode类型  JSX
// FC == FunctionComponent 函数组件  约束函数的类型
// 如何约定自己需要一个name的props呢？
interface Props {
  name: string;
}
// typescript 类型约束， 重要的地方一定要类型约束
// 重要的比如: 参数、返回值
// 泛型  泛指内部的类型  比如: 数组、对象、函数
const HelloComponent: React.FC<Props> = (props) => {

  return (
    <div>Hello World;{props.name}</div>
  )
}

export default HelloComponent