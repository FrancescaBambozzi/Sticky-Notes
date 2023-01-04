import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editNoteId = props.note.id;
    props.onType(editNoteId, "title", updatedValue);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editNoteId = props.note.id;
    props.onType(editNoteId, "description", updatedValue);
  };

  const deleteNote = () => props.removeNote(props.note.id); 

  return (
    <li className="note">
      <input
        type="text"
        value={props.note.title}
        onChange={updateTitle}
        placeholder="Title"
        className="note__title"
      />
      <textarea
        value={props.note.description}
        onChange={updateDescription}
        placeholder="Description..."
        className="note__description"
      />
      <span onClick={deleteNote} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
