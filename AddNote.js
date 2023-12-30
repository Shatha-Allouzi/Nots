import { useState } from "react";

const AddNote=()=>{
        return(
        <div className="new note">
           <textarea placeholder="add your nots"></textarea>
           <div className="footer">
            <button className="save" >save</button>
           </div>
        </div>
        )
}
export default AddNote; 