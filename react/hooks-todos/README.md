## hooks todos

- 安排个css 亮点
    - stylus 
       css 超集
    - 拥有vite 脚手架
        stylus 预编译 安装stylus vite 直接编译
        vite来自vue 社区
    - react 组件设计
       - 开发任务单元
       - 设计组件
           界面功能 状态 响应式
           - 新建todo 表单
           - 修改 列表 
           - 删除 
       - 按功能划分 组件拆分的粒度
           - form
           - list 列表
                - item 有利于维护和**性能** 

- 字体
    - 可以设置多个，根据设备支持（本地包含）
    - 苹果设备 -apple-system 前端要负责用户体验，字体也是体验的一部分
- rem
    - 相对单位
    - 移动端的重要单位 px 不要用了 这是绝对单位 像素点
        移动端 宽高是不定的 可以用rem(html font-size 相对于根元素等比例) vw vh(viewport 相对于视窗) em 等相对单位
        使用相对单位，可以在所有设备上适配
        em 相对于自身的font-size 等比例 

- props  组件通信
    - 传递状态
    - 传递函数 自定义事件
    - 传递对象 可以直接解构 
        const {
            todos,// 任务
            addTodo,// 添加任务
            removeTodo,// 删除任务
            ....
        } = props 单独解构


- 数据绑定
    - 变量 修改值
    - 数据状态 
        - Data binding **数据绑定** 没有数据jsx 就是静态的
        {} 数据绑定 
        - 数据和界面状态的统一 
           - 界面由数据驱动的 
           - 数据和界面状态都一致性
        - 数据发生改变是响应式的 
         


- vue 和react区别
    - vue 容易入门，api好用
    - react 倾向于原生JS  入门难
          - hooks
    - 在vue中 <input v-model="text"/> 是双向绑定的
    - 在react中  <input value={text} onChange={handleChange}/> 是单向绑定的
    react 坚持 单向绑定 

    
        
