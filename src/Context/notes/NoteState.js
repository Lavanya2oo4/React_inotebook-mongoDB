import NoteContext from "./NoteContext";
import React from 'react'

const NoteState = (props) => {

    const state={
        "name":"Oreo",
        "age":"2"
    }
  return (
    <div>
      <NoteContext.Provider value={state}>
                {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default NoteState
