exports.geterror=(req,res,next)=>{
  res.status(404).render('page_404',{PageTitle:'404',currentPage:"404"})
}