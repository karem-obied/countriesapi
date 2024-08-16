import "../styles/style.css";

function CountryCard({ country }) {
  function goToCountry() {}
  return (
    <div className="card" onClick={goToCountry}>
      <div className="flag">
        <img src={country.flags.png} alt={country.name.common + "flag"} />
      </div>
      <div className="details">
        <div className="name">{country.name.common}</div>
        <div className="list">
          <div className="point">
            <strong>Population</strong>
            <p>{country.population}</p>
          </div>
          <div className="point">
            <strong>Region</strong>
            <p>{country.region}</p>
          </div>
          <div className="point">
            <strong>Capital</strong>
            <p>{country.capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
