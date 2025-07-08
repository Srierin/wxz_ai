import {
  // 响应式状态hooks
  useState // react 函数式编程 提供一些好用的以use开头的函数
} from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
const Todos = () => {
  // 数据流管理
  // 父组件持有管理数据，props 传递数据
  // 子组件通过props 自定义函数 通知父组件
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'todo1',
      isComplete: false
    },
    {
      id: 2,
      text: 'todo2',
      isComplete: false
    },
  ]);
  // 新增todo 
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
    setTodos(todos.filter(todo=> todo.id!==id))
  }
  return (
    <div className="app">
      {/* 自定义事件 */}
      <TodoForm onAddTodo={addTodos} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  )
}

export default Todos