import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,// 前端路由可以二选一
  Routes,
  Route,
  Link, // 要实现SPA 就需要用Link代替a标签
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {


  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
