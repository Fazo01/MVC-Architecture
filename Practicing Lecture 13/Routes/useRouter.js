const express=require("express")
const useRouter=express.Router()
const path=require("path")
const rootDir=require("../utils/utilPath")
useRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","home.html"))
})
module.exports=useRouter