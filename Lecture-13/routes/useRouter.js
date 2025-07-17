const path=require('path')
const express=require('express')
const useRouter=express.Router()
const { registeredHomes}=require('./Hostrouter')//ejs
useRouter.get("/",(req,res,next)=>{
  console.log(registeredHomes)
  res.render('home',{registeredHomes:registeredHomes , pageTitle:'airbnb home'})//Important to change in partial
})
module.exports=useRouter