import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import UserContext from '../Context/user/UserContext'

const User = () => {
    let navigate = useNavigate()

    let handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }


    let [data,setData]=useState({
        userName:"",
        email:"",
        Since:""
    })
    
    let {getData}=useContext(UserContext)
    
    useEffect(()=>{
       showData()
    },[])

    let showData=async()=>{
        let data_=await getData()
           setData({
            userName:data_.userName,
            email:data_.email,
            Since:data_.date})
    }

  return (

    <div className='container home'>
       <h1 className='text text-primary'>User Details:</h1>
       <dl>


        <dt> Username:</dt>
        <dd>{data.userName} </dd>

        <dt> Email:</dt>
        <dd>{data.email} </dd>

        <dt> Since:</dt>
        <dd> {data.Since}</dd>
       


       </dl>
       <button className='btn btn-danger' onClick={handleLogout}>Logout</button>


    </div>
  )
}

export default User
