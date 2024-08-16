import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import { useState, useEffect, useReducer } from "react";
import { FaArrowDown } from "react-icons/fa";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [countriesList, dispatch] = useReducer(reducer, []);

  const handleSearch = (data) => {
    console.log(data);
    dispatch({ type: "initialize array" });
    dispatch({ type: "change name", value: data });
  };

  function reducer(state, action) {
    switch (action.type) {
      case "initialize array": {
        return countries;
      }
      case "change region": {
        let newCountries = state.filter((country) =>
          country.region
            .toLocaleLowerCase()
            .includes(action.region.toLocaleLowerCase())
        );
        return newCountries;
      }
      case "change name": {
        let newCountries = state.filter((country) =>
          country.name.common
            .toLocaleLowerCase()
            .includes(action.value.toLocaleLowerCase())
        );
        return newCountries;
      }
      default: {
        return "Unknow command";
      }
    }
  }

  useEffect(() => {
    if (countries.length === 0) {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          dispatch({ type: "initialize array" });
        });
    }
  });

  function show() {
    document.getElementById("ul").classList.toggle("show");
  }

  return (
    <div className="countries">
      <div className="top">
        <SearchBar setsearch={handleSearch} />
        <div className="listOfContenent">
          <p onClick={show}>
            Filter By Region <FaArrowDown />
          </p>
          <ul className="" id="ul">
            <li
              onClick={() => {
                dispatch({ type: "initialize array" });
                dispatch({ type: "change region", region: "Africa" });
              }}
            >
              Africa
            </li>
            <li
              onClick={() => {
                dispatch({ type: "initialize array" });
                dispatch({ type: "change region", region: "America" });
              }}
            >
              America
            </li>
            <li
              onClick={() => {
                dispatch({ type: "initialize array" });
                dispatch({ type: "change region", region: "Antarctica" });
              }}
            >
              Antarctica
            </li>
            <li
              onClick={() => {
                dispatch({ type: "initialize array" });
                dispatch({ type: "change region", region: "Asia" });
              }}
            >
              Asia
            </li>
            <li
              onClick={() => {
                dispatch({ type: "initialize array" });
                dispatch({ type: "change region", region: "Europe" });
              }}
            >
              Europe
            </li>
            <li
              onClick={() => {
                dispatch({ type: "initialize array" });
                dispatch({ type: "change region", region: "Oceania" });
              }}
            >
              Oceania
            </li>
          </ul>
        </div>
      </div>

      <div className="countriesList">
        {countriesList.length > 0
          ? countriesList.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))
          : "No Countries"}
      </div>
    </div>
  );
}

export default Countries;
