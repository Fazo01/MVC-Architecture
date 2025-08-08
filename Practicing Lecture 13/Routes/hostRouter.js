const express=require("express")
const path=require("path")
const hostRouter=express.Router()
const rootDir=require("../utils/utilPath")
hostRouter.get("/add-home",(req,res,next)=>{
  res.render('addHome')
})
const registeredHome=[]
hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body)
  registeredHome.push(req.body)
  res.render('homeadd')
})
exports.hostRouter=hostRouter
exports.registeredHome=registeredHome