import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Contato } from "./pages/Contato/Contato";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Cadastro01 } from "./pages/Cadastro/Cadastro01";
import { Cadastro02 } from "./pages/Cadastro/Cadastro02";
import { PagErro } from "./pages/PagErro/PagErro";



function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/cadastro01" component={Cadastro01} />
      <Route exact path="/cadastro02" component={Cadastro02} />
      <Route exact path="/pagerro" component={PagErro} />
    </Switch>
  </Router>
  );
}

export default App;
