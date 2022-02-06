import SplashScreen from './views/SplashScreen/SplashScreen.js';
import SecondScreen from './views/SecondScreen/SecondScreen.js';
import Character from './views/Character/Character.js';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { characterSize } from './views/Character/Character';

export const keyContext = React.createContext('');
export const xContext = React.createContext('');
export const yContext = React.createContext('');
export const keyPressedContext = React.createContext('');
export const UP = "ArrowUp";
export const DOWN = "ArrowDown";
export const LEFT = "ArrowLeft";
export const RIGHT = "ArrowRight";
export const moveSpeed = 10;
export const screenWidth = 528;
export const screenHeight = 500;

function App() {
 
  const [key, setKey] = useState('');
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [keyEnabledArray, setKeyEnabledArray] = useState(new Set());


  const useKeyPress = (pressedKey) => {
    const [keyIsPressed, setKeyIsPressed] = useState(false);

    const handleDown = ({key}) => {
      if(key === pressedKey) {setKeyIsPressed(true)};
      setKey(key);
    }

    const handleUp = ({key}) => {
      if(key === pressedKey) {setKeyIsPressed(false)};
    }

    useEffect(() => {
      window.addEventListener("keydown", handleDown);
      window.addEventListener("keyup", handleUp);

      return () => {
        window.removeEventListener("keydown", handleUp);
        window.removeEventListener("keyup", handleUp);

      };
    }, [])

    return keyIsPressed;
  }
 
  const downPress = useKeyPress(DOWN);
  const upPress = useKeyPress(UP);
  const leftPress = useKeyPress(LEFT);
  const rightPress = useKeyPress(RIGHT);

  useEffect(() => {
      const intervalID = setInterval(() => {
        if(downPress) {
          MoveDown();
        }

        if(upPress) {
          MoveUp();
        }

        if(leftPress) {
          MoveLeft();
        }

        if(rightPress) {
          MoveRight();
        }
      }, 50);

      return () => clearInterval(intervalID);

    
  }, [downPress, upPress, leftPress, rightPress, y, x]);


  document.onkeyup = function(e){

    const newKeyEnabledArray = keyEnabledArray;
    newKeyEnabledArray.delete(e.key);
    setKeyEnabledArray(newKeyEnabledArray);
  };


  return (
    <keyContext.Provider value={[key, setKey]}>
      <xContext.Provider value={[x, setX]}>
          <yContext.Provider value={[y, setY]}>
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
        </yContext.Provider>
      </xContext.Provider>
    </keyContext.Provider>
  );

function MoveLeft() {
  if (x > moveSpeed) {
      setX(x - moveSpeed);
  }
}

function MoveRight() {
    if (x <= screenWidth - moveSpeed - 1 - characterSize) {
        setX(x + moveSpeed);
    }
}

function MoveUp() {
    if (y > moveSpeed) {
        setY(y - moveSpeed);
    }
}

function MoveDown() {
    if (y < screenHeight - moveSpeed - 1 - characterSize) {
        setY(y + moveSpeed);
    }
}
}

export default App;