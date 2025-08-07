const express=require("express")
const path=require("path")
const hostRouter=express.Router()
const rootDir=require("../utils/utilPath")
hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","addHome.html"))
})
hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","homeadd.html"))
})
module.exports=hostRouter