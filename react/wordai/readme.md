# 智能前端之单词学习
- 产品和商业模式
  - 学单词 
  - 拍照记单词 
    - 图片交给多模态模型 生成一个word 
    - 交给DeepSeek aigc 例句 
    - tts 发音 
- focus 
  拍照背单词，用单词 
- 目前的ai主要解决一些特定的效率性、创新型APP

- npm init vite 
  vite 是工程化脚手架，构建工具
- npm i 安装有点慢
  在安装项目依赖。。。等的时候 可以换源或者使用镜像
  pnpm 代替npm 
  不同的项目中 重复去安装了react  
  把react等包放到一个地方，如果之前安装过，链接过，只需要安装一次

## react 语法
- 单向数据流
  数据状态流动
  - 父组件负责提供数据，和api 接口请求 
  - 拆分成多个字组件 
  - 数据会从父组件流向子组件
  - 子组件负责消费数据，展示数据 专注于显示
  - props
    <PictureCard
      uploadState={uploadState}
    />
    函数参数一样 可以解构

## 项目中一定要安排的技能点
- pnpm 
- react 思想
  - 数据状态 useState
  - 数据驱动
  - 响应式 数据状态变化，试图会自动更新
    - 不用频繁操作DOM，只需要关注业务
- 业务
  - 图片上传
    - 图片预览
- 组件思维 组件化设计
  - APP
    - 提供数据
    - 图片上传大模型
  - PictureCard
    单向数据流 
    - 子组件只负责消费数据
    - 父组件负责提供数据
    - 先要给父组件 
- 性能优化
  - linear-gradient 渐变背景 代替图片做背景
- 用户体验
  - 上传图片的功能，预览功能
  - 无障碍访问
- es6 新特性
  - 可选链操作符 ?.
- html5 功能
  - file 文件对象 
- 智能
  - 多模态模型 
    把base64 交给月之暗面（LLM） 
    如何设置prompt？ 
  - prompt 设计原则
    - 给它一个明确的身份 LLM交流 当成是一个人
    - 清晰且具体的任务
    - 限制，指定结果
      返回的结构 JSON
      有利于接下来的业务执行
      拿着大模型的回答，接着继续工作
      JSON 最好的接口格式
    - 分布做
    "{
  "image_discription": "An elephant standing on a dirt path with large ears and tusks.",
  "representative_word": "elephant",
  "example_sentence": "The elephant is walking slowly.",
  "explaination": "Look at the picture. It shows an elephant.\nThe elephant is very large.\nIt has big ears and tusks.\nElephants are known for their size and strength.\nHave you ever seen an elephant at the zoo?",
  "explaination_replys": ["Yes, I saw an elephant at the zoo last year.", "No, I haven't had the chance to see one."]
}
"