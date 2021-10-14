import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';


export function Cadastro() {
    return (
        <main class="cadastro">
            <div>
                <img class="et" src={Et} alt="logo" />
                <img class="banner-login"  src={ BannerLogin} alt="banner"/>
                <div class="cadastro-area">
                    <div class="info">
                        <p>Digite seus Dados:</p>
                    </div>
                    <div class="cadastro-area2">
                        <input type="text" class="form-email" placeholder="Nome Completo"/>
                        <input type="text" class="form-cpf" placeholder="CPF"/>
                        <input type="text" class="form-celular" placeholder="Celular"/>
                        <Link to="./cadastro01"><button class="btn">Avançar</button></Link>
                    </div>
                </div> 
            </div>
        </main>
    )
}

