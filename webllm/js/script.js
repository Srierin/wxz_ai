// console.log("WebLLM 项目已启动");
// js 主动的去拉去http 借口
// web 1.0 时代 html/css/js 服务器端Java 返回的js 只做简单的交互
// web 2.0 时代 js 主动的请求后端服务器 动态页面 
// fetch('https://api.github.com/users/Srierin/repos')
//     .then(res=>res.json())
//     .then(data=>{
//     // console.log(data);
//     document.querySelector('#reply').innerHTML +=data.map(repo=> `
//       <ul>
//        <li>${repo.name}</li>

//       </ul>
//     `).join('')
//    })
//  当LLM 变成了API 服务
//  chat 方式  AIGC 生成/完成 返回的内容
//  由openai 制定的 提供的API 服务
//  请求行
//  命名
//  webLLM 基于web 底层是 http 协议
//  LLM api 服务
//  api.deepseek.com  接口地址 二级域名 llm 服务以api的方式提供
//  https 加密的http 更安全
//  chat 聊天的方式 messages 
const  endpoint = "https://api.deepseek.com/chat/completions"
// 请求头
const headers = {
  // 内容类型
  'Content-Type': 'application/json',
  // 授权
  Authorization: `Bearer sk-08d98765e01d411b9872d7a507d093c9`
}
// 请求体
const payload = {
  model: 'deepseek-chat',
  messages: [
    // chat 三种角色
    //  系统(system)  只会出现一次 设置系统的角色 开始会话时
    //  用户(user)    提问的人  提问的内容
    //  助手(assistant)   
    { role: 'system', content: 'You are a helpful assistant.'},
    { role:'user', content: '你好 Deepseek'}
  ]
}

fetch(endpoint, {
  method: 'POST',// 请求方式
  headers: headers,// 请求头
  // http 请求传输只能是字符串 所以需要把对象转换成字符串 JSON.stringify() 因为是二进制流
  body: JSON.stringify(payload)// 请求体
  // 请求 + LLM 生成需要时间 所以需要异步
  // http 是基于请求响应的简单协议
  // 返回的也是文本流或者二进制流 所以需要解析成json 格式
}).then(res => res.json())
// 解析成json 格式 也需要时间
.then(data => {
  console.log(data);
  document.querySelector('#reply').innerHTML 
    = data.choices[0].message.content// 助手返回的内容
})