# 智能前端之图片识别

- StrictMode 严格模式 react 默认开启
  执行一次，测试一次 
- 良好的编程风格
  移除无用的代码 
- import.meta.env.VITE_API_KEY 环境变量对象
  代码运行时可以和环境变量进行交互
  把env 写入代码
- async await 
  then 
  异步
  流程控制
  await 比 then 更同步化 简单
- class是js 关键字
  - react JSX 运行，以原生js 运行
  所以用className代替class
- 无障碍访问
  lable htmlFor + input id
- 本地预览 preview
   - 良好且必须的用户体验，实时得告知用户在发生什么
   - 图片上传及处理挺慢的，所以需要preview 预览
   - onChage
     e.target.files[0] 拿到文件对象
     - FileReader 实例 读取文件
     - readAsDataURL 读取文件的url
       - data？ base64 数据
       - base64 可以直接作为src 使用


- 静态的html -> 动态模板 ({data}) -> 状态 State 



