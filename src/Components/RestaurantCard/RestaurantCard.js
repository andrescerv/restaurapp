import React, { Component } from 'react';

class RestaurantCard extends Component {
    render() { 
        return ( 
            <li key={this.props.restaurant}>
                {this.props.restaurant.name}
            </li>
         );
    }
}
 
export default RestaurantCard;