import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container' style={{borderColor: props.monster?.rating}} >
        <img alt="monster" src={`https://res.cloudinary.com/snyk/image/upload/v1537345897/press-kit/brand/logo-vertical-black.png?set=set2&size=180x180`} />
        <h2> {props.monster?.value} </h2>
        <p> {props.monster?.name} </p> 
    </div>
);