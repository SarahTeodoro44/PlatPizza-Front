import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';


export function Cadastro02({ formData }) {

    const { fullName } = formData;

    return (
        <main className="cadastro">
            <div>
                <img className="et" src={Et} alt="logo" />
                <img className="banner-login" src={BannerLogin} alt="banner" />
                <div className="cadastro-area">
                    <div className="info">
                        <h1>Cadastro Concluído com sucesso, seja bem vindo {fullName}!</h1>
                    </div>
                    <div className="cadastro-area2">
                        <h2>Clique aqui para continuar</h2>
                        <Link to="./login"><button className="btn-2">Entrar</button></Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
