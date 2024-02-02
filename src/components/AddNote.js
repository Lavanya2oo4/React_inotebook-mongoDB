import React, { useContext, useState } from 'react'
import noteContext from '../Context/notes/NoteContext'
import AlertContext from '../Context/alert/AlertContext'

const AddNote = () => {
    let context=useContext(noteContext)
    let alertContext=useContext(AlertContext)

    let {addNote}=context
    let {setAlert}=alertContext


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
        // console.log("NotAdded")
        setNote({
          "title":"",
          "description":"",
          "tag":"",
        })
        setAlert("Note Added","primary",false)
    }
    let handleChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    //  keep whatever was in previous array and updates value of whatever "e" is to whatever user is entering 
    // e.g. user is updating title so value to title in array will change to whatever user is writing
    }

    



  return (
    <div>
      <h1 className="text-primary"><b>Add Note </b></h1>
      <h6 style={{color:"red"}}>Each Field Must be Atleast 5 characters long</h6>

<form id="form">


  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title here." onChange={handleChange} value={note.title} />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" placeholder="Enter Tag Here." onChange={handleChange} value={note.tag} />
  </div>


  <label htmlFor="description" className="form-label">Description</label>
  <input type="text" id="description" name="description" className="form-control" placeholder='Add Description of your note here.' onChange={handleChange} value={note.description}/>
  




  <button type="button"  disabled={note.title.length<=5 || note.tag.length<=5 || note.description.length<=5} className="btn btn-primary" onClick={handleClick}>Add</button>
</form>
    </div>
  )
}

export default AddNote
