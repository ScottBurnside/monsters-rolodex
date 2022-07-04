import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container' >
        <img alt="monster" src={props.monster.imageUrl} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.value} </p> 
    </div>
);