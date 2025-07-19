const Home = require("../models/home"); //Adding Module

exports.gethome = (req, res, next) => {//Adding module
  Home.fetchAll((registeredHomes)=>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb home",
      currentPage: "Home",
    }) //Important to change in partial
  );
};

exports.getBookings=(req, res, next) => {
    res.render("store/bookings", {
      pageTitle: "My bookings",
      currentPage: "bookings",
    }) //Important to change in partial
};

// exports.registeredHomes = registeredHomes;
