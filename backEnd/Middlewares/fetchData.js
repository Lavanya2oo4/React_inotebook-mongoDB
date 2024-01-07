const jwt=require("jsonwebtoken")
const JWT_Secret=require("../JWT_Secret")

const fetchData=(req,res,next)=>{
 const token=req.header("auth-token")            //we will send auth token in req header
 if(!token){
    res.status(401).send({error:"Please authenticate using a valid token"})
 }
 try{
    const data=jwt.verify(token,JWT_Secret)
    req.user=data.user
    next()
 }
 catch(e){
    res.status(400).send({error:"Please authenticate using a valid token"})
 }
}

module.exports=fetchData