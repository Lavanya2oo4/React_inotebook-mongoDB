import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../Context/notes/NoteContext"
import NoteItem from './NoteItem'
import AlertContext from '../Context/alert/AlertContext'
import {useNavigate} from "react-router-dom"
const Notes = () => {
  let context = useContext(noteContext)
  let alertContext=useContext(AlertContext)

  const { notes, setNotes, getNotes, editNote } = context
  const {setAlert}=alertContext
  let navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("authToken")){
           getNotes()
    }
    else{
     navigate("/login")
    }
  },[])


  // //calls get notes only once when page is loaded
  // useEffect(() => {
  //   getNotes()
  // }, [])



  // updatenote functions
  const ref = useRef(null)
  const close_ref=useRef(null)

  const [note, setNote] = useState({
    "id": "",
    "etitle": "",
    "edescription": "",
    "etag": ""
  })


  let updateNote = (currentNote) => {
    ref.current.click()  //dynamically clicks on whatever element is current reference
    setNote({
      "id":currentNote._id,
      "etitle": currentNote.title,
      "edescription": currentNote.description,
      "etag": currentNote.tag,
    })
  }



  let handleClick = () => {
    document.getElementById("form").addEventListener("submit", (e) => {
      e.preventDefault()
    })
    // console.log("note updated to:" + note.etitle)
    editNote(note.id, note.etitle, note.etag, note.edescription)
    close_ref.current.click()
    setAlert("Note Updated","success",false)

  }



  let handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
    //  keep whatever was in previous array and updates value of whatever "e" is to whatever user is entering 
    // e.g. user is updating title so value to title in array will change to whatever user is writing
  }




  return (

    <div style={{ marginBottom: "10vh" }}>



      {/* update note modal */}
      <div>
        <button type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="toggleBtn" hidden>
          Launch modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div>

                  <form id="form">


                    <div className="mb-3">
                      <label htmlFor="etitle" className="form-label">Title</label>
                      <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="etag" className="form-label">Tag</label>
                      <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handleChange} />
                    </div>


                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" id="edescription" name="edescription" className="form-control" value={note.edescription} onChange={handleChange} />





                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" ref={close_ref} data-bs-dismiss="modal">Cancel</button>
                <button type="button"  disabled={note.etitle.length<=5 || note.etag.length<=5 || note.edescription.length<=5} className="btn btn-primary" onClick={handleClick}>Update Note</button>
              </div>
            </div>
          </div>
        </div>
      </div >







      <h2>
        Your Notes:
      </h2>
      <div className='container noteBox' >
        {notes.length===0 && "⚠️No Notes To Display."}
        {
          notes.map((note) => {
            return <NoteItem key={note._id} note={note} updateNote={updateNote}></NoteItem>


          })
        }
      </div>
    </div >
  )
}

export default Notes
