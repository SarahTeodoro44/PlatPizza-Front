import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';


export function Cadastro01() {
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
                        <input type="email" class="form-email" placeholder="Email"/>
                        <input type="password" class="form-senha" placeholder="Senha"/>
                        <input type="password" class="form-confirma-senha" placeholder="Confirmação Senha"/>
                        <Link to="./cadastro02"><button class="btn">Finalizar</button></Link>
                        <Link to="./cadastro"><a class="voltar"><p> &lt;Voltar</p></a></Link>
                    </div>
                </div> 
            </div>
        </main>
    )
}

