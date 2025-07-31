import {
  useTodosStore,
} from "../../store/todos";

const TodoList = ()=>{
    const {
        todos,
    } = useTodosStore();
    return(
        <div>
            <ul>
                {todos.map((todo)=>{
                    return(
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;