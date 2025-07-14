import {
  useState,
  Suspense,
  lazy // react中用于懒加载
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'

// 函数 什么时候执行 路由-> Route
// 懒加载
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(()=> import('./Login'));

// import Home from './pages/Home'
// import About from './pages/About'

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 校验权限 */}
            <Route path="/pay" element={
              <ProtectRoute>
                <Pay />
              </ProtectRoute>
            } />
             <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
