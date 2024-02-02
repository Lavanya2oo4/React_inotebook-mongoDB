import React, { useContext, useState } from 'react'
import AlertContext from '../Context/alert/AlertContext'
const Login = () => {
  let host = "http://localhost:5001"
  let alertContext=useContext(AlertContext)
  let {setAlert}=alertContext


  let [userData,setUserData]=useState({
    email:"",
    password:""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()

    let check=document.getElementById("flexCheckDefault").checked

    if(!check){
      setAlert("Terms and conditions must be accepted","warning",false)
      return
    }    
    else if(userData.email==""){
      setAlert("Email cannot be blank","warning",false)
      return
    }
    else if(userData.password==""){
      setAlert("Password cannot be blank","warning",false)
      return
    }
    
    


    let url=host+"/security/auth/login"

    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:userData.email,password:userData.password}), 
    });
    let parsed= await response.json(); 
    if(!parsed.success){
      setAlert("Invalid Credentials!!","danger",false)
    }
    else{
      setAlert("User Verified!!","success",false)
    }



  }
  const handleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }


  return (
    <div className="container home" >
      <h1 className="text-primary"><b>Login </b></h1>

<form onSubmit={handleSubmit}>

  {/* email -from bootstrap*/}

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your email here" name="email" value={userData.email} onChange={handleChange} />
  </div>


  {/* password -from bootstrap*/}
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="form-control" aria-describedby="passwordHelpBlock" placeholder='*********' autoComplete='currentPassword' />
  <div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  </div>


  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label text-danger" htmlFor="flexCheckDefault">
      * <small>Accept terms and conditions.</small>
    </label>
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
</form>
<hr />
    </div>
  )
}

export default Login
