import NoteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
  let host = "http://localhost:5001"

  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes)



  // add notes------------------------------------------------
  const addNote = (title, description, tag) => {
    let newNote = {
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

  //get all notes----------------------------------------------
  const getNotes = async () => {

    let url = host + "/user/notes/fetchAllNotes"

    //api call
    const response = await fetch(url, {
      method: "GET", // 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5MzM3MDMxYTllMWVmNWQ2MWIwY2Q2In0sImlhdCI6MTcwNDE0NjY5MX0.xXkl0EetMBXmDsWJMb-gNLU9RMiV5pZ_QSnd5ih9xiU"
      },
    });
    let json = await response.json()

    setNotes(json)
    // console.log("I am get notes")

  }



  //delete Note-----------------------------------------------
  const deleteNote = (id) => {
    // console.log("Deleting note with id :" +id)
    let newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  //update Note-----------------------------------------------

  const editNote = async (id, title, tag, description) => {

    let url = host + "/user/notes/updateNote/" + id

    //api call
    const response = await fetch(url, {
      method: "PUT", // 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5MzM3MDMxYTllMWVmNWQ2MWIwY2Q2In0sImlhdCI6MTcwNDE0NjY5MX0.xXkl0EetMBXmDsWJMb-gNLU9RMiV5pZ_QSnd5ih9xiU"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // return response.json();





    //code to edit note
    for (let index = 0; index < notes.length; index++) {
      let element = notes[index]
      if (element._id == id) {
        element.title = title
        element.description = description
        element.tag = tag
      }

    }

  }



  return (
    <div>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default NoteState
