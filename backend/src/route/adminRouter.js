const express=require("express");
const adminRouter =express.Router();
var bodyParser = require('body-parser');
adminRouter.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const clgdata=require("../model/clg");
const hstldata=require("../model/hstlname");
const reviewdata=require("../model/hstls");
var cors = require('cors');
const { deleteMany } = require("../model/clg");
adminRouter.use(cors());


function add()
{
    adminRouter.post('/login',function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        const jwt=require('jsonwebtoken');
        var use=req.body.data;
        var adminname="admin987@gmail.com";
        var adminpassword="K9T8M7k6t5m4";
            if(adminpassword !==use.userpassword && adminname !== use.userpassword)
                res.status(200).send("invalid password");
            else
            {
                let payload={subject:adminname+adminpassword};
                let admin=jwt.sign(payload,'secretkey');
                res.status(200).send({admin});
            }
    })
    adminRouter.post('/deleteclg',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        console.log(req.body.data)
        console.log(req.body.data1)
        clgdata.findOneAndRemove({_id:req.body.data})
        .then((clg)=>
        {
            console.log(clg);
        }
        )  
        hstldata.deleteMany({nameofclg:req.body.data1})
        .then((clg)=>
        {
            console.log(clg);
        }
        )
        reviewdata.deleteMany({nameofclg:req.body.data1})
        .then((clg)=>
        {
            console.log(clg);
        }
        )
    }); 
    adminRouter.post('/deletehstl',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        console.log(req.body.data)
        hstldata.findOneAndDelete({_id:req.body.data})
        .then((clg)=>
        {
            console.log(clg);
        }
        )
        reviewdata.deleteMany({nameofhstl:req.body.data1})
        .then((clg)=>
        {
            console.log(clg);
        }
        )  
    }); 
    adminRouter.post('/deletereview',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
        console.log(req.body.data)
        reviewdata.findOneAndDelete({_id:req.body.data})
        .then((clg)=>
        {
            console.log(clg);
        }
        )  
    }); 
    adminRouter.post('/addclg',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var dataclg=req.body.dataclg;
        var data1=new clgdata(dataclg);
        data1.save();
    })
    adminRouter.post('/approvedreview',function(req,res)
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log(req.body);
        var data={
            app:"yes"
        }
        reviewdata.findOneAndUpdate({_id:req.body.data},data)
        .then(function(clg){
            console.log(clg);
        })  
    })

    return adminRouter;        
}
module.exports=add;