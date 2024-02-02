import React, { useContext, useEffect } from 'react'
import AlertContext from '../Context/alert/AlertContext'

const Alert = (props) => {
    let context=useContext(AlertContext)
    const {msg,type,setAlert,hidden}=context

    // useEffect(()=>{
    //     setAlert("I am new","warning",false)
    // },[])

      
  return (
    <div style={{marginTop:"8vh",height:"10vh",zIndex:"10"}} className="fixed-top" hidden={hidden}>
      <div id="al" className={`alert alert-${type}`} role="alert"  >
        {msg}
</div>
    </div>
  )
}

export default Alert
