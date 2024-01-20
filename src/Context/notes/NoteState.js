import NoteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {

  const initialNotes = [
    {
      "_id": "65934c14cb22ssjskjasa32d1eb7eac",
      "user": "659337031a9e1ef5d61b0cd6",
      "title": "Get up you",
      "description": "Early Bird",
      "tag": "my Life my rules",
      "date": "2024-01-01T23:34:44.515Z",
      "__v": 0
    },
    
  ]

  const [notes, setNotes] = useState(initialNotes)



  // add notes ----------------------------------------------------------------------------------------------------------
  const addNote=(title,description,tag)=>{
    let newNote={
      "_id": "65934c14cb22da32d1eb7eaj",
      "user": "659337031a9e1ef5d61b0cd6",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-01-01T23:34:44.515Z",
      "__v": 0
    }
   setNotes(notes.concat(newNote))  //array.concat returns a new array so this will set value of state to new array

  }

  //delete Note-----------------------------------------------
  const deleteNote=(id)=>{
    // console.log("Deleting note with id :" +id)
    let newNotes=notes.filter((note)=>{
      return note._id !== id
    })
    setNotes(newNotes)
  }
  
  

  return (
    <div>
      <NoteContext.Provider value={{ notes,addNote,deleteNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default NoteState
