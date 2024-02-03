import React from 'react'
import UserContext from './UserContext'

const UserState = (props) => {

    let getData=async()=>{
        let host="http://localhost:5001"
        let url=host+"/security/auth/getUser"
        const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "Auth-Token":localStorage.getItem("authToken")
            },
          });
      let data=await response.json(); 
      return data
    }

  return (
    <div>
      <UserContext.Provider value={{getData}}>
        {props.children}
      </UserContext.Provider>
    </div>
  )
}

export default UserState
