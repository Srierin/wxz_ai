import { useState } from 'react'
import './App.css'
// import 运行 理由懒加载 按照引入顺序执行

import AnotherButton from './components/AnotherButton'
import Button from './components/Button'


function App() {
  

  return (
    <>
      <AnotherButton />
      <Button />

    
    </>
  )
}

export default App
