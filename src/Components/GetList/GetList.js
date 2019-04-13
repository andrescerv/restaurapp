import React, { Component } from 'react';
import restaurants from '../../data/data_melp.json'

class GetList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>This component gets data.</h1>
                {restaurants.map((restaurant, name) => {
                    return <div>
                        <h3>{restaurant.name}</h3>
                        <h3>{restaurant.rating}</h3>
                    </div> 
                })}
            </div>
         );
    }
}
 
export default GetList;