import {
  useState,
  useReducer
} from 'react'
import './App.css'

// function App() {


//   return (
//     <>
//       <LoginContext.Provider>
//         <ThemeContext.Provider>
//           <TodosContext.Provider>
//             <Layout>
//               <Header />
//               <Main />
//               <Footer />
//             </Layout>
//           </TodosContext.Provider>
//         </ThemeContext.Provider>
//       </LoginContext.Provider>
//     </>
//   )
// }

const initialState = {
  count: 0,
  // isLogin: false,
  // theme: 'light'
}
// 管理 分部门
// 纯函数 reducer 返回可靠的状态
// 状态生产器
// switch case 状态修改的规定
const reducer = (state, action) => {
  // increment,decrement,reset
  // {type:'increment'}
  switch (action.type) {
    case 'increment':
      // 新的状态值
      return {
        count: state.count + 1,
      }
    case 'decrement':
      return {
        count: state.count - 1,
      }
    case 'incrementByNum':
      return {
        count: state.count + parseInt(action.payload)
      }
    default:
      return state;
  }
}

function App() {
  // 初始值 initialValue
  // 当前的状态值  旧状态  新状态 
  // 界面由当前的状态值决定
  // 修改状态的方法 
  // 响应式
  // 管理 useState有的，useReducer都有的 高级
  const [count, setCount] = useState(0)
  // 大型项目 要用到useReducer
  // dispatch 派发 函数
  // 参数固定 {type:''}action_type 
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => dispatch({ type: 'incrementByNum', payload: count })}>incrementByNum</button>

    </>
  )
}

export default App
