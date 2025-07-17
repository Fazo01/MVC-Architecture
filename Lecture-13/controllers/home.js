exports.getAddhome=("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHome", { pageTitle: "Add Home",currentPage:'addHome' }); //Important to change in partial
});