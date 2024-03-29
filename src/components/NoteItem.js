import React, { useContext } from 'react'
import edit from "../images/edit.png"
import trash from "../images/trash-bin.png"
import noteContext from '../Context/notes/NoteContext'
import AlertContext from '../Context/alert/AlertContext'


const NoteItem = (props) => {
    const { note,updateNote } = props
    const {deleteNote}=useContext(noteContext)

    const {setAlert}=useContext(AlertContext)

    // formatting date
    let date = new Date(note.date)
    let dateFormatted = date.toUTCString()
    return (
        <div className='note'>
            {/* {note.title}
      {note.description}
      {note.date} */}



            <div className="card p-1" >
                <div className="card-header flex-sB" >
                    <p style={{ textTransform: "uppercase" }}>{note.tag}</p>
                    <div className="editNote" >
                        <img className="editImg" src={edit} title='Edit The Note🖋️' onClick={()=>{
                                 updateNote(note)
                        }}/>
                        <img className="editImg" src={trash} title="Delete The Note❌"  onClick={()=>{
                                 deleteNote(note._id)
                                 setAlert("Note Deleted","warning",false)

                        }}/>
                        
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-primary" style={{ fontWeight: 700 }}>{note.title}</h5>
                    <p className="card-text" style={{ fontWeight: 550 }}>{note.description}</p>
                    <p className="date align-bottom" style={{ display: "inline", float: "right" }}>{dateFormatted}</p>
                    
                </div>

            </div>
        </div>
    )
}

export default NoteItem
