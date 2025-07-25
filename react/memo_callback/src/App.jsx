import {
  useState,
  useEffect,
  useCallback,
} from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  console.log('App render')
  useEffect(() => {
    console.log('count', count)
  }, [count])
  useEffect(() => {
    console.log('num', num)
  }, [num])
  // rerender 重新生成 
  // 不要重新生成， 和 uesEffect [] 一样
  // callback 回调函数 缓存
  const handleClick = useCallback(() => {
    console.log('handleClick')
  },[num])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <button onClick={() => setNum(num + 1)}>+</button>
      <br />
      <Button  onClick={handleClick}>Click Me</Button>
    </>
  )
}

export default App
