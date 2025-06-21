import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  // react 内置函数 hook（钩子） 快速解决一些问题 响应式的数据状态
  // useRef 可以实现DOM等对象的绑定
  const [content, setContent] = useState('')
  const [imgBase64Data, setImgBase64Data] = useState('')
  const [isValid, setIsValid] = useState(false)

  // base64 是goodle 推出的一种编码方式 可以将图片转换成字符串  
  const updateBase64Data = (e) => {
    // 拿到图片 e html5 js 和操作系统本地文件交互
    const file = e.target.files[0];
    // console.log(file);
    if (!file) return;
    // html5 提供的方法 用读的方式去读取文件
    const reader = new FileReader();
    // 异步操作
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setImgBase64Data(reader.result);
      setIsValid(true);
    }
  }
  const update = () => {

  }

  return (
    <div className="container">
      <div>
        <label htmlFor="fileInput">文件：</label>
        <input
          type="file"
          id="fileInput"
          className="input"
          accept=".jpeg,.jpg,.png,.gif"
          onChange={updateBase64Data}
        />
        <button onClick={update} disabled={!isValid}>提交</button>
      </div>
      <div className="output">

      </div>
      <div className="preview">
        {
          imgBase64Data && <img src={imgBase64Data} alt="" />
        }
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default App
