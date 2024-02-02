import React, { useContext, useState } from 'react'
import AlertContext from '../Context/alert/AlertContext'
const SignUp = () => {
  let host = "http://localhost:5001"
  let alertContext=useContext(AlertContext)
  let {setAlert}=alertContext

  let authtoken=""

  let [userData,setUserData]=useState({
    email:"",
    password:"",
    userName:""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()


    
    
    


    let url=host+"/security/auth/createUser"

    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userName:userData.userName,email:userData.email,password:userData.password}), 
    });
    let parsed= await response.json(); 
   console.log(parsed)
   if(parsed.userexists){
    setAlert("User Already Exists- Please Login","danger",false)
   
   }
   else if(!parsed.success){
    setAlert("Account could not be created","warning",false)
   }
   else if(parsed.success){
    setAlert("Account Created","success",false)
    authtoken=parsed.authToken
    console.log(authtoken)

   }



  }
  const handleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }


  return (
    <div className="container home" >
      <h1 className="text-primary"><b>Signup </b></h1>

<form onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userName" className="form-label">Username</label>
    <input type="text" className="form-control" id="userName" placeholder="Enter your name here" name="userName" value={userData.userName} onChange={handleChange} minLength="3" required />
  </div>

  {/* email -from bootstrap*/}

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email here" name="email" value={userData.email} onChange={handleChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="confirmEmail" className="form-label">Confirm email address</label>
    <input type="text" className="form-control" id="confirmEmail" placeholder="Confirm your Email" name="confirmemail" required />
  </div>


  {/* password -from bootstrap*/}
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="form-control" aria-describedby="passwordHelpBlock" placeholder='*********' autoComplete='currentPassword' minLength="5" required/>
  <div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  </div>


  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
    <label className="form-check-label text-danger" htmlFor="flexCheckDefault">
      * <small>Accept terms and conditions.</small>
    </label>
  </div>

  <button type="submit" className="btn btn-primary">Signup</button>
</form>
<hr />
    </div>
  )
}

export default SignUp
