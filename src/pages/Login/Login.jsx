import { React } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import InputMask from 'react-input-mask';

import { firebase } from "../../services/firebaseConfig";

import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';
import Facebook from '../../assets/icons/icone_facebook.png';
import Google from '../../assets/icons/google.png';

import './Login.css';

import { useAuth } from '../../hooks/useAuth'

const signInWithFirebaseGoogle = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
}
const signInWithFirebaseFb = () => {
    var facebook_provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(facebook_provider)
        .then((re) => {
            console.log(re);
        })
        .catch((err) => {
            console.log(err);
        })
}

export function Login() {

    const user = useAuth();
    const history = useHistory();

    return (
        <div class="container">
            <div>
                <img class="et" src={Et} alt="logo" />
                <img class="banner-login" src={BannerLogin} alt="banner" />
                <div class="login-area">
                    <form onSubmit={user.handleSignIn}>
                    <InputMask
                            type="text"
                            class="form-control-cpf edit-inp"
                            required
                            placeholder="CPF"
                            value={user.userCpfLogin}
                            onChange={event => user.setUserCpfLogin(event.target.value)}
                            mask={"999.999.999-99"}
                            maskChar={null}
                        />

                        <input
                            type="password"
                            class="form-control-senha edit-inp"
                            required
                            placeholder="Senha"
                            value={user.userSenhaLogin}
                            onChange={event => user.setUserSenhaLogin(event.target.value)}
                        />
                        <hr class="hr-2"></hr>
                        <button
                            class="btn-login"
                            type="submit"
                        // onClick={() => history.push('/home')}
                        >
                            Entrar
                        </button>
                    </form>


                    <Link to="../cadastro"><div class="new-account"><p>Crie sua conta</p></div></Link>
                    <hr class="hr-3"></hr>
                    <div class="forgot-password"><p>Esqueceu sua senha ?</p></div>
                    <hr class="hr-4"></hr>
                    <div class="or"><p>OU</p></div>
                    <div class="icons-social">
                        <div class="icons"><img width="71" src={Facebook} onClick={signInWithFirebaseFb} /></div>
                    </div>
                    <div class="icons-social2">
                        <div class="icons"><img width="81" src={Google} onClick={signInWithFirebaseGoogle} /></div>
                    </div>
                </div>
            </div>
        </div>
    )


}