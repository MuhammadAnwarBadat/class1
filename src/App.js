import React from 'react';
import './App.css';
import Hello from './Hello';

function App(props) {
  return <div>
            Hello from App.js updated {props.name} Age = {props.age - 10}
            <br/>
            <Hello firstName={props.name}></Hello>
         </div>
}

export default App;
