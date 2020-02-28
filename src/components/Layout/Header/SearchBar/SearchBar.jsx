import React from 'react';
import './searchbar.scss';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <input type="search"/>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default SearchBar
