import React, { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const hanleChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: false
    })
    setNewNote('')
  }
  return (
    <div className='formDiv'>
      <h2>Create a new note</h2>
      <form onSubmit={addNote}>
        <div>
          note:
          <input
            type='text'
            id='input-content'
            value={newNote}
            name='Content'
            onChange={hanleChange}
          />
        </div>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default NoteForm
