import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

 const App = () =>{
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a note",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "This is a note 2",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "This is a note 3",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "This is a note 4",
      date: "02/04/2024",
    },
  ]);
  return <div className="container">
    <NotesList notes={notes}/>
  </div>
 }

 export default App