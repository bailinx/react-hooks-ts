const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'local.taobao.com',
    headers: {
        'Access-Control-Allow-Origin': '*',   // 允许客户端跨域发送请求支持
        'Access-Control-Allow-Credentials': 'true'   // 允许客户端携带cookie发送请求
    },
    contentBase: './dist',
    port: 8888,
    hot: true
  }
});
