import React from 'react';
import { Link } from 'react-router-dom';

const FilterLink = ({ children, filter }) => (
    <Link
        className="item"
        to={filter === 'all' ? '' : filter}
        activestyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </Link>
);
export default FilterLink;