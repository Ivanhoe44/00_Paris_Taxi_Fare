import React, { useState, useEffect } from "react"
import './App.css';
import { RIDES } from './shared/rides'
import List from "./components/RideComponent";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">Paris Taxi Fare</header>
      <body> 
        <div> 
          <List RIDES={RIDES}/>
        </div>
      </body>
    </div>
  );
}
export default App;
