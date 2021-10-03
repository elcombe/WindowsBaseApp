import React from 'react';
import { Link } from "react-router-dom";
 
function SplashScreen() {
    return (
        <div>
            <h1>This is the splash screen</h1>
            <p>Welcome!</p>
            <Link to={`/second`}>Go to 2nd page</Link>
        </div>
    );
}
 
export default SplashScreen;