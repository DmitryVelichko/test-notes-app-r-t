import React from 'react';
import { NewNoteInput } from './NewNoteInput';
import { useSelector } from 'react-redux';
import { NotesState } from './notesReducer';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );

  const dipatch = useDispatch();

  const onAddNote = (note: string) => {
    dipatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
