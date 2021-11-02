import { React, useState, FormEvent } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';
import { api } from '../../services/api';


import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function Cadastro01({ formData, setForm, navigation, }) {

    const { emailClienteVM, senhaVM, repetirSenha } = formData;

    function handleNewCadastro(event) {
        event.preventDefault();

        const goNext = () => navigation.next();

        api.post('/cliente/cadastro', formData)
            .then(response => {
                if (response.status == 201) {
                    goNext();
                }
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("Erro")
                    console.log(error.toJSON());
                } else if (error.request) {
                    toast.error("Erro")
                    console.log(error.toJSON());
                } else {
                    toast.error("Erro")
                    console.log(error.toJSON());
                }
            })
    }

    return (
        <main className="cadastro">
            <div>
                <img className="et" src={Et} alt="logo" />
                <img className="banner-login" src={BannerLogin} alt="banner" />
                <div className="cadastro-area">
                    <div className="info">
                        <p class="digt">Digite seus Dados:</p>
                    </div>
                    <form onSubmit={handleNewCadastro}>
                        <div className="cadastro-area2">
                            <input
                                type="email"
                                className="form-email edit-inp"
                                placeholder="Email"
                                name="emailClienteVM"
                                value={emailClienteVM}
                                onChange={setForm}
                            />
                            <input
                                type="password"
                                className="form-senha edit-inp"
                                placeholder="Senha"
                                name="senhaVM"
                                value={senhaVM}
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
                                className="btn-avancar"
                                type="submit"
                            >
                                Finalizar
                            </button>



                            <button
                                className="voltar"
                                type="submit"
                                onClick={() => navigation.previous()}
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

