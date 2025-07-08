import {
  useState // 私有的状态
} from "react";

const TodoForm = ({ onAddTodo }) => {
  // 数据
  // props 参数数据
  // state 私有数据
  // 单向数据流
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = text.trim();// 去除空格  dry don't repeat yourself 不要重复
    if(!result) return; 
    onAddTodo(result); // 调用父组件的方法 通知父组件
    setText(''); // 清空输入框  要保证数据状态和界面状态要一致
  }
  // JSX 一定得有唯一的最外层元素 树来编译解析JSX
  return (
    <>
      <h1 className="header">TodoList</h1>
      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}// 数据绑定 
          onChange={e => setText(e.target.value)}
          placeholder= "请输入todo内容"
          required // 必填项  必须有值  否则不能提交
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default TodoForm