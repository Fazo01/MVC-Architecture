const Home=require('../models/home')
exports.getAddhome=(req,res,next)=>{
  res.render('host/addHome',{PageTitle:"Add Home",currentPage:"AddHome"})
};
const registeredHome=[]
exports.postHomeadd=(req,res,next)=>{
  console.log(req.body)
  const{houseName,price,location,rating,photoURL}=req.body
  const home=new Home(houseName,price,location,rating,photoURL)
  home.save()// he's responsible for adding data in register Home
  res.render('host/home-added',{PageTitle:"Home Add",currentPage:"Homeadded"})
}
exports.getHostHomeList=(req,res,next)=>{
  Home.fetchAll((registeredHome)=>{
  res.render('host/host-home-list',{PageTitle:"Host Home List",currentPage:"hostHomeList",registeredHome:registeredHome})
  })
};

exports.registeredHome=registeredHome