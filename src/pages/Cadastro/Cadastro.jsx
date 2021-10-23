import { React, useState, FormEvent } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import './Cadastro.css';
import BannerLogin from '../../assets/images/banner_login.png';
import Et from '../../assets/icons/LogoEt01.png';



export function Cadastro({ formData, setForm, navigation }) {

    const { nomeVM, cpfVM, telefoneVM } = formData;


    return (
        <>
            <main className="cadastro">
                <div>
                    <img className="et" src={Et} alt="logo" />
                    <img className="banner-login" src={BannerLogin} alt="banner" />
                    <div className="cadastro-area">
                        <div className="info">
                            <p className="digt">Digite seus Dados:</p>
                        </div>


                        <form>
                            <div className="cadastro-area2">
                                <input
                                    type="text"
                                    className="form-email edit-inp"
                                    placeholder="Nome Completo"
                                    name="nomeVM"
                                    value={nomeVM}
                                    onChange={setForm}
                                />

                                <input
                                    type="text"
                                    className="form-cpf edit-inp"
                                    placeholder="CPF"
                                    name="cpfVM"
                                    value={cpfVM}
                                    onChange={setForm}
                                />

                                <input
                                    type="text"
                                    className="form-celular edit-inp"
                                    placeholder="Celular"
                                    name="telefoneVM"
                                    value={telefoneVM}
                                    onChange={setForm}
                                />

                                <button
                                    className="btn"
                                    onClick={() => navigation.next()}
                                >
                                    Avançar
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

