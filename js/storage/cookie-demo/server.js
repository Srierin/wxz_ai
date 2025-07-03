// node 后端
// 引入 http 模块 这是node 内置的核心模块 不需要安装
// js 在命令行中运行 就是后端
// js 有两种模块化方案 1.commonjs 2.es6
// 以require node 早期模块化commonjs 
// import  es6 更先进的模块化方案
// old 是commonjs 新的是es6  module 
// node 受到欢迎 中小项目开发 
// 端口 -> 某个服务 -> 进程(资源) -> 线程(执行)
// domain (localhost) -> ip 地址(127.0.0.1) -> 某台设备 -> port 设备上的某个服务(进程)
// 3306 mysql 服务 
// 一台设备上可以很多端口使用 ， 可以有多个http服务 有多个网站
// 不要使用一些特殊的端口 
const http = require('http');
const fs = require('fs');// file system 文件系统 读写文件
const path = require('path');// 路径模块 处理路径
const server = http.createServer((req, res) => {
  // res.end('hello http server');
  // http 是基于请求响应的协议 
  // 路由 Method + URL 定位了服务器端的资源
  // 为了资源 
  if (req.method == 'GET' &&
    (req.url == '/' || req.url == '/index.html')) {
    console.log(__dirname,
      path.join(__dirname, 'public', 'index.html')
    )
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      // 异步 callback 回调函数 
      (err, content) => {
        // 前端体验为主
        // 后端稳定为主 
        if (err) {
          res.writeHead(500);// 5xx 服务器内部错误
          res.end('server error');
          return;
        }
        // 不只是html 还有css js 图片 视频 音频 字体 等等
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      })
  }
  // 后端路由，暴露资源
  http://localhost:8080/style.css?a=1&b=2
  // 协议 http:// localhost 域名 端口 /style.css path queryString
  if (req.method == 'GET' && req.url == '/style.css') {
    fs.readFile(
      path.join(__dirname, 'public', 'style.css'),
      (err,content) => {
        if(err) {
          res.writeHead(500);
          res.end('server error');
          return;
        }
        res.writeHead(200,{'Content-Type':'text/css'});
        res.end(content);
      }
    );
    return;
    
  }

  if (req.method == 'GET' && req.url == '/script.js') {
    fs.readFile(
      path.join(__dirname, 'public', 'script.js'),
      (err,content) => {
        if(err) {
          res.writeHead(500);
          res.end('server error');
          return;
        }
        res.writeHead(200,{'Content-Type':'text/javascript'});
        res.end(content);
      }
    );
    return;
  }

  if (req.method == 'POST' && req.url == '/login') {
    // 用户名和密码的校验
    res.writeHead(200,{
      // 服务器端设置的 
      'Set-Cookie': "user=admin;",
      'Content-Type': 'application/json'
    })
    res.end(
      JSON.stringify({
        success: true,
        msg :'登录成功'
      })
    );
    return;
  }

  if(req.method == 'GET' && req.url == '/check-login') {
    if(req.headers.cookie){
      res.writeHead(200,{
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        loggedIn: true,
        username: 'admin'
      }));
    }else {
      res.writeHead(200,{
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        loggedIn: false,
        username: ''
      }));
    }
    
  }
})

server.listen(8081);
