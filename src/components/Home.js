import React from 'react'
import Notes from './Notes'
import Login from "./Login"
import AddNote from './AddNote'
const Home = () => {


  return (
    <div className="container home" style={{zIndex:"-1"}} >
      <AddNote/>
      <hr />

      <Notes />
    </div>
  )
}

export default Home
