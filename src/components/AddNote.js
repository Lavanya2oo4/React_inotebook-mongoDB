import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'

const AddNote = () => {
    let context=useContext(noteContext)
    let {addNote}=context

    let [note,setNote]=useState({
        "title":"",
        "description":"",
        "tag":""
    })

    let handleClick=()=>{
        document.getElementById("form").addEventListener("submit",(e)=>{
            e.preventDefault()
        })
        addNote(note.title,note.description,note.tag)
        console.log("NotAdded")
    }
    let handleChange=(e)=>{
      setNote({...note,[e.target.name]:[e.target.value]})
    //  keep whatever was in previous array and updates value of whatever "e" is to whatever user is entering 
    // e.g. user is updating title so value to title in array will change to whatever user is writing
    }

    



  return (
    <div>
      <h1 className="text-primary"><b>Add Note </b></h1>

<form id="form">


  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title here." onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" placeholder="Enter Tag Here." onChange={handleChange} />
  </div>


  <label htmlFor="description" className="form-label">Description</label>
  <input type="text" id="description" name="description" className="form-control" placeholder='Add Description of your note here.' onChange={handleChange} />
  




  <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
</form>
    </div>
  )
}

export default AddNote
