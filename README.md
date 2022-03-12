## 遇到的问题
style-loader webpack4 需要的版本要低


### 版本记录
a82ee8226d263b51dd24113bb793bd6cb582c03b  管理资源部分代码


7dc93fb055929e6f99afc7e0bd27e1532104e953
管理输出

989707b4547d49b0977a9148c9295882d2462705
开发环境


## plugin

### HtmlWebpackPlugin

我们更改了入口起点的名称，或者添加了新的入口，构建时会重新命名生成的bundle,但我们的index.html 文件仍用的就的名称，htmlWebpackPlugin就可以解决这个问题

版本问题：
  npm i --save-dev html-webpack-plugin@4

### CleanWebpackPlugin 

清理dist目录


// TODO
### mainfest 

webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。


## 开发环境
### source map
方便追踪报错文件
### 开发工具
每次build 很烦 -> 自动编译代码

三种方式
* webpack watch （watch 依赖图中文件的更改，代码更改自动重新编译）
 "watch": "webpack --watch"
 使用过程中，更改文件，发现生成的dist里面index.html没有生成，重新执行npm run watch 才生成 不知道为什么（TODO）

* webpack-dev-server

 devServer: {
    contentBase: './dist',
     port: 9000
  },

"start": "webpack-dev-server --open",

* webpack-dev-middleware
通过express 做到

## 热更新
不添加热更新，需要每次手动刷新页面才改变





