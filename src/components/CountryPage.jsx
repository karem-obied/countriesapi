import "../styles/style.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function CountryPage({ country }) {
  return country.length > 0 ? (
    <div className="country-page">
      <div className="back">
        <button style={{ position: "relative" }}>
          <Link
            to={`/`}
            style={{
              width: `100%`,
              height: `100%`,
              position: `absolute`,
              top: 0,
              left: 0,
            }}
          ></Link>
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="details">
        <div className="image">
          <img
            src={country[0].flags.png}
            alt={country[0].name.common + "flag"}
          />
        </div>
        <div className="info">
          <div className="name">{country[0].name.common}</div>
          <div className="lists">
            <div className="list">
              <div className="point">
                <strong>Native Name:</strong>
                <p>{country[0].name.official}</p>
              </div>
              <div className="point">
                <strong>Population</strong>
                <p>{country[0].population}</p>
              </div>
              <div className="point">
                <strong>Region</strong>
                <p>{country[0].region}</p>
              </div>
              <div className="point">
                <strong>Sub Region</strong>
                <p>{country[0].subregion}</p>
              </div>
              <div className="point">
                <strong>Capital</strong>
                <p>{country[0].capital[0]}</p>
              </div>
            </div>
            <div className="list">
              <div className="point">
                <strong>Top Level Domain</strong>
                <p>{country[0].tld[0]}</p>
              </div>
              <div className="point">
                <strong>Currencies</strong>
                <div className="group">
                  {Object.keys(country[0].currencies).map((key, index) => (
                    <p key={index}>{country[0].currencies[key].name}</p>
                  ))}
                </div>
              </div>
              <div className="point">
                <strong>Languages</strong>
                <div className="group">
                  {Object.keys(country[0].languages).map((key, index) => (
                    <p key={index}>{country[0].languages[key]}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="borders">
            <strong>Border Countries</strong>
            <div className="group">
              {country[0].borders ? (
                country[0].borders.map((nighbour, index) => (
                  <Link key={index} to={`/${nighbour}`}>
                    <p>{`${nighbour}`}</p>
                  </Link>
                ))
              ) : (
                <p>There Is No Border Countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CountryPage;
