import React, { Component } from 'react';
import './Filter.css'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SortNameAZ from './Actions/SortNameAZ'
import SortNameZA from './Actions/SortNameZA'
import SortRating from './Actions/SortRating'


class Filter extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = { 
            dropdownOpen: false
         }
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    render() { 
        return ( 
            <div className="filter">
                <div className="button">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Filter by...
                        </DropdownToggle>
                        <DropdownMenu>
                            <SortNameAZ/>
                            <SortNameZA/>
                            <SortRating/>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
         );
    }
}
 
export default Filter;