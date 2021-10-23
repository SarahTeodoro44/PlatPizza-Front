import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Contato } from "./pages/Contato/Contato";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Cadastro01 } from "./pages/Cadastro/Cadastro01";
import { Cadastro02 } from "./pages/Cadastro/Cadastro02";
import { PagErro } from "./pages/PagErro/PagErro";
import { Cardapio } from "./pages/Cardapio/Cardapio"
import { MultiStepForm } from './pages/Cadastro/MultiStepForm'
import { PagPedido } from "./pages/PagPedido/PagPedido";
import { PagManutencao } from "./pages/PagManutencao/PagManutencao";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {

  return (
    <AuthContextProvider>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/cadastro" component={MultiStepForm} />
          <Route exact path="/cadastro01" component={Cadastro01} />
          <Route exact path="/cadastro02" component={Cadastro02} />
          <Route exact path="/pagerro" component={PagErro} />
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="/pagpedido" component={PagPedido} />
          <Route exact path="/pagmanutencao" component={PagManutencao} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;