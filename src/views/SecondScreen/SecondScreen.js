import React from 'react';
import { Link } from "react-router-dom";
 
function SecondScreen() {
    return (
        <div>
            <h1>This is the second screen</h1>
            <Link to={`/`}>Go back to main page</Link>
        </div>
    );
}
 
export default SecondScreen;