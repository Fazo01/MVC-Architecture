const express=require("express")
const app=express()

const path=require("path")
const {hostRouter} = require("./Routes/hostRouter")
const useRouter = require("./Routes/useRouter")
const rootDir=require("./utils/utilPath")
const errorControl=require('./controllers/error')
app.use(express.static(path.join(rootDir,"public")))
app.use(express.urlencoded())
app.set('view engine','ejs')
app.set('views','views')

app.use((req,res,next)=>{
  console.log(req.method)
  next()
})

app.use(useRouter)
app.use("/host",hostRouter)

app.use(errorControl.geterror)

const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server link http://localhost:${PORT}`)
})