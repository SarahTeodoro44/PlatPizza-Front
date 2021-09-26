import React from "react";
import { useHistory } from 'react-router-dom';
import './Login.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';
import Facebook from '../../assets/icons/facebook.png';
import Google from '../../assets/icons/google.png';

export function Login() {
    return (
        <main class="login">
            <div>
             <img class="et" src={Et} alt="logo" />
            <img class="banner-login"  src={ BannerLogin} alt="banner"/> 
                <div class="login-area">
                 <input type="text" class="form-control-cpf" placeholder="CPF"/>
                    <input type="password" class="form-control-senha" placeholder="Senha" />
                    <hr class="hr-2"></hr>
                    <button class ="btn">Entrar</button>  
                    <div class="new-account"><p>Crie sua conta</p></div>
                    <hr class="hr-3"></hr>
                    <div class="forgot-password"><p>Esqueceu sua senha ?</p></div>
                    <hr class="hr-4"></hr>
                    <div class="or"><p>OU</p></div>
                    <div class="icons-social">
                    <div class="icons"><a class="" href=""><img width="81" src={ Facebook }/></a></div>
                    </div>
                    <div class="icons-social2">
                    <div class="icons"><a class="" href=""><img width="81" src={ Google}/></a></div>
                    </div>
                 </div>
             </div>
             </main>
    )

   
}