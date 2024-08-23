import "../styles/style.css";
import { FaStarAndCrescent } from "react-icons/fa";
function Header() {
  function change() {
    document.body.classList.toggle("light");
  }

  return (
    <header>
      <div>
        <div className="title">Where in the world?</div>
        <button className="btn" onClick={change}>
          <FaStarAndCrescent /> Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
