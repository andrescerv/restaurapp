import React, { Component } from 'react';
import restaurants from '../../data/data_melp.json'

class List extends Component {
    state = {  }
    render() {
        return ( 
            <div>
                <h1>Amazing restaurants:</h1>
                {restaurants.map((restaurant, name) => {
                    return <div>
                        <h3>
                            {restaurant.name}, <br/>
                            {restaurant.rating}, <br/>
                            {restaurant.contact.site}, <br/>
                            {restaurant.contact.email}, <br/>
                            {restaurant.contact.phone}, <br/>
                            {restaurant.address.street}, <br/>
                            {restaurant.address.city}, <br/>
                            {restaurant.address.state} <br/>
                        </h3>
                    </div> 
                })}
            </div>
         );
    }
}
 
export default List;