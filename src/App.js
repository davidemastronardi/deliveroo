import './App.css';
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

function App() {
  return (
    <div className="App">
        <Router>
          <div className="routes">
            <Routes>
              <Route element={<Home />} path="/"></Route>          
            </Routes>
          </div>
        </Router>
      

    </div>
  );
}

export default App;
