import React, { Component } from 'react';
import './Filter.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


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
                            Filter by name...
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>From A to Z</DropdownItem>
                            <DropdownItem>From Z to A</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="button">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            Filter by rating...
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>From 4 to 0</DropdownItem>
                            <DropdownItem>From 0 to 4</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
         );
    }
}
 
export default Filter;