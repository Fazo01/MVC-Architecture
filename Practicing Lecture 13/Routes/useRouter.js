const express=require("express")
const useRouter=express.Router()
const path=require("path")
const rootDir=require("../utils/utilPath")
const { registeredHome } = require("./hostRouter")
useRouter.get("/",(req,res,next)=>{
  res.render('home',{registeredHome:registeredHome})
})
module.exports=useRouter