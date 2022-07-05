import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container' style={{ borderColor: props.monster?.rating }} >
        <img alt="monster" src={props.monster?.imageUrl} />
        <div>
            <span className='card-value'> {props.monster?.value} </span><br/>
            <span className='card-label'> {props.monster?.name} </span>
        </div>
    </div>
);