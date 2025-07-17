const path = require("path");
const express = require("express");
const rootDir = require("../utils/pathutils");
const hostrouter = express.Router();
hostrouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHome", { pageTitle: "Add Home",currentPage:'addHome' }); //Important to change in partial
});
const registeredHomes = [];//to store input data

hostrouter.post("/add-home", (req, res, next) => {
  console.log(req.body); //parcel
  registeredHomes.push(req.body);
  res.render("homeadd", { pageTitle: "Home Add",currentPage:'HomeAdded' }); //Important to change in partial
});
exports.hostrouter = hostrouter;
exports.registeredHomes = registeredHomes;
