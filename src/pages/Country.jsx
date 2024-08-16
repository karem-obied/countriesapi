import CountryPage from "../components/CountryPage";

function Country() {
  async function fetchCountry() {
    const country = await fetch("https://restcountries.com/v3.1/all");
    return country;
  }

  const country = fetchCountry();

  return (
    <div>
      <CountryPage country={country} />
    </div>
  );
}

export default Country;
