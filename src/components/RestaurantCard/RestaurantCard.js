// src/components/RestaurantCard.js

import React from 'react';
import './RestaurantCard.css'

const RestaurantCard = (props) => (
    <div className='Restaurant' onClick={props.clicked}>
        <h1>{props.name}</h1>
        <h3>{props.rating}</h3>
    </div>
)
 
export default RestaurantCard;