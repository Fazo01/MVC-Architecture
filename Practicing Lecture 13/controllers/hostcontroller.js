const Home=require('../models/home')
exports.getAddhome=(req,res,next)=>{
  res.render('addHome',{PageTitle:"Add Home",currentPage:"AddHome"})
};
const registeredHome=[]
exports.postHomeadd=(req,res,next)=>{
  console.log(req.body)
  const{houseName,price,location,rating,photoURL}=req.body
  const home=new Home(houseName,price,location,rating,photoURL)
  home.save()// he's responsible for adding data in register Home
  res.render('homeadd',{PageTitle:"Home Add",currentPage:"Homeadded"})
}
exports.getHome=(req,res,next)=>{
  const registeredHome=Home.fetchAll()
  res.render('home',{registeredHome:registeredHome,currentPage:"Home",PageTitle:"Home"})
}
exports.registeredHome=registeredHome