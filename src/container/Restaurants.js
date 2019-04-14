// ./src/container/Restaurants.js

import React, { Component } from 'react';
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard/RestaurantCard'
import SortNameAZ from '../components/Navbar/Filter/Actions/SortNameAZ'
import SortNameZA from '../components/Navbar/Filter/Actions/SortNameZA'
import SortRating from '../components/Navbar/Filter/Actions/SortRating'
import axios from 'axios'

class Restaurants extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {restaurants: [
    //         {name: ''},
    //         {rating: ''}
    //     ]}
    //     console.log(`Initial value of state is ${this.state}`)
    //     console.log(this.state)
    // }

    // componentDidMount(){
    //     axios.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    //     .then(res => {
    //         this.setState({restaurants: res.data})
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    // }

    render() {
        return ( 
            <ul>
                {this.props.restaurantArray.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        name={restaurant.name}
                        rating={restaurant.rating}
                    />
                )
                )}
            </ul>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurantArray: state.restaurants
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortAZ: () => {
            return dispatch({
                type: 'SORT_A_TO_Z'
            })
        },
        sortZA: () => {
            return dispatch({
                type: 'SORT_Z_TO_A'
            })
        },
        sortRate: () => {
            return dispatch({
                type: 'SORT_BY_POPULARITY'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);