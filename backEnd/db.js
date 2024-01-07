const mongoose=require("mongoose")
const mongoURI="mongodb://localhost:27017/inotebook?readPreference=primary"

const connectToMongo=async()=>{
    try{
    await mongoose.connect(mongoURI)
    console.log("Connected Successfully")

    }
    catch(e){
        console.log("Connection failed")
        console.log(e)
    }
}

module.exports=connectToMongo