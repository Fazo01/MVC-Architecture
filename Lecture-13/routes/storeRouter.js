
const express=require('express')
const storeRouter=express.Router()

const Homecontroller=require("../controllers/storeController")//mvc

storeRouter.get("/",Homecontroller.gethome)
storeRouter.get("/bookings",Homecontroller.getBookings)

module.exports=storeRouter