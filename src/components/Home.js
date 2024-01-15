import React from 'react'
import Notes from './Notes'
const Home = () => {


  return (
    <div class="container my-5">
      <h1 class="text-primary"><b>Login </b></h1>

      <form>

        {/* email -from bootstrap*/}

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email here" />
        </div>


        {/* password -from bootstrap*/}
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder='*********' />
        <div id="passwordHelpBlock" class="form-text">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </div>


        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label text-danger" for="flexCheckDefault">
            * <small>Accept terms and conditions.</small>
          </label>
        </div>

        <button type="button" class="btn btn-primary">Submit</button>
      </form>
      <hr />

      <Notes />
    </div>
  )
}

export default Home
