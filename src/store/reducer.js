// src/store/reducer.js
import axios from 'axios'
import data from '../data/data_melp.json'

const initialState = {
    restaurants: [ ]
  };

// axios.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
// .then(res => {
//   this.initialState({restaurants: res.data})
//   console.log(initialState);
// })
// .catch(function(error) {
//   console.log(error);
// })


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_A_TO_Z':
    console.log('Reducer says: list is supposed to be sorted from A to Z')
    return {  
      restaurants: state.restaurants.sort((a,b) => (a.name > b.name) ? 1 : -1)
    }
    
    case 'SORT_Z_TO_A':
    console.log('Reducer says: list is supposed to be sorted from Z to A');
    return {
      restaurants: state.restaurants.sort((a,b) => (a.name > b.name) ? -1 : 1)
    }
    
    case 'SORT_BY_POPULARITY':
    console.log('Reducer says: list is supposed to be sorted by popularity');
    return{
      restaurants: state.restaurants.sort((a,b) => (a.rating > b.rating) ? 1 : -1)
    }
    
    default:
    console.log(state)
    console.log(state.restaurants);
    return {
      restaurants: state.restaurants.concat(data)
    }
  }
};

export default reducer;