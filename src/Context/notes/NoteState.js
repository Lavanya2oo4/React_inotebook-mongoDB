import NoteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {

  const initialNotes = [
    {
      "_id": "65934c14cb22da32d1eb7eac",
      "user": "659337031a9e1ef5d61b0cd6",
      "title": "Get up you",
      "description": "Early Bird",
      "tag": "my Life my rules",
      "date": "2024-01-01T23:34:44.515Z",
      "__v": 0
    },
    {
      "_id": "65934c14cb22da32d1eb7eah",
      "user": "659337031a9e1ef5d61b0cd6",
      "title": "Get up you",
      "description": "Early Bird",
      "tag": "my Life my rules",
      "date": "2024-01-01T23:34:44.515Z",
      "__v": 0
    },
    {
      "_id": "65934c14cb22da32d1eb7eaj",
      "user": "659337031a9e1ef5d61b0cd6",
      "title": "Get up you",
      "description": "Early Bird",
      "tag": "my Life my rules",
      "date": "2024-01-01T23:34:44.515Z",
      "__v": 0
    },
  ]

  const [notes, setNotes] = useState(initialNotes)

  
  

  return (
    <div>
      <NoteContext.Provider value={{ notes, setNotes }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default NoteState
