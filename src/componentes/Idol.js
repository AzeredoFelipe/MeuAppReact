// src/components/Idol.js
import React from 'react';

function Idol({ name, image, description }) {
    return (
        <div className="idol">
            <h2>{name}</h2>
            <img src={image} alt={name} style={{ width: '200px', height: '200px' }} />
            <p>{description}</p>
        </div>
    );
}

export default Idol;
