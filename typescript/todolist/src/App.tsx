import { useState } from 'react'
import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
// javascript 在大型项目中  会出现很多问题 主要因为弱类型 
// 在项目中体现为 jsx后缀改成tsx

// 对函数进行类型约束 
// const HelloComponent = ()=>{
//   // void 表示没有返回值 空 期望ReactNode
//   return <div>Hello World</div>
// }

function App() {
  // 编译阶段 会进行类型检查
  // 相比js 多了类型声明
  // 会多一些代码 类型声明 但这会为我们的代码保驾护航
  let count: number = 10;
  const title: string = 'hello world'
  const isDone: boolean = true;
  const list: number[] = [1, 2, 3]
  // 元组类型  固定长度的数组  每个元素的类型也固定
  const tuple: [string, number] = ['1', 2]
  // 枚举类型  定义一组常量  可以是数字也可以是字符串
  // 由于启用 “erasableSyntaxOnly” 时不允许使用枚举语法，这里使用对象模拟枚举
  enum Status {
    Pending,
    Fullfiled,
    Rejected
  }
  const pStatus: Status = Status.Pending;
  // 对象的约束?
  // 接口类 要用;分隔
  interface User {
    name: string;
    age: number;
    isSingel?: boolean;
  }
  // 使用接口来约定类型
  const user: User = {
    name: '张三',
    age: 18,
    isSingel: false
  }
  return (
    <>
      {count}
      {title}
      {user.name} {user.age}
      {/* typescript 很严格 */}
      <HelloComponent name="zs" />
    </>
  )
}

export default App
