
import './header.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import Inicio from '../../assets/icons/icone_inicio.png';
import Pesquisa from '../../assets/icons/icone_lupa.png';
import Cardapio from '../../assets/icons/icone_cardapio.png';
import Contato from '../../assets/icons/icone_contato.png';
import User from '../../assets/icons/icone_user.png';
import Et from '../../assets/icons/LogoEt01.png';
import Exit from  '../../assets/icons/Exit.png';
import * as AiIcons from 'react-icons/ai'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
    const { isUserLogged, handleLogout } = useAuth();

    const history = useHistory();


    function goLogin() {
        if (isUserLogged === false) {
            return history.push('/login');
        } else {
            return history.push('/home')
        }
    }
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light border-bottom-white">
                <a class="navbar-brand" href="">
                    <img class="logo-header img-fluid" src={Et} alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse center-content" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/home"><img class="menu-icon-header" width="75" src={Inicio} title="Inicio" alt="Inicio" /></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="./cardapio"><img class="menu-icon-header" width="75" src={Cardapio} title="Cardápio" alt="Cardapio" /></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/home"><img class="menu-icon-header" width="75" src={Pesquisa} title="Pesquisa" alt="Pesquisa" /></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="./Contato"><img class="menu-icon-header" width="75" src={Contato} title="Contato" alt="Contato" /></Link>
                        </li>
                        <li class="nav-item">
                            <img class="menu-icon-header login-icon-header" width="75" src={User} onClick={goLogin} title="Login" alt="Login" />
                        </li>

                        {isUserLogged &&
                            (
                                <button
                                
                                 onClick={handleLogout}>
                                    <img src={Exit} title="exit" alt="exit" />
                                
                                </button>
                            )
                        }
                              <button
                               className="btn-carrinho-header"
                               onClick={() => { history.push('/pagpedido') }}>
                                <AiIcons.AiOutlineShoppingCart />
                                Carrinho
                             </button>
                    </ul>
                </div>
                {/* <li className="user-name">
                    <AiIcons.AiOutlineUser font-size="30px" />
                    <h1>{user && user.name}</h1>
                </li> */}
            </nav>
        </header >
    )
}