
// commonjs
const http = require('http');
// js 是异步的 异步无阻塞
// node 天生性能好 相同的用户访问数，使用的服务器数量少，更便宜
const server = http.createServer((req,res)=>{
    if(req.url === '/api/hello'&&req.method === 'GET'){
        console.log('hello');
        res.writeHead(200,{
             // 响应头是JavaScript
            'Content-Type':'text/javascript'
            // 'Content-Type':'application/json'
        });
        // JSON 
        const data = {
           code:0,
           msg:'字节跳动'
        }
        // json with padding
        res.end("callback("+JSON.stringify(data)+")")
        // res.end('console.log("Hello from Node.js backend")');
        // res.end(JSON.stringify({message:'Hello from Node.js backend'}));
    }else{
        res.writeHead(404);
        res.end('Not Found');
    }
})
// 服务器程序在3000 端口上运行
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})