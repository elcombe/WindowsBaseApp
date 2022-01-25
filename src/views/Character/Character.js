import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import walkUp from '../../assets/characters/dog/walk_up.gif';
import walkDown from '../../assets/characters/dog/walk_down.gif';
import walkLeft from '../../assets/characters/dog/walk_left.gif';
import walkRight from '../../assets/characters/dog/walk_right.gif';
import {keyContext, UP, DOWN, LEFT, RIGHT} from '../../App.js'; 

function Character() {

    let sprite = walkUp;

    const [keyPressed] = useContext(keyContext);
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


    return (
        <div>
            <Link to={`/`}>Go back to main page</Link>
            <div>
                <img src={sprite} />

            </div>
        </div>
    );
}
 
export default Character;