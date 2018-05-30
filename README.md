# automan
Automan一站式开发框架
automan对vue做了大量的二次封装上层对开发者提供简单的api，编码的体验更加友好，主要针对使用vue-cli构建前端应用的某些不足做了大量的优化，其优势主要表现在以下几个方面。

**1. 更加轻量级的automan-cli脚手架工具**

```
Usage: automan-cli [options]

  Options:

    -V, --version           output the version number
    -i,--init               初始化应用, 带应用类型参数 spa 表示为单页面应用
    -c,--create <string>    创建一个单页面
    -r,--remove <string>    删除一个单页面
    -p, --product <string>  添加页面中的一个vue组件
    -k, --kick <string>     删除一个页面中的vue组件
    -w,--watch              启动服务器应用，带环境变量参数自动切换api环境
    -b,--build              打包压缩静态资源生成发布包
    -h, --help              output usage information
提供简单的明两行工具即可完成整体项目的开发。
```

**2. 支持热启动，无需编译**
```
修改开发文件后，node服务器将自动识别修改的文件，智能化判断是否需要重新启动，整个过程对用户透明。
```
**3. 支持第三方npm组件安装**
```
在browser目录下使用 npm install vue组件即可完成组件的安装，做简单配置即可使用。
```
**4. 使用脚手架工具自定义目录结构**
```
使用 automan-cli -c 页面路径 例如: automan-cli -c jiaofei/index/xxx/xxx 路径是1级也可以是多级，
将自动化完成依赖文件以及路由配置的创建，用户只需要编写业务代码即可。
```
**5. 一键打包，无需配置webpack**
```
使用 automan-cli -b 自动化打包，默认生成dist发布包，使用babel，minify对文件进行编译压缩，
框架自带的use模块加载器，在运行期由node端自动完成合并操作。
```
**6. 支持服务端渲染，提升用户体验**
```
只需要在node端使用automan提供的api接口获取首屏渲染的数据并存入到storage中，即可完成服务端渲染，
storage中的数据可以前后端共享，从而可以快速展现页面。
```
**7. 支持es6，less等语法，智能编译，对用户透明**
```
开发者可以编写es6语法，less样式，开发环境node端自动进行热编译，刷新页面即可预览。
```
**8. 废除 .vue文件,使用.html,.js,.css的mvc结构对组件进行封装**
```
使用原始的.html模版，.js, .css文件编码风格，上手门槛极低。
```
**9. 使用简单的api完成组件间通讯，无需安装vuex**
```
任意组件间通讯可以使用框架自带的 flux的call方法来完成，支持事件通知后回调获取组件处理后的数据，
相当于A组件调用B组件的接口。
```
**10. 支持css,js模块加载路径映射**
```
所有页面对于样式和脚本的加载，使用amd按需加载的方式，同时支持在browser/common/main.js中进行短路径映射。
```
**11. 智能化的加载优化，响应速度更快**
```
对于开发环境和线上环境，node端做了相应的加载优化，使用离线存储方式，对所有的资源进行了onece io的优化，
第一此请求后，资源就会自动的存储到客户端提升加载速度，服务端智能化判断文件的变化来做过期有效的校验从而输出
改变后的资源。
```
**12. 更加清晰的目录结构，适合大项目协作开发，有更加良好的扩展性和维护性**
```
标准化的目录结构和编程体验，能够让你的团队维护起来更加友好，组件的大量复用提升开发效率。
```
**13. node端api请求代理支持各种协议，前后端分离，一套前端代码可以调试线上各种api环境**
```
只需在env.json中配置不同环境的api请求参数，即可随意切换api请求环境
{
    "local": {
       "host": "localhost",
       "port": "8001",
       "protocal": "http"
    },
    "pro": {
      "host": "www.soeasypay.cn",
      "port": "80",
      "protocal": "https"
    },
    "pre": {
      "host": "pre.soeasypay.cn",
      "port": "80",
      "protocal": "https"
    }
}
只需命令行中使用 automan-cli -w pro， automan-cli -w pre等
```
相关开发文档参考：
1.  [简介](http://www.uyi2.com/docs?id=260)
2.  [automan-cli脚手架的安装](http://www.uyi2.com/docs?id=261)
3.  [项目目录结构](http://www.uyi2.com/docs?id=262)
4.  [入门hello world程序](http://www.uyi2.com/docs?id=263)
5.  [自定义创建多级页面目录](http://www.uyi2.com/docs?id=264)
6.  [组件化开发](http://www.uyi2.com/docs?id=265)
7.  [api请求代理切换](http://www.uyi2.com/docs?id=267)
8.  [服务端渲染](http://www.uyi2.com/docs?id=268)
9.  [组件间通讯](http://www.uyi2.com/docs?id=269)
10. [统一http请求接口](http://www.uyi2.com/docs?id=270)
11. [npm安装第三方vue组件并集成](http://www.uyi2.com/docs?id=271)
12. [打包](http://www.uyi2.com/docs?id=272)
