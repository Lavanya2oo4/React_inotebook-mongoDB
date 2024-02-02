import AlertContext from "./AlertContext";
import React, { useState } from 'react'

const AlertState = (props) => {

    const [msg,setMsg]=useState("")
    const [type,setType]=useState("primary")
    const [hidden,setHidden]=useState(true)


    function setAlert(msg,type,hidden){
        setMsg(msg)
        setType(type)
        setHidden(hidden)
        setTimeout(()=>{
           setHidden(true)
        },1500)
    }

  return (

    <div>
      
      <AlertContext.Provider value={{msg,type,hidden,setAlert}}>
        {props.children}
      </AlertContext.Provider>
    </div>
  )
}

export default AlertState
