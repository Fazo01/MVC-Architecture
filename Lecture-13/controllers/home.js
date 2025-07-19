const Home = require("../models/home"); //Adding Module

const registeredHomes = [];
exports.getAddhome = (req, res, next) => {
  //mvc


  res.render("addHome", { pageTitle: "Add Home", currentPage: "addHome" }); //Important to change in partial
};
exports.gethomeadd = (req, res, next) => {
  console.log(req.body); //parcel

  const{houseName,price,location,rating,photoURL}=req.body;
  const home = new Home(houseName,price,location,rating,photoURL); //Adding Module
  home.save()

  res.render("homeadd", { pageTitle: "Home Add", currentPage: "HomeAdded" }); //Important to change in partial
};
exports.gethome = (req, res, next) => {
  const registeredHomes=Home.fetchAll()//Adding module

  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb home",
    currentPage: "Home",
  }); //Important to change in partial
};
exports.registeredHomes = registeredHomes;
