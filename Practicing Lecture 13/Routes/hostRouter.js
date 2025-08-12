const express=require("express")
const path=require("path")
const hostRouter=express.Router()
const rootDir=require("../utils/utilPath")
const homeController=require("../controllers/hostcontroller")
hostRouter.get("/add-home",homeController.getAddhome)

hostRouter.post("/add-home",homeController.postHomeadd)
hostRouter.get("/host-home-list",homeController.getHostHomeList)
exports.hostRouter=hostRouter