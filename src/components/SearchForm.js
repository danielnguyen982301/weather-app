import React from "react";

function SearchForm({ handleChange, handleSubmit, input }) {
  return (
    <form action="" className="search-form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder="Your city" />
      <button type="submit" className="submit-btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
