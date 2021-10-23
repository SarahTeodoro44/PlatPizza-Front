import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './PagManutencao.css';
import Et from '../../assets/icons/LogoEt01.png';


export function PagManutencao() {
    return (
        <div class="container">
            <div>
                <img class="et" src={Et} alt="logo" />
                <div class="cadastro-area">
                    <div class="info">
                        <p class="aviso">SITE EM MANUTENÇÃO</p>
                    </div>
                    <div class="cadastro-area2">
                        <h2>Estamos passando por algumas manutenções, logo está página estara disponivel para uso.</h2>
                        <Link to="./login"><button class="btn-manutencao">Voltar ao Início</button></Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}