import React from "react";
import "./Searchbar.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search Notes"
        value={value}
        onChange={onChange}
      />

      {value && <IoMdClose className="close" onClick={onClearSearch} />}

      <FaMagnifyingGlass className="search-icon" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
