const express=require("express");
const clgRouter =express.Router();
var bodyParser = require('body-parser');
clgRouter.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const clgdata=require("../model/clg");
const hstldata=require("../model/hstlname");
const reviewdata=require("../model/hstls");
var cors = require('cors');
clgRouter.use(cors());


function add()
{
    clgRouter.get('/',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        clgdata.find()
        .then(function(clg){
            console.log(clg);
        res.send(clg);
        })  
    }); 
    clgRouter.get('/review',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        reviewdata.find()
        .then(function(clg){
            console.log(clg);
        res.send(clg);
        })  
    }); 
    clgRouter.get('/approvereview',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        reviewdata.find({app:"no"})
        .then(function(clg){
            console.log(clg);
        res.send(clg);
        })  
    }); 
    clgRouter.post('/addclg',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var dataclg=req.body.dataclg;
        var datahstl=req.body.datahstl;
        var datareview=req.body.datareview;
        var data1=new clgdata(dataclg);
        var data2=new hstldata(datahstl);
        var data3=new reviewdata(datareview);
        data1.save();
        data2.save();
        data3.save();
    })
    clgRouter.post('/addhstl',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var datahstl=req.body.datahstl;
        var datareview=req.body.datareview;
        var data2=new hstldata(datahstl);
        var data3=new reviewdata(datareview);
        data2.save();
        data3.save();
    })
    clgRouter.post('/addreview',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var datareview=req.body.datareview;
        var data3=new reviewdata(datareview);
        data3.save();
    })
   

    return clgRouter;
    
    
}
module.exports=add;