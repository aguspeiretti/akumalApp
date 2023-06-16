import "./App.css";
import NavBar from "./Front/components/NavBar";
import College from "./Front/pages/College";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Front/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Colegios" element={<College />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
