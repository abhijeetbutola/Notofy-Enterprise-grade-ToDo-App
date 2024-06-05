import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function SearchBar({ onSubmit, className }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("Value submitted");
    onSubmit(searchValue);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className={className}
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchValue}
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default SearchBar;
