import './header.css';
import Inicio from '../../assets/icons/inicio.png';
import Pesquisa from '../../assets/icons/pesquisa.png';
import Cardapio from '../../assets/icons/cardapio.png';
import Contato from '../../assets/icons/contato.png';
import User from '../../assets/icons/user1.png';
import Et from '../../assets/icons/LogoEt01.png';

export function Header() {
    return (
        <header>
            <div class="flex-container border-bottom-white">
                <div class="main-logo"><img class="fixed" width="280" src={Et} alt="Logo" /></div>
                <div class="icons-nav"><img width="135" src={Inicio} alt="Inicio" /></div>
                <div class="icons-nav"><img width="135" src={Pesquisa} alt="Pesquisa" /></div>
                <div class="icons-nav"><img width="135" src={Cardapio} alt="Cardapio" /></div>
                <div class="icons-nav"><img width="135" src={Contato} alt="Contato" /></div>
                <div class="icons-nav"><img width="135" src={User} alt="Contato" /></div>
            </div>
        </header>
    )
}