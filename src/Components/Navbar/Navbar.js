import React, { Component } from 'react';
import Filter from '../Filter/Filter'
import './Navbar.css'

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div className="navbar">
                <h1>Melp</h1>
                <Filter/>
            </div> 
        );
    }
}
 
export default Navbar;