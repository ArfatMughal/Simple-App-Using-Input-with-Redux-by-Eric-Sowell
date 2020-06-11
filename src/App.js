import React from 'react';
import './App.css';
import InputMirror from "./InputMirror"
import store from "./store";

function App() {
  return (
    <div className="App">
      <InputMirror store={store}/>
    </div>
  );
}

export default App;
