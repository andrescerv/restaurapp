import React, { Component } from 'react';
import axios from 'axios'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

// import restaurants from '../../data/data_melp.json'

class RestaurantList extends Component {

    constructor(props) {
        super(props)
        this.state = {restaurants: []}
    }

    componentDidMount(){
        axios.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
        .then(res => {
            console.log(res)
            this.setState({restaurants: res.data})
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    // list(){
    //     return this.state.restaurants.map(function(object, i){
    //         return <RestaurantCard obj={object} key={i} />
    //     })
    // }

    render() {
        return ( 
            <ul>
                {this.state.restaurants.map(restaurant => (
                    <li key={restaurant.id}>
                        {restaurant.name}
                        <p>
                            Rating: {restaurant.rating}
                        </p>
                    </li>
                    )
                )}
            </ul>
         );
    }
}
 
export default RestaurantList;