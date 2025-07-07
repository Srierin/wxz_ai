import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {


  return (
    <>
      {/* 开发的任务单位就是组件 */}
      {/* <div style={{fontSize:'12px', width: '8.3333rem', height: '8.3333rem', background: 'green' }}></div>
      <div style={{fontSize:'14px', width: '3.5714rem', height: '3.5714rem', background: 'red' }}></div> */}

      <Todos />
    </>
  )
}

export default App
