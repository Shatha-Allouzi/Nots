import Note from './Note';
import AddNote from './AddNote';
const List = ({notes})=>{
    return(
        <div className="notes-list">
            {notes.map((note)=>(
            <Note id={note.id} text={note.text}/>
            ))}
            <AddNote/>
        </div>
    );
};
export default List;