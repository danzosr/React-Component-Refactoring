import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header.jsx"
import List from "./List.jsx"
import Forms from "./Forms.jsx"

const baseUrl = 'http://localhost:3001/api/notes'



const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
    };

    axios
      .post(baseUrl, noteObject)
      .then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data))
        setNewNote("");
      });
  };

  return (
    <div>
      <Header />
      <List notes={notes} />
      <Forms addNote={addNote} handleNoteChange={handleNoteChange} newNote={newNote} />
    </div>
  );
};

export default App;


/*
Documentación de React: https://es.reactjs.org/docs/getting-started.html

Como se usa useEffect y useState

useState: Se utiliza para trabajar con las notas, ya que en newNote se almacena la nota nueva y en notes se almacenan todas las notas, setNewNote y SetNotes son funciones para actualizar el estado de newNote y notes respectivamente.

UseEffect: Se utiliza para hacer una petición GET a la API y obtener las notas que ya están guardadas en la base de datos. Se ejecuta una vez al cargar la página.

*/