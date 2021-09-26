import './header.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Inicio from '../../assets/icons/inicio.png';
import Pesquisa from '../../assets/icons/pesquisa.png';
import Cardapio from '../../assets/icons/cardapio.png';
import Contato from '../../assets/icons/contato.png';
import User from '../../assets/icons/user1.png';
import Et from '../../assets/icons/LogoEt01.png';

export function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light border-bottom-white">
            <a class="navbar-brand" href=""><img class="logo-header img-fluid" src={Et} alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse center-content" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href=""><img class="menu-icon-header" width="120" src={Inicio} alt="Inicio" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><img class="menu-icon-header" width="120" src={Pesquisa} alt="Pesquisa" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><img class="menu-icon-header" width="120" src={Cardapio} alt="Cardapio" /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=""><img class="menu-icon-header" width="120" src={Contato} alt="Contato" /></a>
                    </li>
                    <li class="nav-item">
                        <Link to="./login"><img class="menu-icon-header" width="120" src={User} alt="Contato" /></Link>
                    </li>
                </ul>
            </div>
            </nav>
        </header>
    )
}