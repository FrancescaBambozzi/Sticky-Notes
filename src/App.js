import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [],
    searchText: "",
  };

  // save the state to the browser’s local storage each time the notes data is updated
  componentDidUpdate() {
    const localStateString = JSON.stringify(this.state);
    localStorage.setItem("localStateString", localStateString);
  }

  //pull the saved value when the UI is reopened
  componentDidMount(){
    const localStateString = localStorage.getItem("localStateString");

    //make data available between sessions by setting the state from the previous one to the new one
    if (localStateString){
      const savedState = JSON.parse(localStateString);
      this.setState(savedState);
    }
  }

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };

  onType = (editNoteId, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editNoteId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    });
    this.setState({
      searchText: newSearchText,
      notes: updatedNotes,
    });
  };

  removeNote = (noteId) => {
    const idNotMatch = (note) => note.id !== noteId;
    const updatedNotes = this.state.notes.filter(idNotMatch);
    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          removeNote={this.removeNote}
        />
      </div>
    );
  }
}

export default App;