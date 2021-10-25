import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './PagManutencao.css';
import Et from '../../assets/icons/LogoEt01.png';
import Inicio from '../../assets/icons/inicio.png';


export function PagManutencao() {
    return (
        <div class="container">
            <div>
                <img class="et" src={Et} alt="logo" />
                <div class="mant-i">
                    <div class="alert">
                        <p class="aviso">SITE EM MANUTENÇÃO</p>
                    </div>
                    <div class="mant-v">
                        <h2>Estamos passando por algumas manutenções, logo está página estara disponivel para uso.</h2>
                        <Link to="./home"><button class="btn-manutencao"><img class="btn-cs" src={Inicio} width='50px'/>Voltar ao Início</button></Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}