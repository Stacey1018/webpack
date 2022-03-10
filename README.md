## 遇到的问题
style-loader webpack4 需要的版本要低


### 版本记录
a82ee8226d263b51dd24113bb793bd6cb582c03b  管理资源部分代码


### plugin

## HtmlWebpackPlugin

我们更改了入口起点的名称，或者添加了新的入口，构建时会重新命名生成的bundle,但我们的index.html 文件仍用的就的名称，htmlWebpackPlugin就可以解决这个问题

版本问题：
  npm i --save-dev html-webpack-plugin@4

## CleanWebpackPlugin 

清理dist目录


// TODO
## mainfest 

webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。


