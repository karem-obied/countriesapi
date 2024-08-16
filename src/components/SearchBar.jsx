import "../styles/style.css";
import { FaSearchLocation } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ setsearch }) {
  const [data, setData] = useState("");
  function handleChange(e) {
    setData(e.target.value);
    setsearch(data);
  }
  return (
    <div className="searchBar">
      <FaSearchLocation />
      <input
        type="text"
        placeholder={"Search for Country"}
        value={data}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
