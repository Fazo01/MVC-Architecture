const registeredHomes = [];  
exports.getAddhome=( (req, res, next) => {//mvc
  console.log(req.url, req.method);
  res.render("addHome", { pageTitle: "Add Home",currentPage:'addHome' }); //Important to change in partial
});
exports.gethomeadd=((req, res, next) => {
  console.log(req.body); //parcel
  registeredHomes.push(req.body);
  res.render("homeadd", { pageTitle: "Home Add",currentPage:'HomeAdded' }); //Important to change in partial
});
exports.gethome=((req,res,next)=>{
  console.log(registeredHomes)
  res.render('home',{registeredHomes:registeredHomes , pageTitle:'airbnb home',currentPage:'Home'})//Important to change in partial
})

exports.hostrouter = hostrouter;