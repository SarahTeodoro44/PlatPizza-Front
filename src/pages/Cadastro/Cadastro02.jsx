import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';


export function Cadastro02() {
    return (
        <main class="cadastro">
            <div>
                <img class="et" src={Et} alt="logo" />
                <img class="banner-login"  src={ BannerLogin} alt="banner"/>
                <div class="cadastro-area">
                    <div class="info">
                        <h1>Cadastro Concluído com sucesso, seja bem vindo !</h1>
                    </div>
                    <div class="cadastro-area2">
                        <h2>Clique aqui para continuar</h2>
                        <Link to="./login"><button class="btn-2">Entrar</button></Link>
                    </div>
                </div> 
            </div>
        </main>
    )
}
