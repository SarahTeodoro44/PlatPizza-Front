import React from "react";
import './PagErro.css';
import Et from '../../assets/icons/LogoEt01.png';
import EtGif from '../../assets/icons/gifEt.gif';

export function PagErro() {
    return (
        <main class="pagerro">
            <div class="container center">
                <div class="conteudo">
                    <div class="item-v">4</div>
                    <div class="item">
                        <img src={EtGif} width="250"/>
                    </div>
                    <div class="item">4</div>
                </div>
            </div>
            <div class="frase">
                    <p class="two-colors">Perdido no espaço</p>
            </div>

            
        </main>

        
    )
}

