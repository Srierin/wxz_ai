import React from 'react'


interface Props {
  userName: string;
  // typescript 除了内置的类型外  还可以自定义类型
  // React 提供的类型 事件类型 ChangeEvent
  // type = "radio" type="checkbox"
  // HTMLInputElement 是一个HTMLInputElement类型的元素
  // 重要的地方要约束 就不会出错 避免99.99%的错误

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NameEditComponent: React.FC<Props> = (props) => {
  return (
    <>
      <label>Update name:</label>
      <input value={props.userName} onChange={props.onChange} />
    </>
  )
}

export default NameEditComponent