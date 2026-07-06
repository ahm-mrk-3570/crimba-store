import { useState } from "react";
import "./Search.css";

import SearchItem from "./SearchItem/SearchItem";

import _ from "lodash";
import { searchProducts } from "../../services/productServices";

const Search = ({ onClose }) => {
  const [searchItems, setSearchItems] = useState([]);

  const handleChange = _.debounce(async (e) => {
    const { data, error } = await searchProducts(e.target.value);

    if (error) {
      console.log(error.message);
      return;
    }

    setSearchItems(data);
  }, 500);

  return (
    <div className="search-container">
      <div className="input-container">
        <div className="search-input-container">
          <label htmlFor="search-input">Search</label>
          <input
            onChange={handleChange}
            type="text"
            id="search-input"
          />
        </div>
      </div>
      <div className="suggest-container">
        {searchItems.map((sI) => {
          return (
            <SearchItem
              key={sI.id}
              id={sI.id}
              img={sI.pictures[0]}
              title={sI.name}
              description={sI.description}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
