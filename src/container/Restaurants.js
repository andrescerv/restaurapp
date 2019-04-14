// ./src/container/Restaurants.js

import React, { Component } from 'react';
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard'

class Restaurants extends Component {
    render() {
        return ( 
            <ul>
                {this.props.restaurantArray.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        name={restaurant.name}
                        rating={restaurant.rating}
                    />
                ))}
            </ul>
         );
    }
}

const mapStateToProps = (state) => {
    console.log(`The order of the restaurants is: ${state.restaurants}`)
    return {
        restaurantArray: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurants);