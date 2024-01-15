import React, { useContext } from 'react'
import noteContext from "../Context/notes/NoteContext"
import NoteItem from './NoteItem'
const Notes = () => {
    let context=useContext(noteContext)
    const {notes,setNotes}=context
  return (
    
    <div>
      <h2>
        Your Notes:
      </h2>
      <div className='row container' >
      {
        notes.map((note)=>{
          return <NoteItem key={note._id} note={note}></NoteItem>
          
         
        })
      }
      </div>
    </div>
  )
}

export default Notes
