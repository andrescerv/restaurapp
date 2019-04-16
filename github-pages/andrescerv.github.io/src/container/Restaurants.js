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
                        id={restaurant.id}
                        rating={restaurant.rating}
                        name={restaurant.name}
                        site={restaurant.contact.site}
                        email={restaurant.contact.email}
                        phone={restaurant.contact.phone}
                        street={restaurant.address.street}
                        city={restaurant.address.city}
                        state={restaurant.address.state}
                        lat={restaurant.address.location.lat}
                        lng={restaurant.address.location.lng}
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