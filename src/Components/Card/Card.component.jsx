import React from 'react';
import './Card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img
            style={{padding:10}}
            alt="monsters"
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h3 style={{margin:0}}>{props.monster.name}</h3>
        <p style={{margin:15}}>{props.monster.email}</p>
    </div> 
); 