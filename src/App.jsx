import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";




function App() {
  return (
  <Router>
    <Switch>
    <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
  );
}

export default App;
