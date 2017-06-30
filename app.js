var express=require('express');
var path=require('path');
var bodyparser=require('body-parser')
var app=express();
var router=require('./route/rout.js');

app.set('views',path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

//app.use('/',index);
app.use('/',router);
app.listen(2000,function(){
console.log('server is start on port 2000');
});