import React from "react";
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
                    <input type="email" class="form-email" placeholder="Email"/>
                    <input type="password" class="form-senha" placeholder="Senha"/>
                    <input type="password" class="form-confirma-senha" placeholder="Confirmação Senha"/>
                    <button class="btn">Finalizar</button>
                    <p class="voltar">Voltar</p>
                </div> 
            </div>
        </main>
    )
}

