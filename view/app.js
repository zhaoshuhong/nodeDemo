/**
 * Created by 24596 on 2019/6/15.
 */
var fs = require('fs'); //文件

// //1.写文件   writeFileSync 同步 的会有返回值  路径 内容 编码格式(可不写)
// let res = fs.writeFileSync('./www/w2.txt','第二个文件','utf8')
//
// console.log(res);

// //异步写文件
// fs.writeFile('./www/t1.txt','异步写文件111','utf8',(err)=>{
//   console.log(err)
//   if(err){
//     console.log('写入失败')
//     throw err
//   }
//   console.log('写入成功');
// })


// //3.读文件
// let data = fs.readFileSync('./www/w1.txt','utf8')
// console.log(data);

// fs.readFile('./www/w2.txt','utf8',function (err,data) {
//   console.log(err)
//   if(err){
//     console.log('读文件出错');
//     throw err;
//   }
//   console.log(data)
// })
//
// // // 4.判断文件是否存在
// //
// let res = fs.existsSync('./www/w1.txt');
// console.log(res)


// fs.exists('./www1/w2.txt',function (res) {
//   console.log(res)
// })


// 文件没内容添加
// let res = fs.appendFileSync('./www/log.txt','\n 日志3'+new Date(),'utf8');
// console.log(res);
// fs.appendFile('./www/log.txt','\n 这是异步的数据1'+new Date(),function (res) {
//   console.log(res);
//   if(res){
//     console.log('添加失败');
//     throw res
//   }
//   console.log('添加成功');
// })

//监听文件

// fs.watchFile('./www/t1.txt',function (a,b) {   //a 修改后   b 修改前
//   console.log('a=',a);
//   console.log('b=',b);
// })
