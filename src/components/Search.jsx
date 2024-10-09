import { useGlobalContext } from "../context";
import { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";

const Search = () => {
  const [text, setText] = useState("");
  const { fetchList, setSearchTerm, fetchRandomMeal } = useGlobalContext();

  // Handle change event with debounced submit
  const handleChange = (e) => {
    setText(e.target.value);
    debouncedSubmit(e.target.value);
  };

  // Handle submit event to set the search term
  const handleSubmit = (searchValue) => {
    if (searchValue) {
      setSearchTerm(searchValue);
      setText(""); // Clear input
    }
  };

  // Debounce the submit function to limit API calls
  const debouncedSubmit = useCallback(
    debounce((value) => handleSubmit(value), 500), // Adjust the debounce time as needed (e.g., 500ms)
    []
  );

  return (
    <header className="search-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src="fast-food.png" alt="" />
          RecipeToday
        </div>
        <div>
          <FaSearch />
          <input
            value={text}
            onChange={handleChange}
            className="form-input"
            type="text"
            placeholder="Search..."
          />
          <button className="btn" onClick={fetchList} type="submit">
            All
          </button>
        </div>
      </form>
    </header>
  );
};

export default Search;
