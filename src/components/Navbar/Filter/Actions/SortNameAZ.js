import React from 'react';

const SortNameAZ = (props) => (
    <div className="SortNameAZ" >
        <button onClick={props.sortAZ}>Sort by name (A to Z)</button>
    </div>
);

export default SortNameAZ;