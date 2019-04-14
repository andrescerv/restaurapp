import React from 'react';
import { DropdownItem } from 'reactstrap'

const SortNameZA = (props) => (
    <div className="SortNameZA">
        <DropdownItem onClick={props.sortZA}>name Z to A</DropdownItem>
    </div>
);

export default SortNameZA;