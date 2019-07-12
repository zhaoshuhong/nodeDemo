/**
 * Created by 24596 on 2019/6/16.
 */
var express = require('express');
var path = require('path');


var app = express();  //实例化对象



app.get('/a',function (req,res) {
    var callbackres = {name:'www',age:20}
    res.json({success:true,obj:callbackres})
    // res.send('这是get返回数据')
})

//index.html 默认访问界面
app.use(express.static(path.join(__dirname,'www')));

app.use('/detail',function (req,res) {
    res.status(200).sendFile(path.join(__dirname,'www','detail.html'))
})

app.use('*',function (req,res) {
    res.sendFile(path.join(__dirname,'www','err','404.html'))
})

app.listen(3000,function (err) {
    if(err){
        console.log('监听失败');
        throw err
    }
    console.log('服务器开启,端口:3000');
});
