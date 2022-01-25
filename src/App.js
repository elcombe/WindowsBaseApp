import SplashScreen from './views/SplashScreen/SplashScreen.js';
import SecondScreen from './views/SecondScreen/SecondScreen.js';
import Character from './views/Character/Character.js';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import React, { useState } from 'react';

export const keyContext = React.createContext('');
export const UP = "ArrowUp";
export const DOWN = "ArrowDown";
export const LEFT = "ArrowLeft";
export const RIGHT = "ArrowRight";
export const TIME = 300

function App() {
 
  const [key, setKey] = useState('');
  const [timeKeyPressed, setTimeKeyPressed] = useState(Date().toLocaleString());

  window.addEventListener('keydown', (event) => {
    if(timeKeyPressed + TIME < Date().toLocaleString()) {
      if (event.key == UP || event.key == DOWN || event.key == RIGHT || event.key == LEFT) {
        setKey(event.key);
        setTimeKeyPressed(Date().toLocaleString());
      }
    }
  });


  return (
    <keyContext.Provider value={[key, setKey]}>
    <div className='App'>
        <Router>
            <Switch>
            <Route exact path="/">
                <SplashScreen />
            </Route>
            <Route path="/second">
                <SecondScreen />
            </Route>
            <Route path="/character">
                <Character />
            </Route>
            </Switch>
        </Router>
    </div>
    </keyContext.Provider>
  );
}

export default App;