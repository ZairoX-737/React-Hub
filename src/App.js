import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-data')
      );

      if(savedNotes){
        setNotes(savedNotes);
      };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-data', 
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString('en-US'),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );}

 export default App