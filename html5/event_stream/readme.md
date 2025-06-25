# 流式输出


- 为什么会考这道题？
  25年大厂必考题
  - LLM 聊天机器人（23年的AI爆款 -> 24年 推理 -> 25年 AI Agent 年） AI产品
  - 流式输出属于用户体验，前端职责，


- 为什么要流式输出？
  - 边生成边输出
    后端、LLM API 方式提供给我们？
    现在大模型一般是 AIGenerticContent 生成式的大模型 一个token一个token transformer（google） 生成的
    "我是你的assistant，"  大模型基于token开销付费的  
    更快的看到响应 

- 前端的职责
  - 良好的用户体验
  - 尽快反馈结果
  障眼法  生成要花时间 . 用户原因等
  最懂用户心理的 

  - 部署
    - 步骤
      - 前端能实现流式输出？
        setInterval 异步 时间机制 message

    - 后端又怎么实现
      socket 长链接
      http请求是基于请求响应式的 是一个简单协议 关闭链接
      http 2.0 支持server push 服务器端推送。


## 全栈能力 
- npm init -y 初始化项目  变成一个node 后端项目
- npm i express 安装express 老牌的node框架 

