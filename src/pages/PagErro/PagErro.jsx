import React from "react";
import './PagErro.css';
import Et from '../../assets/icons/LogoEt01.png';


export function PagErro() {
    return (
        <main class="pagerro">
            <div class="container">
                <div class="area-error">
                    <img class="et" src={Et} alt="logo" />
                </div>

                <div class="frase">
                    <p>Perdido no espaço</p>
                </div>
            </div>
        </main>
    )
}