
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import AddBody from './Components/AddBody/AddBody';



function App() {
  return (
    <Router>
      <div className="App">
        <nav className="header">
          <ul>

            <Link to="/">Home</Link>
            <br />
            <Link to="/body">Body</Link>
            <br />
            <Link to="/addBody">Add Body</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/admin">Admin</Link>

          </ul>
        </nav>


        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/body">
            <Body></Body>
          </Route>
          <Router path="/addBody">
            <AddBody></AddBody>
          </Router>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
