import React, {useState} from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return 'active'
    }
    return ''
  }

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption)
  }

  const handleTermChange = (event) => {
    setTerm(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} 
                 className={getSortByClass(sortByOptionValue)} 
                 onClick={() => {
                  handleSortByChange(sortByOptionValue)
                 }}
             >
                {sortByOption}
              </li>;
    });
  };

  return (
    <div className='search-bar'>
      <div className='search-bar__sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className='search-bar__fields'>
          <input type='text' placeholder='Search Businesses' onChange={handleTermChange} />
          <input type='text' placeholder='Where?' onChange={handleLocationChange} />
        </div>
        <div className='search-bar__submit'>
          <button type='submit'>Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;