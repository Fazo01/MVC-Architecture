const Home=require('../models/home')
const { registeredHome } = require('./hostcontroller')
exports.getIndex=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    
  res.render('store/index',{registeredHome:registeredHome,currentPage:"Index",PageTitle:"Airbnb"})
  })
}
exports.getHomeList=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render('store/home-list',{registeredHome:registeredHome,currentPage:"Home",PageTitle:"Home List"})
  })
}
exports.getBookings=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render('store/bookings',{registeredHome:registeredHome,currentPage:"bookings",PageTitle:"Bookings"})
  })
}
exports.getFavouriteList=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
    res.render('store/favourite-list',{registeredHome:registeredHome,currentPage:"favourite",PageTitle:"Favourite List"})
  })
}