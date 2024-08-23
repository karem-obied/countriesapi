import CountryPage from "../components/CountryPage";
import { useState, useEffect } from "react";
import "../styles/style.css";
import { useLocation } from "react-router-dom";
function Country() {
  const [country, setCountry] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (country.length === 0) {
      const search = location.pathname;
      fetch(`https://restcountries.com/v3.1/alpha${search}`)
        .then((res) => res.json())
        .then((data) => {
          setCountry(data);
        });
    }
  }, [country, location.pathname]);
  return (
    <div className="CountryPage">
      <CountryPage country={country} />
    </div>
  );
}

export default Country;
