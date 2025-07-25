import {
    useEffect,
    memo
} from'react'

const Button =() =>{
    useEffect(() => {
        console.log('Button useEffect')
    },[])
    console.log('Button render')
    return  <button>Click Me</button>
    
}
// 高阶组件 高阶组件是一个函数 接受一个组件作为参数 返回一个新的组件
export default memo(Button)