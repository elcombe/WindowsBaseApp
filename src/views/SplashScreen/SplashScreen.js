import React from 'react';
import { Link } from "react-router-dom";
 
function SplashScreen() {
    return (
        <div>
            <h1>This is the splash screen</h1>
            <p>Welcome!</p>
            <div>
                <Link to={`/second`}>Go to 2nd page</Link>
            </div>
            <div>
                <Link to={`/character`}>Go to Character Test page</Link>
            </div>
        </div>
    );
}
 
export default SplashScreen;