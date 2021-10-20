import { React, useState, FormEvent } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';

export function Cadastro01({ formData, setForm, navigation, }) {

    const { email, senha, repetirSenha } = formData;

    function handleNewCadastro(event) {
        event.preventDefault();

        const goNext = () => {
            navigation.next();
        }
        console.log(formData)

        return goNext();
    }

    return (
        <main className="cadastro">
            <div>
                <img className="et" src={Et} alt="logo" />
                <img className="banner-login" src={BannerLogin} alt="banner" />
                <div className="cadastro-area">
                    <div className="info">
                        <p>Digite seus Dados:</p>
                    </div>
                    <form onSubmit={handleNewCadastro}>
                        <div className="cadastro-area2">
                            <input
                                type="email"
                                className="form-email edit-inp"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={setForm}
                            />
                            <input
                                type="password"
                                className="form-senha edit-inp"
                                placeholder="Senha"
                                name="senha"
                                value={senha}
                                onChange={setForm}
                            />
                            <input
                                type="password"
                                className="form-confirma-senha edit-inp"
                                placeholder="Confirmação Senha"
                                name="repetirSenha"
                                value={repetirSenha}
                                onChange={setForm}
                            />


                            <button
                                className="btn"
                                type="submit"
                            >
                                Finalizar
                            </button>



                            <button
                                className="voltar"
                                type="submit"
                            >
                                &lt;Voltar
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

