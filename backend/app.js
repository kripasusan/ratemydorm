const express = require("express");
const app =new express;
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.engine('ejs',require('ejs').__express);
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
const clgRouter=require("./src/route/clgRouter")();
const hstlRouter=require("./src/route/hstlRouter")();
const loginRouter=require("./src/route/loginRouter")();
const adminRouter=require("./src/route/adminRouter")();
app.use('/clg',clgRouter);
app.use('/hstls',hstlRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);
console.log(5555);
app.listen(5555); 