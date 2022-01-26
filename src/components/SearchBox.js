import React from "react";
import { FiSearch } from "react-icons/fi";
const SearchBox = ({ searchTerm, setSearchTerm, handleSubmit }) => {
  return (
    <form className="searchBox" onSubmit={(e) => handleSubmit(e)}>
      <span>
        <FiSearch />
      </span>
      <input
        required
        type="text"
        placeholder="Search Github username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
