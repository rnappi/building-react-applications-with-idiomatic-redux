import React from 'react';

import FilterLink from './FilterLink';

const Filter = () => (
  <div className="ui text menu">
    <div className="header item">Sort By</div>
    <FilterLink filter='all'>All</FilterLink>
    <FilterLink filter='active'>Active</FilterLink>
    <FilterLink filter='completed'>Completed</FilterLink>
  </div>
);

export default Filter;