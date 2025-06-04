import { useState } from 'react'
import './App.css'
// todos 列表需要渲染
// 函数组件 App 组件 组合其他的组件完成应用
// 返回html 的函数 
// heml css js 用函数组合在一起, 成为一个组件 
// function App() {
//   //react 比vue 更纯粹
//  const todos =['学习','吃饭'];//数组->数据

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>序号</th>
//             <th>任务</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             //动态 
//             // react 是一个括号表达式  里面可以写js 表达式  里面的表达式 必须有返回值
//             //js DOM 编程API
//             // html 里面不能写js  所以需要使用map 方法 遍历数组
//             todos.map((item,index) => (
//               <tr>
//               <td>{index+1}</td>
//               <td>{item}</td>
//               </tr>
//             )

//           )
//           }
//         </tbody>
//       </table>
//     </>
//   )
// }
function App(){
  // 数据->数据状态 数据业务 改变的 数据状态
  const [todos,setTodos ]=useState(['学习','吃饭','睡觉']);
  const [title,setTitle] = useState('ECUT 一鸣')

  setTimeout(()=> {
    //  todos = ['学习','吃饭','睡觉','打游戏'] 
    // setTodos(['学习','吃饭','睡觉','打游戏'])
    setTitle('字节 一鸣')
  } ,5000 )

  return (
    <div>
      <h1 className="title">{title}</h1>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>任务</th>
          </tr>
        </thead>
        <tbody>
          {
            //html 模板
            todos.map((item,index) => (
              <tr>
                <td>{index +1}</td>
                <td>{item}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default App
