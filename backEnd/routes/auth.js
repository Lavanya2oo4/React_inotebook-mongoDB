const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const fetchData=require("../Middlewares/fetchData")
const JWT_Secret=require("../JWT_Secret")


//Creating user by sending details in body  at "/security/auth/createUser"
router.post("/createUser", [
    body("userName").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
    body("email").isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    let success=false
    let userexists=false
    if (!errors.isEmpty()) {
        return res.status(400).json({ userexists,success,errors: errors.array() });
    }
    try {
        let user = await User.findOne({
            email: req.body.email
        })
        if (user) {
            return res.status(400).json({
                error: "User already exists!!",
                success,userexists:true
            })
        }
        //hashing password before storing
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)


        user = await User.create({
            userName: req.body.userName,
            password: secPass,                          //sending hashed password instead of original
            email: req.body.email
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_Secret)
        res.json({authToken,success:true,userexists})
    }
    catch (e) {
        console.log(e)
        res.status(500)
    }

})



//Login User at "/security/auth/login"

router.post("/login", [
    body("password", "Invalid Password").exists(),
    body("email", "Invalid Email").isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    let success=false
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body


    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success,error: "Please login with correct credentials!!" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json(
                {success, error: "Please login with correct credentials!!" }
            )
        }
        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_Secret)
        res.json({success:true,authToken})
    }


catch (e) {
    console.log(e)
    res.status(500)
}
}
)





//getting user data if auth token is correct at "/security/auth/getUser"

router.post("/getUser",fetchData, async (req, res) => {
    try{
        userId=req.user.id;
        const user=await User.findById(userId).select("-password") //all details except password
        res.send(user)
    }
    catch(e){
    console.error(e.message)
    res.status(500).send("Internal Server Error")
    }

})


module.exports = router