const path=require('path')

const rootDir=require('./utils/pathutils')
const express=require('express')
const app=express()
//ejs
app.set('view engine', 'ejs'); // Tells Express to use EJS templates
app.set('views', path.join(rootDir, 'views')); // Correct key is 'views' new version key


const userRouter=require('./routes/useRouter')//Export Router
const {hostrouter}=require('./routes/Hostrouter')//Export Router
app.use((req,res,next)=>{
  console.log(req.url,req.method)
  next()
})

app.use(express.urlencoded())//parcel
app.use(userRouter)//Export Router
app.use("/host",hostrouter)//Export Router /host for overall path sharing
app.use(express.static(path.join(rootDir,'public')))//To access css file

app.use((req,res,next)=>{
  res.status(404).render('page_404',{pageTitle:'404',currentPage:'404'})//Important to change in partial
})
const PORT=3002
app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})