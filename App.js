import List from "./components/components/List"
import {useState} from 'react';
import{nanoid} from 'nanoid';


const App=()=>{
  const [notes,set]=useState([
  {
    id:nanoid(),
    text:"Make some coding tutorials...",
   },
   {
    id:nanoid(),
    text:"Probabil should start eating healthy at some point this year",
   },
   {
    id:nanoid(),
    text:"Go and wathch a movie, for once",
   },
   {
    id:nanoid(),
    text:"learn an outside hobby such as mowing the lawn",
   }
]);

// const addNote=(text)=>{
//   const newNote={
//     text:text,
//     id:nanoid(),
//   }
//   const newnotes=[notes,newNote];
//   set(newNote);
// }

// const deletenode=(id)=>{
//   notes.filter((note)=>note.id !==id);
// }

  return(
    <div>
      <List notes={notes}/>
    </div>
  )}

export default App;