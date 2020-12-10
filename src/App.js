import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';
import Home from './Components/Home';
// import data from './data/data.json';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/country/:name">
          <CountryDetails></CountryDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
