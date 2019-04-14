import React from 'react';
import { DropdownItem } from 'reactstrap'

const SortRating = (props) => (
    <div className="SortRating">
        <DropdownItem onClick={props.sortRating}>rating</DropdownItem>
    </div>
);

export default SortRating;