// src/store/reducer.js
import axios from 'axios'
import data from '../data/data_melp.json'

const initialState = {
    restaurants: [ ]
  };


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_A_TO_Z':
      return {
          restaurants: state.restaurants.name.sort()
      }

    case 'SORT_Z_TO_A':
      return {
          restaurants: state.restaurants.name.sort()
      }

    case 'SORT_BY_POPULARITY':
      return{
        restaurants: state.restaurants.rating.sort()
      }
  
    default:
      return {
        restaurants: state.restaurants.concat(data)
      }
    // return (
    //   axios.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    //   .then(res => {
    //       this.setState({restaurants: res.data})
    //   })
    //   .catch(function (error) {
    //       console.log(error)
    //   })
    // )
  }
};

export default reducer;