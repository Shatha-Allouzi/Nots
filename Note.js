import AddNote from "./AddNote";
import remove from '../../pic/trash.png'
const Note=({id,text})=>{
    return(
        <div className="note">
            <span>{text}</span>
            <div className="footer">
            <div className="Remove">
            <img src={remove}/>
            </div>
            <button className='color'>color</button>
            </div>
        </div>
    )
}

export default Note;