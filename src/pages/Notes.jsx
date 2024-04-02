import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "../components/Notes_components/NotesList";
import Search from "../components/Notes_components/Search";
import Header from "../components/Notes_components/Header";

 const Notes = () =>{
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is a note",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "Yes, just a simple notes app",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "Not something big",
      date: "02/04/2024",
    },
    {
      id: nanoid(),
      text: "Just 4 fun :)",
      date: "02/04/2024",
    },
  ]);

  const [searchText, setSearchText] = useState('');

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
      <div className="notes-container">
        <Header />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
  );}

 export default Notes