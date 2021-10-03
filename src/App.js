import SplashScreen from './SplashScreen/SplashScreen.js';
import SecondScreen from './SecondScreen/SecondScreen.js';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
  return (
    <div className='App'>
        <Router>
            <Switch>
            <Route exact path="/">
                <SplashScreen />
            </Route>
            <Route path="/second">
                <SecondScreen />
            </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;