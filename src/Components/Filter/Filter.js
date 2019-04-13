import React, { Component } from 'react';

class Filter extends Component {
    state = {  }

    filterWasClicked (event) {
        alert('Filter was clicked!')
        console.log('Filter was clicked!')
    }

    render() { 
        return ( 
            <div>
                <h1 onClick={this.filterWasClicked}>Filter</h1>
            </div>
         );
    }
}
 
export default Filter;