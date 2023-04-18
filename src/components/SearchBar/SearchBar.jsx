import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className='search-bar'>
      <div className='search-bar__sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='search-bar__fields'>
        <input type='text' placeholder='Search Businesses' />
        <input type='text' placeholder='Where?' />
      </div>
      <div className='search-bar__submit'>
        <a>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;