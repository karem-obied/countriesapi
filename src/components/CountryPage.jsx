import "../styles/style.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function CountryPage({ country, nighbours }) {
  const navigate = useNavigate;
  function back() {
    navigate("/");
  }

  return (
    <div className="country-page">
      <div className="back">
        <button onClick={back}>
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="details">
        <div className="image">
          <img src={country.flag} alt={country.name + "flag"} />
        </div>
        <div className="info">
          <div className="name">{country.name}</div>
          <div className="lists">
            <div className="list">
              <div className="point">
                <strong>Native Name:</strong>
                <p>{country.nativeName}</p>
              </div>
              <div className="point">
                <strong>Population</strong>
                <p>{country.population}</p>
              </div>
              <div className="point">
                <strong>Region</strong>
                <p>{country.region}</p>
              </div>
              <div className="point">
                <strong>Sub Region</strong>
                <p>{country.subregion}</p>
              </div>
              <div className="point">
                <strong>Capital</strong>
                <p>{country.capital}</p>
              </div>
            </div>
            <div className="list">
              <div className="point">
                <strong>Top Level Domain</strong>
                <p>{country.topLevelDomain}</p>
              </div>
              <div className="point">
                <strong>Currencies</strong>
                <div className="languages">{country.currencies}</div>
              </div>
              <div className="point">
                <strong>Languages</strong>
                <div className="languages">{country.languages}</div>
              </div>
            </div>
          </div>
          <div className="border">
            <strong>Border Countries</strong>
            <p>{nighbours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
