import React from 'react'

const Login = () => {
  return (
    <div>
      <h1 className="text-primary"><b>Login </b></h1>

<form>

  {/* email -from bootstrap*/}

  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email here" />
  </div>


  {/* password -from bootstrap*/}
  <label htmlFor="inputPassword5" className="form-label">Password</label>
  <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder='*********' autoComplete='currentPassword' />
  <div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  </div>


  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label text-danger" htmlFor="flexCheckDefault">
      * <small>Accept terms and conditions.</small>
    </label>
  </div>

  <button type="button" className="btn btn-primary">Submit</button>
</form>
<hr />
    </div>
  )
}

export default Login
