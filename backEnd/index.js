const express= require("express")
const connectToMongo = require("./db")

const cors=require("cors")//if this middleware is not used browser can not send request to this api at local host

const app=express()
app.use(cors())

const port=5001

connectToMongo()    //imported from db.js and is connecting to database

app.use(express.json())    //used so that i can send js in body 

app.use("/security/auth",require("./routes/auth"))          //all further end points regadring auth will be in auth.js in routes folder
app.use("/user/notes",require("./routes/notes"))          

// app.get("/",(req,res)=>{
//   res.send("heelo")
// })

app.listen((port),()=>{
    console.log(`The app is listening on http://localhost:${port}`)
})


