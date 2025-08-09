const express=require("express")
const useRouter=express.Router()
const path=require("path")
const rootDir=require("../utils/utilPath")
const { registeredHome } = require("../controllers/hostcontroller")
const homeController=require("../controllers/hostcontroller")
useRouter.get("/",homeController.getHome)
module.exports=useRouter