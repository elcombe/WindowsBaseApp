import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import walkUp from '../../assets/characters/dog/walk_up.gif';
import walkDown from '../../assets/characters/dog/walk_down.gif';
import walkLeft from '../../assets/characters/dog/walk_left.gif';
import walkRight from '../../assets/characters/dog/walk_right.gif';
import {keyContext, xContext, yContext, UP, DOWN, LEFT, RIGHT, screenWidth, screenHeight} from '../../App.js'; 

export const characterSize = 16;

function Character() {

    let sprite = walkUp;

    const [keyPressed] = useContext(keyContext);
    const [x] = useContext(xContext);
    const [y] = useContext(yContext);
    switch(keyPressed) {
        case UP:
            sprite = walkUp;
            break;
        case DOWN:
            sprite = walkDown;
            break;
        case RIGHT:
            sprite = walkRight;
            break;
        case LEFT:
            sprite = walkLeft;
            break; 
    }

    const characterStyle = {
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
        position: 'absolute',
        left: 0
    }

    const imageDivStyle = {
        borderStyle: 'solid',
        height: screenHeight,
        width: screenWidth,
        margin: '0 auto',
        marginTop: 10,
        position: 'relative'
    }

    return (
        <div>
            <Link to={`/`}>Go back to main page</Link>
            <div style={imageDivStyle}>
                <img src={sprite} style={characterStyle} />
            </div>
        </div>
    );
}
 
export default Character;