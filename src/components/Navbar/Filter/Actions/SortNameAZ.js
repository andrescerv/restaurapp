import React from 'react';
import { connect } from 'react-redux'
import { DropdownItem } from 'reactstrap'

const SortNameAZ = (props) => (
    <div className="SortNameAZ">
        <DropdownItem onClick={() => this.props.sortAZ}>name (A to Z)</DropdownItem>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        sortAZ: () => {
            console.log('ordenado de la A a la Z')
            return dispatch({
                type: 'SORT_A_TO_Z'
            })
        }
    }
}

export default connect(mapDispatchToProps)(SortNameAZ);