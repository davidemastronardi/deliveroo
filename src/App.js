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
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <div className="routes">
            <Routes>
              <Route element={<Home />} path="/"></Route>          
              <Route element={<Login />} path="/login"></Route>          
            </Routes>
          </div>
        </Router>
      

    </div>
  );
}

export default App;
