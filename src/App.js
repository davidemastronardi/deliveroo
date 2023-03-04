import "./App.css";
import "animate.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import TerminiCondizioni from "./components/TerminiCondizioni";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="routes">
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Restaurant />} path="/restaurant"></Route>
          </Routes>
        </div>
        <TerminiCondizioni />
      </Router>
    </div>
  );
}

export default App;
