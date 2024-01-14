import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/NoteContext'
const Home = () => {
  const a=useContext(noteContext)

  useEffect(()=>{
    a.updateState()
  },[])
  return (
    <div>
      I am home And My name is {a.state.name} and My age is {a.state.age}
      <hr/>
    </div>
  )
}

export default Home
