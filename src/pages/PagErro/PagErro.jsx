import React from "react";
import './PagErro.css';
import Et from '../../assets/icons/LogoEt01.png';


export function PagErro() {
    return (
        <main class="pagerro">
            <section class="container center">
                <div class="item-v">4</div>
                <div class="item"><img class="item" src={Et} alt="logo" width="245px" /></div>
                <div class="item">4</div>
            </section>

            <div class="frase">
                    <p class="two-colors">Perdido no espaço</p>
            </div>
        </main>
    )
}