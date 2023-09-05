// AQUÍ VA TU COMPONENTE
// ¡No olvides exportarlo!

import React, { useState } from 'react';
import './RandomColor.css';

function RandomColor() {
    const [bgColor, setBgColor] = useState('#ffffff');

    const getRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
    };

    return (
        <div className="random-color-container" style={{ backgroundColor: bgColor }}>
            <div className="yellow-square">
                <button onClick={getRandomColor}>Cambiar Color</button>
            </div>
        </div>
    );
}

export default RandomColor;
