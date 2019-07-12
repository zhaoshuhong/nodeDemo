/**
 * Created by 24596 on 2019/6/15.
 */
var http = require('http');
var fs = require('fs');
var path = require('path');

//创建服务
var mySever = http.createServer(function (req,res) { //请求变量   //响应变量
  // console.log('请求变量',req)
  // console.log('响应变量',res);
  //路由
  var myUrl = req.url =='/'?'index.html':req.url;
  var myPath = path.join('static',myUrl)
  console.log(myPath);
  if(fs.existsSync(myPath)){
    fs.readFile(myPath,'utf8',function (err,data) {
// console.log('err',err);
      res.write(data);
      res.end();
    })
  }else {
    fs.readFile('./static/404.html','utf8',function (err,data) {
// console.log('err',err);
      res.write(data);
      res.end();
  })
  }




})
//监听
mySever.listen('3000',function (err) {
  if (err){
    console.log(err);
    throw err
  }
  console.log('服务开启,端口号:3000');
})

