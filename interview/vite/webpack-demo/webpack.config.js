const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack 配置文件
module.exports = {
  entry:'./src/main.jsx',// 申明入口文件，webpack整理依赖关系，并打包
  output:{
    filename:'bundle.js',// 输出的文件名
    path:path.resolve(__dirname,'dist'),// 输出的路径
    clean:true,// 每次打包前，清除dist目录
  },
  mode:'development',// 以开发模式打包，会生成source map，方便调试
  target:'web',
  module:{// webpack 支持解析的模块文件
      rules:[
        {
          test:/\.css$/i,// css文件在这里处理
          use:["style-loader","css-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'public/index.html'),
      filename:'index.html', 
    })
  ],
  devServer:{
    port:8000,
    open:true,
    hot:true,
    static:{
      directory:path.resolve(__dirname,'dist'), 
    }
  }


}