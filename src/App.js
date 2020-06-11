import React from 'react';
import './App.css';
import InputMirror from "./components/InputMirror"
import Lister from "./components/Lister";
import InputMirror_store from "./store/InputMirror_index";
import Lister_store from "./store/Lister_index";

function App() {
  return (
    <div className="App">
            <InputMirror store={InputMirror_store}/>
            <Lister store={Lister_store}/>
    </div>
  );
}

export default App;
