const path=require('path')
const express=require('express')
const storeRouter=express.Router()
const { registeredHomes}=require('./Hostrouter.js')//ejs
const Homecontroller=require("../controllers/home.js")//mvc
storeRouter.get("/",Homecontroller.gethome)
module.exports=storeRouter