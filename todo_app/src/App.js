import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import db from './firebase';
import "./App.css";
import Todo from "./Todo";
import firebase from "firebase";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Function runs when the App.js loads
    db.collection('todo').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().task})));
    })
  }, [])

  const addTodo = (event) => {
    // Function Fire on click of the Button Add List
    event.preventDefault(); // Stop the REFRESH 
    db.collection('todo').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>TODO LIST!!!!</h1>
      <form>
        <FormControl>
          <InputLabel>Write Your List Items</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value) } />
        </FormControl>
        <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary"> Add List </Button>
      </form>
      <ul>
        {todos.map((value) => (
          <Todo todo={value} />  //todo over here is from the line 16 - todo   
        ))} 
      </ul>
    </div>
  );
}

export default App;
