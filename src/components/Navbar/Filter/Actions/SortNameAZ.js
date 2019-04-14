import React from 'react';
import { DropdownItem } from 'reactstrap'

const SortNameAZ = (props) => (
    <div className="SortNameAZ">
        <DropdownItem onClick={props.sortAZ}>name A to Z</DropdownItem>
    </div>
);

export default SortNameAZ;