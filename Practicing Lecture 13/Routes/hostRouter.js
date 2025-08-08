const express=require("express")
const path=require("path")
const hostRouter=express.Router()
const rootDir=require("../utils/utilPath")
hostRouter.get("/add-home",(req,res,next)=>{
  res.render('addHome',{PageTitle:"Add Home",currentPage:"Add-Home"})
})
const registeredHome=[]
hostRouter.post("/add-home",(req,res,next)=>{
  // console.log(req.body)
  registeredHome.push(req.body)
  res.render('homeadd',{PageTitle:"Home Add",currentPage:"Home-added"})
})
exports.hostRouter=hostRouter
exports.registeredHome=registeredHome