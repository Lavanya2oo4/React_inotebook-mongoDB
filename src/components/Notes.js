import React, { useContext, useEffect } from 'react'
import noteContext from "../Context/notes/NoteContext"
import NoteItem from './NoteItem'
const Notes = () => {
    let context=useContext(noteContext)
    const {notes,setNotes,getNotes}=context
    //calls get notes only once when page is loaded
    useEffect(()=>{
       getNotes()
    },[])
  return (
    
    <div style={{marginBottom:"10vh"}}>
      <h2>
        Your Notes:
      </h2>
      <div className='container noteBox' >
      {
        notes.map((note)=>{
          return <NoteItem key={note._id} note={note} ></NoteItem>
          
         
        })
      }
      </div>
    </div>
  )
}

export default Notes
