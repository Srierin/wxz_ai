import {
  useState // 私有的
} from 'react'
import { useTodoContext } from '../hooks/useTodoContext'

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();// 跨层级
  const handleSubmit = e => {
    e.preventDefault(); // 阻止表单提交的默认行为，防止页面刷新
    // 全局管理

    if(text.trim()){
      addTodo(text.trim()); // 调用addTodo方法添加新的todo项
      setText(''); // 清空输入框
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo