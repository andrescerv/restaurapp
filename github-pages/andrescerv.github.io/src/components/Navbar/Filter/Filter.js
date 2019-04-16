import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Filter.css'

import SortNameAZ from './Actions/SortNameAZ'
import SortNameZA from './Actions/SortNameZA'
import SortRating from './Actions/SortRating'

class Filter extends Component {
    render() { 
        return ( 
            <div className="filter">
                <SortNameAZ sortAZ={this.props.sortA_Z}/>
                <SortNameZA sortZA={this.props.sortZ_A}/>
                <SortRating sortRating={this.props.sortRate}/>
            </div>
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
        sortA_Z: () => {
            return dispatch({
                type: 'SORT_A_TO_Z'
            })
        },
        sortZ_A: () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);