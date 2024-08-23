import "../styles/style.css";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="card" style={{ position: `relative` }}>
      <Link
        style={{
          width: `100%`,
          height: `100%`,
          position: `absolute`,
          top: 0,
          zIndex: 10,
          display: "block",
          left: 0,
        }}
        to={country.cca3}
      ></Link>
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
