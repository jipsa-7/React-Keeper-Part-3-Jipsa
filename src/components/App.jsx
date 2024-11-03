import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [note, setNote] = useState([]);
  function noteButton(newNote) {
    setNote((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteFunction(id) {
    setNote((prevValue) => {
      return prevValue.filter((eachprevValue, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNote newNotes={noteButton} />
      {note.map((eachitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachitem.title}
            content={eachitem.content}
            deleteFunction={deleteFunction}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
