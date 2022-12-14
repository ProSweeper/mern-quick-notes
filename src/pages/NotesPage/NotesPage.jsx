import NoteItem from '../../components/NoteItem/NoteItem'
import { useState, useEffect } from 'react';
import * as notesAPI from "../../utilities/notes-api"
import './NotesPage.css'
export default function NotesPage({ user }) {
  const [notes, setNotes] = useState([]);

  useEffect(function () {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    if (user) getNotes();
  }, [user]);

  async function addNote(data) {
    const note = await notesAPI.create(data);
    setNotes([...notes, note]);
  }

  const noteItems = notes.map((note, idx) => <NoteItem note={note} key={idx}/>);

  const [newNote, setNewNote] = useState({
    text: ''
  });

  function handleChange(evt) {
    setNewNote({text: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({text: ''});
  }
  
  return (
    <>
      {noteItems.length ? 
        <div>{noteItems}</div>
        :
        <span>No notes yet</span>
      }
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder='Type your note' 
          value={newNote.text} 
          name='text'
          required
          onChange={handleChange}
        />
        <button type='submit'>Add Note</button>
      </form>
    </>
  )
}