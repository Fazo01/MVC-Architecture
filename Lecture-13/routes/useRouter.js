const path=require('path')
const express=require('express')
const useRouter=express.Router()
const { registeredHomes}=require('./Hostrouter')//ejs
const Homecontroller=require("../controllers/home.js")//mvc
useRouter.get("/",Homecontroller.gethome)
module.exports=useRouter