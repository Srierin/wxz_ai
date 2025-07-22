# 受控组件和非受控组件

- 聚焦于表单 收集用户的数据
     - 表现为受state控制
     value={state} onChange={e => setState(e.target.value)}
     性能开销 表单的检测等，防抖节流
     - 非受控
     另外一种 收集用户输入的方法
     性能好 交互性不强的