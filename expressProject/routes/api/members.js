const express=require("express");
const users = require("../../users");
const router=express.Router();
const users=require("../../users");
router.get("/",(req,res)=>{
    res.json(users);
})

router.get("/:username",(req,res)=>{
    var appp=req.params.username;
    var user=users.find((Obj)=> obj.username==appp)
    if(user == undefined){
        console.log("user is not found !")
    }else{
        console.log(user);
        res.send(user);
    }
});