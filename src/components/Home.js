import React, { useContext } from 'react'
import noteContext from '../Context/notes/NoteContext'
const Home = () => {
  const a=useContext(noteContext)
  return (
    <div>
      I am home And My name is {a.name} and My age is {a.age}
    </div>
  )
}

export default Home
