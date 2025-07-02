// es6 模块化
// mjs 后缀是es6 模块化
// 模块化是语言能力
// node 默认不支持es6 模块化 
// node 最新版本支持了 es6 模块化 22 版本
// node 准备跟require commonjs say goodbye
// es6 module 更先进 用mjs后缀 
import http from 'http';

const server = http.createServer((req,res) => {
    res.end('hello http server');

})

server.listen(1234);