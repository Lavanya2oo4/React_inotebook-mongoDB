const express = require("express")
const router = express.Router()
const fetchData = require("../Middlewares/fetchData")
const Note = require("../models/Note")
const { body, validationResult } = require("express-validator")



//Fetching all notes login needed must provide auth token in header
router.get("/fetchAllNotes", fetchData, async (req, res) => {
    const notes = await Note.find({ user: req.user.id })                   //finds the user matching this id in server and store all associated notes
    res.json(notes)

})


//Must provide auth token in header
router.post("/addNote", fetchData, [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters long").isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note=new Note({
            title,description,tag,user:req.user.id
        })
        const savedNote=await note.save()
        res.json(savedNote)

    }
    catch (e) {
       console.error(e.message)
       res.status(500).send("Enter valid data")
    }

})


//update note -auth token needed +note id needed as parameter
router.put("/updateNote/:id",fetchData,async (req,res)=>{

    try{
    const {title,description,tag}=req.body //taking out fields by destructuring

    let newNote={}
    if(title){newNote.title=title}    //if user has send title in body or say title is not null then newNote.title=title
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}

    let note=await Note.findById(req.params.id) //finding if a note with this id exists


    //if no note exists
    if(!note){
         return res.status(404).send("Not Found")
    }
    //if id of user associated with the note doesnt match the id assigned as params then action to update is not allowed
    if(note.user.toString() !==req.user.id){
        return res.status(401).send("Not Allowed")
    }


    //finds the note associated with the given id,sets it to new Note and return the updated note
    note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

    res.json({note})

}
catch(e){
    res.status(500).send("Internal Server Error")
}

})





//delete note -auth token needed +note id needed as parameter
router.delete("/deleteNote/:id",fetchData,async (req,res)=>{

    try{


    let note=await Note.findById(req.params.id) //finding if a note with this id exists

    //if no note exists
    if(!note){
         return res.status(404).send("Not Found")
    }
    //if id of user associated with the note doesnt match the id assigned as params then action to update is not allowed
    if(note.user.toString() !==req.user.id){
        return res.status(401).send("Not Allowed")
    }


    //finds the note associated with the given id,sets it to new Note and return the updated note
    note=await Note.findByIdAndDelete(req.params.id)

    res.json({"Success":"Note has been Deleted:"+req.params.id})

}
catch(e){
    res.status(500).send("Internal Server Error")
}

})

module.exports = router