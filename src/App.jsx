import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Contato } from "./pages/Contato/Contato";
import { Cadastro } from "./pages/Cadastro/Cadastro";




function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  </Router>
  );
}

export default App;
