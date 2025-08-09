const registeredHome=[]
module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoURL=photoURL;
  }
  save(){
    registeredHome.push(this)
  }
  static fetchAll(){
    return registeredHome
  }
}