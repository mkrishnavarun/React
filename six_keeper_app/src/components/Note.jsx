import React from "react"
import "./note.css"

function Note({title, content}){
    return (
        <div className="note">
            <h2> {title} </h2>
            <p> {content}</p>
         </div>

        )
    }

export default Note;