import NoteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
  let host = "http://localhost:5001"

  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes)



  // add notes------------------------------------------------
  const addNote = async(title, description, tag) => {
    //api call
    let url = host + "/user/notes/addNote"

    //api call
    const response = await fetch(url, {
      method: "POST", // 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5MzM3MDMxYTllMWVmNWQ2MWIwY2Q2In0sImlhdCI6MTcwNDE0NjY5MX0.xXkl0EetMBXmDsWJMb-gNLU9RMiV5pZ_QSnd5ih9xiU"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // let json = await response.json()
    // console.log(json)


    // let newNote = {
    //   "_id": "65934c14cb22da32d1eb7eaj",
    //   "user": "659337031a9e1ef5d61b0cd6",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2024-01-01T23:34:44.515Z",
    //   "__v": 0
    // }
    // setNotes(notes.concat(newNote))  //array.concat returns a new array so this will set value of state to new array
    getNotes()

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
  const deleteNote = async(id) => {
    // console.log("Deleting note with id :" +id)

    //api call

    let url = host + "/user/notes/deleteNote/" + id

    //api call
    const response = await fetch(url, {
      method: "DELETE", // 
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5MzM3MDMxYTllMWVmNWQ2MWIwY2Q2In0sImlhdCI6MTcwNDE0NjY5MX0.xXkl0EetMBXmDsWJMb-gNLU9RMiV5pZ_QSnd5ih9xiU"
      },
    });


    getNotes()
    // console.log("note deleted")


  
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
  
    // let json=await response.json()
    // console.log(json)


getNotes()


    // //code to edit note
    // for (let index = 0; index < notes.length; index++) {
    //   let element = notes[index]
    //   if (element._id == id) {
    //     element.title = title
    //     element.description = description
    //     element.tag = tag
    //   }

    // }
    // console.log("note updated")

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
