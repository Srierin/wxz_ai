import {
  useState,
  useEffect
} from "react"

export const useTodos = () => {
  const [todos, setTodos] = useState(JSON.parse(
    localStorage.getItem("todos")
  ))
  useEffect(() => {
    // console.log('hhhhh');
    // 接受字符串，
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addTodos = (text) => {
    // setTodos
    // 当数据状态是对象的时候
    setTodos([
      ...todos, // 展开运算符  解构赋值 
      {
        id: Date.now(), // 时间戳  唯一的
        text,
        isComplete: false
      }
    ])
  }

  const onToggle = (id) => {
    console.log(id);
    // todos 数组中找到id 对应的对象  修改isComplete 的值  其他的不变
    // 响应式业务要 返回一个全新的todos map
    setTodos(todos.map(
      todo => todo.id === id
        ? { ...todo, isComplete: !todo.isComplete }
        : todo
    ))
  }

  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return {
    todos,
    setTodos,
    addTodos,
    onToggle,
    onDelete
  }
}

