import React from 'react';

const SortRating = (props) => (
    <div className="SortRating" >
        <button onClick={props.sortRating}>Sort by popularity</button>
    </div>
);

export default SortRating;