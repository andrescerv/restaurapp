import React from 'react';

const SortRating = (props) => (
    <div className="filterButton" >
        <p onClick={props.sortRating}>Sort by popularity</p>
    </div>
);

export default SortRating;