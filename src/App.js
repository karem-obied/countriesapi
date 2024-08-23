import Header from "./components/Header";
import Country from "./pages/Country";
import Countries from "./pages/Countries";
import "./styles/root.css";
import "./styles/style.css";
import "./styles/light.css";
import "./styles/responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
