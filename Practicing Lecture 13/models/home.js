const { error } = require("console");
const fs=require("fs")
const path=require("path");
const { stringify } = require("querystring");
const { json } = require("stream/consumers");
const rootDir=require("../utils/utilPath")
let registeredHome=[]
module.exports=class Home{
  constructor(houseName,price,location,rating,photoURL){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photoURL=photoURL;
  }
  save(){
    Home.fetchAll((registeredHome)=>{
    registeredHome.push(this)
    const filepath=path.join(rootDir,"data","homes.json")
    fs.writeFile(filepath,JSON.stringify(registeredHome),(error)=>{
      console.log("File Writing Conclude:",error)
    })
    })
  }
  static fetchAll(callback){
    const filepath=path.join(rootDir,'data','homes.json')
    fs.readFile(filepath,(err,data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }
}