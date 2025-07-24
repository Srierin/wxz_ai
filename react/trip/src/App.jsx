import './App.css'
import {
  Suspense,
  lazy,

} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'

const Home = lazy(() => import('@/pages/Home'));
const Search = lazy(() => import('@/pages/Search'));
const Collection = lazy(() => import('@/pages/Collection'));
const Discount = lazy(() => import('@/pages/Discount'));
const Account = lazy(() => import('@/pages/Account'));
const Trip = lazy(() => import('@/pages/Trip'));
function App() {


  return (
    <>
      <Suspense fallback={<div>Loding...</div>}>
        {/* 带有tabbar的Layout */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/account" element={<Account />} />
            <Route path="/trip" element={<Trip />} />
          </Route>
        </Routes>
        {/* 空的Layout */}
        <Routes>
          <Route element={<BlankLayout />}>
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
