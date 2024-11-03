import React, { useState } from "react";

function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function addNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function submitNote(event) {
    props.newNotes(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={addNote}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={addNote}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
