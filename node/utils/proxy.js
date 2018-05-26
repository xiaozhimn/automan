var path = require("path");
var express = require("express");
var compression = require('compression');
var proxy = require('http-proxy-middleware');
var fs = require("fs");
var env = JSON.parse(fs.readFileSync("./evn.json"));
module.exports = {
    initProxy: function() {
        var param = "";
        var envConfig = null;
        if(process.argv.length > 2) {
            param = (process.argv.splice(2))[0];
        }
        if(param) {
            if(env[param]) {
                globalConfig.serverHost = env[param]["host"];
                globalConfig.serverPort = env[param]["port"];
                globalConfig.protocal = env[param]["protocal"];
            }
        }
        var dirname = __dirname;
        dirname = dirname.substring(0, dirname.lastIndexOf("\\"));
        app.use(compression()); //use compression
        /*api代理*/
        var apiOptions = {
            target:  globalConfig.protocal + '://' + globalConfig.serverHost + ":" + globalConfig.serverPort, // 目标主机
            proxyTimeout:30000
        };
        apiOptions.onProxyReq = function(proxyReq, req, res) {

        }
        apiOptions.onProxyRes = function(proxyRes, req, res) {

        }
        apiOptions.onError = function(err, req, res) {
            console.log(err);
        }
        var apiProxy = proxy(apiOptions);  //开启代理功能，并加载配置
        app.use(globalConfig.apiProxyPathKey, apiProxy);//对地址为’/api/v1‘的请求全部转发
        app.use(express.static(path.join(dirname, "browser")));
    }
}