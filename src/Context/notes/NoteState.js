import NoteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {

  const s1 = {
    "name": "Oreo",
    "age": "2"
  }

  const [state, setState] = useState(s1)

  let updateState = () => {
    setTimeout(() => {
      setState({
        "name": "OreoUpdated$$",
        "age": "ageUpdated$$"
      })
    },1000)

  }

  return (
    <div>
      <NoteContext.Provider value={{ state, updateState }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}

export default NoteState
