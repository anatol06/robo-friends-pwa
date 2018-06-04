import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {

    return (
        <div className="pa2 mb3">
            <input 
                type="search" 
                placeholder="Search robots"
                className="pa3 ba b--green bg-lightest-blue br2"
                onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBox;