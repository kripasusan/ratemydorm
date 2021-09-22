const express=require("express");
const hstlRouter =express.Router();
var bodyParser = require('body-parser');
hstlRouter.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const hstldata=require("../model/hstls");
const hstlname=require("../model/hstlname");
var cors = require('cors');
hstlRouter.use(cors());


function add()
{
    hstlRouter.post('/data',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        console.log(req.body);
        console.log("req.body");
        value1=req.body.data;
        value2=req.body.value;
        hstldata.find({nameofclg:value1,nameofhstl:value2})
        .then(function(hstl){
            console.log(hstl);
        res.send(hstl);
        })  
    }); 
    
    hstlRouter.post('/',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        value1=req.body.data;
        hstlname.find({nameofclg:value1})
        .then(function(hstls){
            console.log(hstls);
            res.send(hstls);
        })
    });
    hstlRouter.get('/full',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        hstlname.find()
        .then(function(hstls){
            console.log(hstls);
            res.send(hstls);
        })
    });
    hstlRouter.post('/hstlspec',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        value1=req.body.data;
        value2=req.body.value;
        hstlname.find({nameofclg:value1,gen:value2})
        .then(function(hstls){
            console.log(hstls);
            res.send(hstls);
        })
    });
   

    return hstlRouter;
}
module.exports=add;