
// 纯UI展示 StatelessComponent 负责性能优化
// 函数组件 没有状态的组件
const Child = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}
export default Child