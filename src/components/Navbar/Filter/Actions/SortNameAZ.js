import React from 'react';

const SortNameAZ = (props) => (
    <div className="filterButton" >
        <p onClick={props.sortAZ}>Sort by name (A to Z)</p>
    </div>
);

export default SortNameAZ;