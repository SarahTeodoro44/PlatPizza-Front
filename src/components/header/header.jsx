import './header.css';
import Inicio from '../../assets/icons/inicio.png';
import Pesquisa from '../../assets/icons/pesquisa.png';
import Cardapio from '../../assets/icons/cardapio.png';
import Contato from '../../assets/icons/contato.png';
import Et from '../../assets/icons/LogoEt01.png';

export function Header() {
    return (
        <header>
            <div class="flex-container border-bottom-white">
                <div class="main-logo"><img class="fixed" width="280" src={Et }/></div>
                <div class="icons-nav"><img width="135" src={Inicio }/></div>
                <div class="icons-nav"><img width="135" src={Pesquisa }/></div>
                <div class="icons-nav"><img width="135" src={Cardapio }/></div>
                <div class="icons-nav"><img width="135" src={Contato }/></div>
                <div class="icons-nav"><img width="135" src={Contato }/></div>
            </div>
        </header>
    )
}