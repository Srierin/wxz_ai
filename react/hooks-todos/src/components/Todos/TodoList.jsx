import TodoItem from "./TodoItem"
const TodoList = (props) => {
  const {
    todos, // 父组件传递过来的数据  数组  列表
    onToggle, // 父组件传递过来的方法  函数  事件
    onDelete
  } = props;
  return (
    <ul className="todo-list">
      {/* TodoList */}
      {
        todos.length > 0 ? (
          todos.map((todo) => <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />)
        ) : (
          <p>暂无待办项</p>
        )
      }
      {/* <TodoItem /> */}
    </ul>
  )
}

export default TodoList