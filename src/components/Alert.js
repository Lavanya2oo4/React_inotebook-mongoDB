import React from 'react'

const Alert = (props) => {
    
  return (
    <div style={{marginTop:"8vh",height:"10vh"}}>
      <div id="al" className="alert alert-primary" role="alert" >
        {props.message}
</div>
    </div>
  )
}

export default Alert
