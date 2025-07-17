const path=require('path')
const express=require('express')
const rootDir=require('../utils/pathutils')
const hostrouter=express.Router()
hostrouter.get("/add-home",(req,res,next)=>{
  console.log(req.url,req.method)
    res.render('addHome', { pageTitle: 'Add Home' });//Important to change in partial

})
const registeredHomes=[]
hostrouter.post("/add-home",(req,res,next)=>{
  console.log(req.body,req.body.houseName)//parcel
  registeredHomes.push({houseName:req.body.houseName})
  res.render('homeadd',{pageTitle:"Home Add"})//Important to change in partial
})
exports.hostrouter=hostrouter
exports.registeredHomes=registeredHomes