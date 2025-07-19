// const path=require('path')
const express = require("express");
// const rootDir = require("../utils/pathutils");
const hostrouter = express.Router();
const Homecontroller=require("../controllers/home.js")//mvc
hostrouter.get("/add-home",Homecontroller.getAddhome)//mvc
//to store input data
// const registeredHomes = [];
hostrouter.post("/add-home", Homecontroller.gethomeadd)

exports.hostrouter = hostrouter;
