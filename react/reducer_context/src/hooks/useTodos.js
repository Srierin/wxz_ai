import {
  useReducer,
} from 'react';
import todoReducer from '../reducers/todoReducer';
// inital = [] 参数的默认值 es6 新特性
// {todos, } key: value 的省略写法
// `` 字符串模板 可以提供多行字符串 可以使用 ${} 插入变量
// 解构 []=[] {}={} 
// 展开运算符，... 也叫rest 运算符，将数组或对象展开为单个元素或属性，用于函数调用或数组/对象的创建。
export function useTodos(initial = []) {
  const [todos, dispatch] = useReducer(todoReducer, initial)

  const addTodo = text => dispatch({ type: 'ADD_TODO', text })
  const toggleTodo = id => dispatch({ type: 'TOGGLE_TODO', id })
  const removeTodo = id => dispatch({ type: 'REMOVE_TODO', id })


  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  }
}

export default useTodos;